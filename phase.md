---
layout: page
title: Phase
---
A `Phase` object describes a part of the tournament with a unified match structure. A typical tournament might have one phase for the preliminary rounds and a second phase for the playoff rounds.

## Phase object

<table class="fields"><tbody>
  <tr>
    <th>name</th>
    <td class="type">String</td>
    <td>The name of the phase, such as "Preliminary Rounds" or "Playoffs".</td>
  </tr>
  <tr class="optional">
    <th>description</th>
    <td class="type">String</td>
    <td>A description of the phase. Might contain information like how teams are split into pools, the use of power-matching or elimination-based formats, etc.</td>
  </tr>
  <tr class="optional">
    <th>rounds</th>
    <td class="type"><nobr>Array <code>Round</code></nobr></td>
    <td>The rounds within this phase.</td>
  </tr>
  <tr class="optional">
    <th>cards_traded</th>
    <td class="type">Boolean</td>
    <td>Whether teams may trade cards during this phase (representing a power-matching or elimination structure). If absent, assumed to be <code>false</code>.</td>
  </tr>
  <tr class="optional">
    <th>groups</th>
    <td class="type"><nobr>Array <code>Group</code></nobr></td>
    <td>The groups into which teams are placed for this phase.</td>
  </tr>
</tbody></table>

## Round object

<table class="fields"><tbody>
  <tr>
    <th>name</th>
    <td class="type">String</td>
    <td>The name of the round. Possibly numerical; possibly something like "Preliminary Tiebreaker".</td>
  </tr>
  <tr class="optional">
    <th>description</th>
    <td class="type">String</td>
    <td>A description of the round. Probably usually unnecessary, but useful for "special" rounds like tiebreakers.</td>
  </tr>
  <tr class="optional">
    <th>packets</th>
    <td class="type">String</td>
    <td>Free-form information on what packet(s) were used in this round.</td>
  </tr>
  <tr class="optional">
    <th>matches</th>
    <td class="type"><nobr>Array <code><a href="{{ site.baseurl }}/match">Match</a></code></nobr></td>
    <td>The matches that took place in this round.</td>
  </tr>
</tbody></table>

## Group object

A `Group` object represents a set of teams that, in some meaningful sense, play together for the phase. They might be round-robin pools, playoff tiers, etc. It is not required that teams _only_ play matches within their group.

<table class="fields"><tbody>
  <tr>
    <th>name</th>
    <td class="type">String</td>
    <td>The name of the group.</td>
  </tr>
  <tr class="optional">
    <th>description</th>
    <td class="type">String</td>
    <td>A description of the group.</td>
  </tr>
  <tr class="optional">
    <th>group_teams</th>
    <td class="type"><nobr>Array <code>GroupTeam</code></nobr></td>
    <td>The assignments of teams to groups for this phase.</td>
  </tr>
</tbody></table>

## GroupTeam object

<table class="fields"><tbody>
  <tr>
    <th>group</th>
    <td class="type">Group</td>
    <td>The Group to which the Team is assigned.</td>
  </tr>
  <tr>
    <th>team</th>
    <td class="type">Team</td>
    <td>The Team being assigned to the Group.</td>
  </tr>
  <tr class="optional">
    <th>rank</th>
    <th class="type">Number</td>
    <td>The final ranking of this Team within this Group.</td>
  </tr>
</tbody></table>
