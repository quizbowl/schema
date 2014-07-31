---
layout: page
title: Match
---
A `Match` object describes a single match scheduled between two teams. A `Match` object with `MatchTeam` objects but without `IndividualPerformance` objects can be used to describe a match that has been scheduled but not played.

## Match object

<table class="fields"><tbody>
  <tr class="required">
    <th>round</th>
    <td class="type">Number</td>
    <td>The round number.</td>
  </tr>
  <tr class="required">
    <th>tossups</th>
    <td class="type">Number</td>
    <td>The number of tossups read, <em>including</em> any tossups read in overtime.</td>
  </tr>
  <tr class="optional">
    <th>overtime_tossups</th>
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
    <th>playoffs</th>
    <td class="type">Boolean</td>
    <td>Was the match a playoff match?</td>
  </tr>
  <tr class="optional">
    <th>forfeit</th>
    <td class="type">Boolean</td>
    <td>Was the match forfeited by one of the teams involved?</td>
  </tr>
  <tr class="optional">
    <th>serial</th>
    <td class="type">String</td>
    <td>"For control room use only" type serial number.</td>
  </tr>
  <tr class="required">
    <th>match_teams</th>
    <td class="type"><nobr>Array <code>MatchTeam</code></nobr></td>
    <td>The performances of the teams in this match, see below.</td>
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
    <td colspan="3">At least one of <b>team</b> or <b>card</b> is required.</td>
  </tr>
  <tr class="optional">
    <th>points</th>
    <td class="type">Number</td>
    <td>The number of points this team scored in this match.</td>
  </tr>
  <tr class="optional">
    <th>bonuses_controlled</th>
    <td class="type">Number</td>
    <td>The number of bonus questions controlled by this team (i.e., that it had the first opportunity to answer due to answering a tossup question correctly). If absent, this will be calculated as equal to the number of tossup questions answered correctly by this team's players.</td>
  </tr>
  <tr class="optional">
    <th>bounceback_points_available</th>
    <td class="type">Number</td>
    <td>The number of bonus points missed by this team's opponent that this team had the opportunity to answer. If absent, this will be calculated as equal to the number of bonuses controlled by the opponent times the maximum value of a bonus, minus the number of bonus points earned by the opponent.</td>
  </tr>
  <tr class="optional">
    <th>bounceback_points</th>
    <td class="type">Number</td>
    <td>The number of points earned on bonuses bounced back from the opponent.</td>
  </tr>
  <tr class="optional">
    <th>lightning_points</th>
    <td class="type">Number</td>
    <td>The number of points earned on lightning questions.</td>
  </tr>
  <tr class="optional">
    <th>individual_performances</th>
    <td class="type"><nobr>Array <code>IndividualPerformance</code></nobr></td>
    <td>The performances of the players on this team, see below.</td>
  </tr>
  <tr class="optional">
    <th>suppress_from_statistics</th>
    <td class="type">Boolean</td>
    <td>Indicates that the match should be excluded from calculations of standings, statistics, etc. If absent, this will be assumed to be <code>false</code>.</td>
  </tr>
</tbody></table>

## IndividualPerformance object

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
    <td>For nonstandard question types, the particular details about this question type.</td>
  </tr>
  <tr class="required annotation">
    <td colspan="3">Exactly one of <b>value</b> or <b>answer_type</b> is required.</td>
  </tr>
</tbody></table>
