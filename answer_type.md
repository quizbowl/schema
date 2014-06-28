---
layout: page
title: AnswerType
---
A `AnswerType` object has all kinds of esoteric details about what happens on different answer types. If you're talking about the traditional -5/10/15 answer types, you can skip this and use the `value` field instead.

## AnswerType object

<table class="fields"><tbody>
  <tr class="required">
    <th>value</th>
    <td class="type">Number</td>
    <td>The number of points a player receives for this answer type.</td>
  </tr>
  <tr class="optional">
    <th>label</th>
    <td class="type">String</td>
    <td>How to label this answer type on reports.</td>
  </tr>
  <tr class="optional">
    <th>short_label</th>
    <td class="type">String</td>
    <td>How to label this answer type on reports when space is limited, perhaps in a table column header.</td>
  </tr>
  <tr class="optional">
    <th>awards_bonus</th>
    <td class="type">Boolean</td>
    <td>Whether or not the team that gets this answer value will next receive a bonus question.</td>
  </tr>
</tbody></table>
