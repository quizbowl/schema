---
layout: page
title: Match
---
A `Match` object describes a single match scheduled between two teams. A `Match` object with `MatchTeam` objects but without `MatchPlayer` objects can be used to describe a match that has been scheduled but not played.

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
    <th>bonuses_heard</th>
    <td class="type">Number</td>
    <td>The number of bonus questions heard by this team. If absent, this will be calculated as equal to the number of tossup questions answered correctly by this team's players.</td>
  </tr>
  <tr class="optional">
    <th>bounceback_opportunities</th>
    <td class="type">Number</td>
    <td>The number of bonus parts missed by this team's opponent that this team had the opportunity to answer. If absent, this will be calculated as equal to the number of tossup questions answered correctly by the opponent's players minus the number of bonus points earned by the opponent.</td>
  </tr>
  <tr class="optional">
    <th>bounceback_points</th>
    <td class="type">Number</td>
    <td>The number of points earned on bonuses bounced back from the opponent.</td>
  </tr>
  <tr class="optional">
    <th>lightning_points</th>
    <td class="type">Number</td>
    <td>The number of points earned on lightning rounds.</td>
  </tr>
  <tr class="optional">
    <th>match_players</th>
    <td class="type"><nobr>Array <code>MatchPlayer</code></nobr></td>
    <td>The performances of the players on this team, see below.</td>
  </tr>
</tbody></table>

## MatchPlayer object

<table class="fields"><tbody>
  <tr class="required">
    <th>player</th>
    <td class="type"><a href="{{ site.baseurl }}/player">Player</a></td>
    <td>The player who scored these points.</td>
  </tr>
  <tr class="required">
    <th>tossups</th>
    <td class="type">Number</td>
    <td>Number representing the number of tossups this player heard.</td>
  </tr>
  <tr class="required">
    <th>fifteens</th>
    <td class="type">Number</td>
    <td>Number representing the number of tossups this player answered correctly before the power mark.</td>
  </tr>
  <tr class="required">
    <th>tens</th>
    <td class="type">Number</td>
    <td>Number representing the number of tossups this player answered correctly.</td>
  </tr>
  <tr class="required">
    <th>neg_fives</th>
    <td class="type">Number</td>
    <td>Number representing the number of tossups this player answered incorrectly and lost five points on.</td>
  </tr>
</tbody></table>
