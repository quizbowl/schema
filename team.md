---
layout: page
title: Team
---
A `Team` has a team name, other entry-specific information about the team that may not apply to other teams from the same organization, and a list of [`Player`][player] objects.

## Team object

<table class="fields"><tbody>
  <tr class="required">
    <th>name</th>
    <td class="type">String</td>
    <td>The team's name.</td>
  </tr>
  <tr class="optional">
    <th>division</th>
    <td class="type">String</td>
    <td>The division in which this team is playing in this tournament.</td>
  </tr>
  <tr class="optional">
    <th>players</th>
    <td class="type"><nobr>Array <code><a href="{{ site.baseurl }}/player">Player</a></code></nobr></td>
    <td>The players registered to play on this team.</td>
  </tr>
</tbody></table>

[player]: {{ site.baseurl }}/player