import faker from "faker";

function rand(max) {
  return Math.floor(Math.random() * max);
}

function shuffleInPlace(array) {
  if (array.length < 1) {
    return;
  }
  let index = array.length;
  while (index > 0) {
    index -= 1;
    const otherIndex = rand(index + 1);
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function letter(index) {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[index];
}

function toTitleCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export default function generateFileData({
  teams: teamCount,
  rounds: roundCount,
  includeMatchQuestions,
  verbose
}) {
  const matchesPerRound = teamCount / 2;
  const rooms = Array.from({ length: matchesPerRound }, () =>
    toTitleCase(faker.company.bsNoun())
  );
  const staff = Array.from({ length: teamCount }, () => faker.name.findName());
  function vb(valueIfVerbose) {
    return verbose ? valueIfVerbose : undefined;
  }

  function generateTournamentSite() {
    const city = faker.address.city();
    return {
      name: `Hyatt Regency ${city}`,
      place: vb(
        `${faker.address.streetAddress()}\n${city}, ${faker.address.stateAbbr()}`
      ),
      latitude: vb(+faker.address.latitude()),
      longitude: vb(+faker.address.longitude())
    };
  }

  function generateScoringRules() {
    return {
      name: "NAQT Rules",
      teams_per_match: vb(2),
      maximum_players_per_team: vb(4),
      regulation_tossup_count: vb(20),
      maximum_regulation_tossup_count: vb(24),
      minimum_overtime_question_count: vb(3),
      overtime_inclues_bonuses: vb(false),
      total_divisor: vb(5),
      maximum_bonus_score: 30,
      bonus_divisor: vb(10),
      minimum_parts_per_bonus: vb(3),
      maximum_parts_per_bonus: vb(3),
      points_per_bonus_part: vb(10),
      bonuses_bounce_back: vb(false),
      answer_types: [
        {
          value: -5,
          label: "Interrupt",
          short_label: "I",
          awards_bonus: false
        },
        {
          value: 10,
          label: "Regular tossup",
          short_label: "TU",
          awards_bonus: true
        },
        { value: 15, label: "Power", short_label: "P", awards_bonus: true }
      ]
    };
  }

  function generateMatch(teams, roundIndex, matchIndex) {
    const tossupsRead = 17 + rand(8);
    const lineups = teams.map(() => []);
    function insertRandomLineup(index, team, { firstQuestion, reason }) {
      shuffleInPlace(team.players);
      lineups[index].push({
        first_question: firstQuestion,
        reason,
        players: team.players
          .slice(0, Math.min(4, team.players.length))
          .map(player => ({ $ref: player.id }))
      });
    }
    for (const index of teams.keys()) {
      insertRandomLineup(index, teams[index], {
        firstQuestion: 1,
        reason: "initial"
      });
    }
    function randomPlayerFromTeam(teamIndex) {
      const currentLineups = lineups.map(
        teamLineupList => teamLineupList[teamLineupList.length - 1]
      );
      return {
        team: { $ref: teams[teamIndex].id },
        player:
          currentLineups[teamIndex].players[
            rand(currentLineups[teamIndex].players.length)
          ]
      };
    }
    const questions = Array.from(
      { length: tossupsRead },
      (ignored, question) => {
        if (question === Math.floor(tossupsRead / 2)) {
          for (const index of teams.keys()) {
            insertRandomLineup(index, teams[index], {
              firstQuestion: question + 1,
              reason: "halftime"
            });
          }
        }
        const hasNeg = rand(4) === 1;
        const hasFifteen = rand(5) === 1;
        const firstBuzzingTeam = rand(2);
        let value = hasNeg ? -5 : hasFifteen ? 15 : 10;
        const buzzes = [
          { ...randomPlayerFromTeam(firstBuzzingTeam), result: { value } }
        ];
        if (hasNeg) {
          buzzes.push({
            ...randomPlayerFromTeam(1 - firstBuzzingTeam),
            result: { value: hasFifteen ? 15 : 10 }
          });
        }
        return {
          question_number: question + 1,
          buzzes,
          bonus: {
            parts: Array.from({ length: 3 }, () => ({
              controlled_points: 10 * rand(2)
            }))
          }
        };
      }
    );
    function matchPlayer(teamIndex, player) {
      return {
        player: { $ref: player.id },
        tossups_heard: lineups[teamIndex].reduce(
          (sum, lineup, lineupIndex, teamLineups) => {
            const lineupPlayer = lineup.players.find(
              thisPlayer => thisPlayer.$ref === player.id
            );
            if (lineupPlayer && lineupIndex < teamLineups.length - 1) {
              return (
                sum +
                teamLineups[lineupIndex + 1].first_question -
                lineup.first_question
              );
            } else if (lineupPlayer) {
              return sum + tossupsRead - lineup.first_question + 1;
            }
            return sum;
          },
          0
        ),
        answer_counts: [-5, 10, 15].map(value => ({
          answer_type: { value },
          number: questions.reduce(
            (sum, question) =>
              sum +
              (question.buzzes.find(
                buzz =>
                  buzz.result.value === value && buzz.player.$ref === player.id
              )
                ? 1
                : 0),
            0
          )
        }))
      };
    }
    function matchTeam(team, teamIndex) {
      return {
        team: { $ref: team.id },
        forfeit_loss: vb(false),
        bonus_points: questions.reduce(
          (sum, question) =>
            sum +
            (question.buzzes.find(
              buzz => buzz.result.value > 0 && buzz.team.$ref === team.id
            )
              ? question.bonus.parts.reduce(
                  (bonusPoints, part) => part.controlled_points,
                  0
                )
              : 0),
          0
        ),
        correct_tossups_without_bonuses: vb(0),
        bonus_bounceback_points: vb(0),
        lightning_points: vb(0),
        lightning_bounceback_points: vb(0),
        match_players: team.players.map(player =>
          matchPlayer(teamIndex, player)
        ),
        lineups: includeMatchQuestions ? lineups[teamIndex] : undefined,
        suppress_from_statistics: vb(false)
      };
    }
    return {
      tossups_read: tossupsRead,
      location: vb(rooms[matchIndex]),
      packets: vb(`Packet ${roundIndex + 1}`),
      tiebreaker: vb(false),
      moderator: vb(staff[matchIndex * 2]),
      scorekeeper: vb(staff[matchIndex * 2 + 1]),
      serial: vb(`${roundIndex + 1}-${matchIndex + 1}`),
      match_teams: teams.map(matchTeam),
      match_questions: includeMatchQuestions ? questions : undefined,
      notes: vb(faker.lorem.sentence())
    };
  }

  function generateRounds(teams) {
    return Array.from({ length: roundCount }, (ignored, roundIndex) => {
      shuffleInPlace(teams);
      return {
        id: `round_${roundIndex + 1}`,
        name: `Round ${roundIndex + 1}`,
        description: vb("Just another round"),
        matches: Array.from(
          { length: matchesPerRound },
          (ignored, matchIndex) =>
            generateMatch(
              teams.slice(matchIndex * 2, (matchIndex + 1) * 2),
              roundIndex,
              matchIndex
            )
        )
      };
    });
  }

  function generateRegistrations() {
    let remainingTeamCount = teamCount;
    const result = [];
    let registrationIndex = 1;
    let teamIndex = 0;
    while (remainingTeamCount > 0) {
      const teamsForRegistration = Math.min(1 + rand(5), remainingTeamCount);
      const name = faker.address.city();
      const registration = {
        type: "Registration",
        id: `registration_${registrationIndex}`,
        name,
        location: vb(`${name}, ${faker.address.stateAbbr()}`),
        teams: Array.from(
          { length: teamsForRegistration },
          (ignored, index) => {
            const playerCount = 3 + rand(4);
            teamIndex += 1;
            return {
              id: `team_${teamIndex}`,
              name: `${name} ${letter(index)}`,
              players: Array.from(
                { length: playerCount },
                (ignored, playerIndex) => ({
                  id: `player_${teamIndex}_${playerIndex}`,
                  name: faker.name.findName(),
                  year: vb(9 + rand(4))
                })
              )
            };
          }
        )
      };
      remainingTeamCount -= teamsForRegistration;
      result.push(registration);
      registrationIndex += 1;
    }
    return result;
  }

  const tournament = {
    type: "Tournament",
    name: `Tournament generated ${new Date().toLocaleString()}`,
    short_name: vb(`Test ${Math.floor(Date.now() / 1000)}`),
    tournament_site: vb(generateTournamentSite()),
    scoring_rules: vb(generateScoringRules()),
    start_date: vb(new Date(Date.now()).toISOString()),
    end_date: vb(new Date(Date.now() + 28800000).toISOString()),
    registrations: [],
    phases: [
      {
        name: "All Matches",
        description: vb("All matches were played in this one round"),
        rounds: [],
        cards_traded: vb(false)
      }
    ],
    audience: "high_school"
  };

  const registrations = generateRegistrations(teamCount);
  tournament.registrations = registrations.map(registration => ({
    $ref: registration.id
  }));

  const teams = registrations.flatMap(registration => registration.teams);
  const rounds = generateRounds(teams);
  tournament.phases[0].rounds = rounds.map(round => ({ $ref: round.id }));

  return { version: "2.0", objects: [tournament, ...registrations, ...rounds] };
}
