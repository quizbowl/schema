---
layout: page
title: Tournament
---
A `Tournament` object describes a tournament for which a single result is published. A `Tournament` consists of a number of [`Match`][match] objects, a number of [`Registration`][registration] objects, and other optional information.

## Tournament object

<table class="fields"><tbody>
  <tr class="required">
    <th>name</th>
    <td class="type">String</td>
    <td>The tournament's name.</td>
  </tr>
  <tr>
    <th>short_name</th>
    <td class="type">String</td>
    <td>An abbreviated version of the tournament's <code>name</code>. If omitted, assume the same as the <code>name</code>.</td>
  </tr>
  <tr class="optional">
    <th>site</th>
    <td class="type">TournamentSite</td>
    <td>Where this tournament happened, see below.</td>
  </tr>
  <tr class="optional">
    <th>start_date</th>
    <td class="type">String</td>
    <td>The tournament's start date, as an ISO 8601-formatted string in the tournament's local time zone.</td>
  </tr>
  <tr class="optional">
    <th>end_date</th>
    <td class="type">String</td>
    <td>The tournament's end date, as an ISO 8601-formatted string in the tournament's local time zone.</td>
  </tr>
  <tr class="optional">
    <th>first_playoff_round</th>
    <td class="type">Number</td>
    <td>The first round of this tournament's playoffs.</td>
  </tr>
  <tr class="optional">
    <th>players_per_side</th>
    <td class="type">Number</td>
    <td>The number of players per side during a game. If omitted, assume <code>4</code>.</td>
  </tr>
  <tr class="optional">
    <th>answer_types</th>
    <td class="type"><nobr>Array <code><a href="{{ site.baseurl }}/answer_type">AnswerType</a></code></nobr></td>
    <td>The different answer values possible in this tournament.</td>
  </tr>
  <tr class="optional">
    <th>registrations</th>
    <td class="type"><nobr>Array <code><a href="{{ site.baseurl }}/registration">Registration</a></code></nobr></td>
    <td>The organizations registered to play in this tournament.</td>
  </tr>
  <tr class="optional">
    <th>matches</th>
    <td class="type"><nobr>Array <code><a href="{{ site.baseurl }}/match">Match</a></code></nobr></td>
    <td>The matches that took place in this tournament.</td>
  </tr>
</tbody></table>

## TournamentSite object

<table class="fields"><tbody>
  <tr class="optional">
    <th>name</th>
    <td class="type">String</td>
    <td>The tournament site's name.</td>
  </tr>
  <tr class="optional">
    <th>place</th>
    <td class="type">String</td>
    <td>The location of the tournament. Free-form; the purpose is to enable people to find the site.</td>
  </tr>
  <tr class="optional">
    <th>latitude</th>
    <td class="type">Number</td>
    <td>The latitude of the tournament's site (for geolocation).</td>
  </tr>
  <tr class="optional">
    <th>longitude</th>
    <td class="type">Number</td>
    <td>The longitude of the tournament's site (for geolocation).</td>
  </tr>
</tbody></table>

[match]: {{ site.baseurl }}/match
[registration]: {{ site.baseurl }}/registration
