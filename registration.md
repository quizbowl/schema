---
layout: page
title: Registration
---
A `Registration` object describes one school or other organization's entry into a tournament. It comprises the basic details about an organization and one or more [`Team`][team] objects.

## Registration object

<table class="fields"><tbody>
  <tr class="required">
    <th>name</th>
    <td class="type">String</td>
    <td>The school or other organization's name.</td>
  </tr>
  <tr class="optional">
    <th>city</th>
    <td class="type">String</td>
    <td>The city/state/country of this team's origin.</td>
  </tr>
  <tr class="required">
    <th>teams</th>
    <td class="type"><nobr>Array <code><a href="{{ site.baseurl }}/team">Team</a></code></nobr></td>
    <td>The teams registered to play for this school or organization.</td>
  </tr>
</tbody></table>

[team]: {{ site.baseurl }}/team
