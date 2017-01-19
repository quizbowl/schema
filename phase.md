---
layout: page
title: Phase
---
A `Phase` object describes a part of the tournament with a unified match structure. A typical tournament might have one phase for the preliminary rounds and a second phase for the playoff rounds.

## Phase object

<table class="fields"><tbody>
  <tr>
    <th class="required">name</th>
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
    <td>Whether teams may trade cards during this phase. For example, <code>true</code> would be used for a power-matching or elimination structure, while <code>false</code> could be used for a round-robin structure. If absent, assumed to be <code>false</code>.</td>
  </tr>
  <tr class="optional">
    <th>pools</th>
    <td class="type"><nobr>Array <code>Pool</code></nobr></td>
    <td>The pools (or similar structures) into which teams are placed for this phase.</td>
  </tr>
</tbody></table>

## Round object

<table class="fields"><tbody>
  <tr class="required">
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
    <td>Free-form information on what packet(s) were used in this round. If this is omitted and the `question_set` specified in the `Tournament` object has a packet that logically matches this round's `name` (e.g. "Round 1" and "Packet 1"), it can be assumed that the matching packet was used (and no other packets were used).</td>
  </tr>
  <tr class="optional">
    <th>matches</th>
    <td class="type"><nobr>Array <code><a href="{{ site.baseurl }}/match">Match</a></code></nobr></td>
    <td>The matches that took place in this round.</td>
  </tr>
</tbody></table>

## Pool object

A `Pool` object represents a set of teams that, in some meaningful sense, play together for the phase. They might be round-robin pools, playoff tiers, etc. It is not required that teams _only_ play matches within their pool.

<table class="fields"><tbody>
  <tr class="required">
    <th>name</th>
    <td class="type">String</td>
    <td>The name of the pool.</td>
  </tr>
  <tr class="optional">
    <th>description</th>
    <td class="type">String</td>
    <td>A description of the pool.</td>
  </tr>
  <tr class="optional">
    <th>position</th>
    <td class="type">Number</td>
    <td>The position/rank of this Pool among all Pool objects used for its Phase. Need not be unique (e.g. in the case of parallel pools).</td>
  </tr>
  <tr class="optional">
    <th>pool_teams</th>
    <td class="type"><nobr>Array <code>PoolTeam</code></nobr></td>
    <td>The assignments of teams to pools for this phase.</td>
  </tr>
</tbody></table>

## PoolTeam object

<table class="fields"><tbody>
  <tr class="required">
    <th>pool</th>
    <td class="type">Pool</td>
    <td>The Pool to which the Team is assigned.</td>
  </tr>
  <tr class="required">
    <th>team</th>
    <td class="type">Team</td>
    <td>The Team being assigned to the Pool.</td>
  </tr>
  <tr class="optional">
    <th>position</th>
    <td class="type">Number</td>
    <td>The final position/rank of this Team within this Pool.</td>
  </tr>
</tbody></table>
