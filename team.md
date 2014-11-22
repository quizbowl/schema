---
layout: page
title: Team
---
A `Team` has a team name, other entry-specific information about the team that may not apply to other teams from the same organization, a list of [`Player`][player] objects, and optionally, a list of `Rank` objects.

## Team object

<table class="fields"><tbody>
  <tr class="required">
    <th>name</th>
    <td class="type">String</td>
    <td>The team's name.</td>
  </tr>
  <tr class="optional">
    <th>players</th>
    <td class="type"><nobr>Array <code><a href="{{ site.baseurl }}/player">Player</a></code></nobr></td>
    <td>The players registered to play on this team.</td>
  </tr>
  <tr class="optional">
    <th>ranks</th>
    <td class="type"><nobr>Array <code><a href="#Rank">Rank</a></code></nobr></td>
    <td>The ranks achieved by this team.</td>
  </tr>
</tbody></table>

## Rank object

<table class="fields"><tbody>
  <tr class="required">
    <th>ranking</th>
    <td class="type"><a href="{{ site.baseurl }}/ranking">Ranking</a></td>
    <td>A <code><a href="{{ site.baseurl }}/ranking">Ranking</a></code> for which the team is eligible.</td>
  </tr>
  <tr class="optional">
    <th>position</th>
    <td class="type">Number</td>
    <td>The rank the team has achieved among all teams eligible for the given Ranking. Omitting this field indicates that the rank has not been determined yet (e.g. because the tournament is still in progress) but the team is eligible for the Ranking. May not be unique (i.e., there may be a tie).</td>
  </tr>
</tbody></table>

[player]: {{ site.baseurl }}/player
