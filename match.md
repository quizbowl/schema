---
layout: page
title: Match
---
A `Match` object describes a single match scheduled between two teams. A `Match` object with `MatchTeam` objects but without `MatchPlayer` objects can be used to describe a match that has been scheduled but not played. Matches are contained in `Round` objects, which are contained in `Phase` objects of the `Tournament`.

If a `Match` includes `Lineup` objects on its `MatchTeam` objects and includes `MatchQuestion` objects, a complete scoresheet can be reconstructed.

## Match object

<table class="fields"><tbody>
  <tr class="optional">
    <th>tossups_read</th>
    <td class="type">Number</td>
    <td>The number of tossups read, <em>including</em> any tossups read in overtime.</td>
  </tr>
  <tr class="optional">
    <th>overtime_tossups_read</th>
    <td class="type">Number</td>
    <td>The number of tossups read in overtime.</td>
  </tr>
  <tr class="optional">
    <th>location</th>
    <td class="type">String</td>
    <td>The location of the match. Probably a room name.</td>
  </tr>
  <tr class="optional">
    <th>tiebreaker</th>
    <td class="type">Boolean</td>
    <td>Was the match a tiebreaker match?</td>
  </tr>
  <tr class="optional">
    <th>moderator</th>
    <td class="type">String</td>
    <td>Moderator's name.</td>
  </tr>
  <tr class="optional">
    <th>scorekeeper</th>
    <td class="type">String</td>
    <td>Scorekeeper's name.</td>
  </tr>
  <tr class="optional">
    <th>serial</th>
    <td class="type">String</td>
    <td>"For control room use only" type serial number.</td>
  </tr>
  <tr class="required">
    <th>match_teams</th>
    <td class="type"><nobr>Array <code>MatchTeam</code></nobr></td>
    <td>The performances of the teams in this match; see below.</td>
  </tr>
  <tr class="optional">
    <th>carryover_phases</th>
    <td class="type"><nobr>Array <code>Phase</code></nobr></td>
    <td>Additional phases in which this match should count, besides the one that actually contains it. This is used for "carrying over" games.</td>
  </tr>
  <tr class="optional">
    <th>match_questions</th>
    <td class="type"><nobr>Array <code>MatchQuestion</code></nobr></td>
    <td>The question-by-question account of what happened, see below.</td>
  </tr>
</tbody></table>

## MatchTeam object

<table class="fields"><tbody>
  <tr class="optional">
    <th>team</th>
    <td class="type"><a href="{{ site.baseurl }}/team">Team</a></td>
    <td>The team playing this side of the match.</td>
  </tr>
  <tr class="optional">
    <th>card</th>
    <td class="type">String</td>
    <td>The card this team was holding at the beginning of this match.</td>
  </tr>
  <tr class="required annotation">
    <td colspan="3">At least one of <code>team</code> or <code>card</code> is required.</td>
  </tr>
  <tr class="optional">
    <th>forfeit_loss</th>
    <td class="type">Boolean</td>
    <td>Did this team forfeit this match? If absent, assumed to be <code>false</code>. Note that it is possible for both teams in a match to forfeit.</td>
  </tr>
  <tr class="optional">
    <th>points</th>
    <td class="type">Number</td>
    <td>The total score for this team in this match.</td>
  </tr>
  <tr class="optional">
    <th>bonus_points</th>
    <td class="type">Number</td>
    <td>The number of points this team earned on bonuses.</td>
  </tr>
  <tr class="required annotation">
    <td colspan="3">It is invalid to provide both <code>points</code> and <code>bonus_points</code> since that could allow for inconsistent data. Generally, <code>bonus_points</code> is preferred; <code>points</code> is for results that do not include detailed (player-level) statistics.</td>
  </tr>
  <tr class="optional">
    <th>bonus_bounceback_points</th>
    <td class="type">Number</td>
    <td>The number of points this team earned on bonuses bounced back from the opponent.</td>
  </tr>
  <tr class="optional">
    <th>lightning_points</th>
    <td class="type">Number</td>
    <td>The number of points this team earned on lightning questions.</td>
  </tr>
  <tr class="optional">
    <th>lightning_bounceback_points</th>
    <td class="type">Number</td>
    <td>The number of points this team earned on lightning questions bounced back from the opponent.</td>
  </tr>
  <tr class="optional">
    <th>match_players</th>
    <td class="type"><nobr>Array <code>MatchPlayer</code></nobr></td>
    <td>The performances of the players on this team, see below.</td>
  </tr>
  <tr class="optional">
    <th>lineups</th>
    <td class="type"><nobr>Array <code>Lineup</code></nobr></td>
    <td>Which players were playing when, see below.</td>
  </tr>
  <tr class="optional">
    <th>suppress_from_statistics</th>
    <td class="type">Boolean</td>
    <td>Indicates that the match should be excluded from calculations of standings, statistics, etc. If absent, this will be assumed to be <code>false</code>.</td>
  </tr>
