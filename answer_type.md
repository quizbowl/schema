---
layout: page
title: AnswerType
---
An `AnswerType` object has details about how tossups can be answered. If you're talking about the traditional -5/10/15 answer types or some subset thereof, you can skip this and use the `value` field instead.

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
    <td>How to label this answer type on reports. If omitted, turn the <code>value</code> into a string.</td>
  </tr>
  <tr class="optional">
    <th>short_label</th>
    <td class="type">String</td>
    <td>How to label this answer type on reports when space is limited, perhaps in a table column header. If omitted, use the <code>label</code> field.</td>
  </tr>
  <tr class="optional">
    <th>awards_bonus</th>
    <td class="type">Boolean</td>
    <td>Whether or not the team that gets this answer value will next receive a bonus question. If omitted, assume <code>true</code> if <code>value</code> is greater than zero and false otherwise.</td>
  </tr>
</tbody></table>