</tbody></table>

## MatchPlayer object

<table class="fields"><tbody>
  <tr class="required">
    <th>player</th>
    <td class="type"><a href="{{ site.baseurl }}/player">Player</a></td>
    <td>The player whose performance in this match is being stored.</td>
  </tr>
  <tr class="required">
    <th>tossups_heard</th>
    <td class="type">Number</td>
    <td>Number representing the number of tossups this player heard.</td>
  </tr>
  <tr class="required">
    <th>answer_counts</th>
    <td class="type"><nobr>Array <code>PlayerAnswerCount</code></nobr></td>
    <td>The number of this player's answers for each answer value.</td>
  </tr>
</tbody></table>

## Lineup object

<table class="fields"><tbody>
  <tr class="required">
    <th>firstQuestion</th>
    <td class="type">Number</td>
    <td>Which question number this lineup heard first</td>
  </tr>
  <tr class="required">
    <th>players</th>
    <td class="type"><nobr>Array <code>Player</code></nobr></td>
    <td>Which players were in this lineup. This array's length is less than or equal to the <code>max_players_per_side</code> field from the tournament's <code>ScoringRules</code> object.</td>
  </tr>
</tbody></table>

## PlayerAnswerCount object

<table class="fields"><tbody>
  <tr class="required">
    <th>number</th>
    <td class="type">Number</td>
    <td>Number of questions answered for this many points.</td>
  </tr>
  <tr class="optional">
    <th>value</th>
    <td class="type">Number</td>
    <td>Point value per answer of this type.</td>
  </tr>
  <tr class="optional">
    <th>answer_type</th>
    <td class="type"><a href="{{ site.baseurl }}/answer_type">AnswerType</a></td>
    <td>For nonstandard question types, the particular details about this answer type.</td>
  </tr>
  <tr class="required annotation">
    <td colspan="3">Exactly one of <code>value</code> or <code>answer_type</code> is required.</td>
  </tr>
</tbody></table>

## MatchQuestion object

<table class="fields"><tbody>
  <tr class="required">
    <th>question_number</th>
    <td class="type">Number</td>
    <td>Which question number this was. Starts at 1.</td>
  </tr>
  <tr class="required">
    <th>buzzes</th>
    <td class="type"><nobr>Array <code>MatchQuestionBuzz</code></nobr></td>
    <td>The number of points scored and by whom on each buzz. The length of this array will be equal to or less than the number of teams playing the match.</td>
  </tr>
  <tr class="optional">
    <th>bonus_points</th>
    <td class="type">Number</td>
    <td>How many bonus points were awarded on this question. May be omitted if the question type doesn't award a bonus.</td>
  </tr>
</tbody></table>

## MatchQuestionBuzz object

<table class="fields"><tbody>
  <tr class="required">
    <th>team</th>
    <td class="type"><code>Team</code></td>
    <td>Which team's player buzzed in.</td>
  </tr>
  <tr class="required">
    <th>player</th>
    <td class="type"><code>Player</code></td>
    <td>Which player buzzed in.</td>
  </tr>
  <tr class="required">
    <th>result</th>
    <td class="type"><code>AnswerType</code></td>
    <td>How many points the player got for buzzing in.</td>
  </tr>
</tbody></table>
