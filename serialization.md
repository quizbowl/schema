---
layout: page
title: Serialization
show_in_nav: false
---

This page describes a JSON-based serialization format to write a whole tournament to a file.

## Basic format

All of the data types in the schema for an object are either native JSON data types or references to other object types.

Indeed, native JSON data types serialize as you would expect in JSON; object types defined here serialize as JSON objects with a few extra fields.

The top level of the JSON file **must** be an object with keys for `version`, which is "1.1", and `objects`, an array of objects; among these objects, there should be exactly one object of type `Tournament` and any number of other objects.

The file's extension should be `.qbj` and its MIME type should be `application/vnd.quizbowl.qbj+json`.

## Objects

Every object at the top level of the JSON file **must** include a `type` field with its type as a string. The object **may** include an `id` field with a unique identifier as a string. If the object is referenced by a reference elsewhere in the file, it **must** include an `id` field, and the contents of the field **must** be unique among objects of the same type.

Objects defined within other objects **may** include a `type` field and an `id` field.

The same `id` **must not** be defined more than once in a file.

## References

Wherever an object includes another object as a field, it **may** substitute a "reference object" for the definition if the other object is defined with an `id` elsewhere in the file. Likewise, if an object includes an array of other objects, it **may** substitute an array of reference objects.

A reference object has one key called `$ref` with a value of the `id` of the object to which it points, so if you have an object defined in one place:

    {
      "id": "team_1",
      "type": "Team",
      "name": "Team 1",
      "players": [...]
    }

you can reference it elsewhere in the file with a reference object:

    { "$ref": "team_1" }

## Dangling references

In the interest of incremental data transfer, it is *not* considered an data format error to have a reference from an object to another object that isn't defined in the file. If the receiving end of the data transfer parses the file and cannot resolve the references, it should fail with an application-level error.

## Minimal example

That's a lot of really specific-sounding technical jargon. But the whole format plays out pretty straightforwardly in practice. Here's an example of a very small tournament, also available [for download](/test.qbj.zip):

    {
      "version": "0.5",
      "objects": [
        {
          "forfeit": false,
          "id": "game_1_damascus_verbank",
          "location": "o",
          "match_teams": [
            {
              "match_players": [
                {
                  "answer_counts": [
                    {"value": 10, "number": 3},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Merl Hackett"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Maeve Beatty"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 3},
                    {"value": 15, "number": 1},
                    {"value": -5, "number": 1}
                  ],
                  "player": {"name": "Riley McKenzie"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 2},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 2}
                  ],
                  "player": {"name": "Trevion Goldner"},
                  "tossups_heard": 19
                }
              ],
              "points": 260,
              "team": {"$ref": "team_962512"}
            },
            {
              "match_players": [
                {
                  "answer_counts": [
                    {"value": 10, "number": 0},
                    {"value": 15, "number": 1},
                    {"value": -5, "number": 1}
                  ],
                  "player": {"name": "Vincenza Sawayn"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 2},
                    {"value": -5, "number": 1}
                  ],
                  "player": {"name": "Sage Purdy"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 2},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Aurelie Hyatt"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 1}
                  ],
                  "player": {"name": "Otto Steuber"},
                  "tossups_heard": 19
                }
              ],
              "points": 150,
              "team": {"$ref": "team_717039"}
            }
          ],
          "overtimeTossups": 0,
          "round": 1,
          "serial": "1-2",
          "tossups": 19,
          "type": "Match"
        },
        {
          "forfeit": false,
          "id": "game_1_huntington_new_albany",
          "location": "C",
          "match_teams": [
            {
              "match_players": [
                {
                  "answer_counts": [
                    {"value": 10, "number": 3},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Zola Howe"},
                  "tossups_heard": 23
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 0},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Davion Hilll"},
                  "tossups_heard": 23
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 4},
                    {"value": 15, "number": 3},
                    {"value": -5, "number": 3}
                  ],
                  "player": {"name": "Art Stehr"},
                  "tossups_heard": 23
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 3},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 1}
                  ],
                  "player": {"name": "Curtis Harann"},
                  "tossups_heard": 23
                }
              ],
              "points": 345,
              "team": {"$ref": "team_607932"}
            },
            {
              "match_players": [
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Myriam Kautzer"},
                  "tossups_heard": 23
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 2},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Mckenzie Ledner"},
                  "tossups_heard": 23
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 2}
                  ],
                  "player": {"name": "Kiel King"},
                  "tossups_heard": 23
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 4},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 2}
                  ],
                  "player": {"name": "Alisha Hilll"},
                  "tossups_heard": 23
                }
              ],
              "points": 200,
              "team": {"$ref": "team_11459"}
            }
          ],
          "overtimeTossups": 0,
          "round": 1,
          "serial": "1-1",
          "tossups": 23,
          "type": "Match"
        },
        {
          "forfeit": false,
          "id": "game_2_damascus_new_albany",
          "location": "C",
          "match_teams": [
            {
              "match_players": [
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 2},
                    {"value": -5, "number": 1}
                  ],
                  "player": {"name": "Merl Hackett"},
                  "tossups_heard": 22
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 2},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Maeve Beatty"},
                  "tossups_heard": 22
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Riley McKenzie"},
                  "tossups_heard": 22
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 5},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Trevion Goldner"},
                  "tossups_heard": 22
                }
              ],
              "points": 285,
              "team": {"$ref": "team_962512"}
            },
            {
              "match_players": [
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Myriam Kautzer"},
                  "tossups_heard": 22
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 4},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 1}
                  ],
                  "player": {"name": "Mckenzie Ledner"},
                  "tossups_heard": 22
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 2},
                    {"value": 15, "number": 1},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Kiel King"},
                  "tossups_heard": 22
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 2},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Alisha Hilll"},
                  "tossups_heard": 22
                }
              ],
              "points": 290,
              "team": {"$ref": "team_11459"}
            }
          ],
          "overtimeTossups": 0,
          "round": 2,
          "serial": "2-1",
          "tossups": 22,
          "type": "Match"
        },
        {
          "forfeit": false,
          "id": "game_2_huntington_verbank",
          "location": "o",
          "match_teams": [
            {
              "match_players": [
                {
                  "answer_counts": [
                    {"value": 10, "number": 3},
                    {"value": 15, "number": 2},
                    {"value": -5, "number": 2}
                  ],
                  "player": {"name": "Zola Howe"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Davion Hilll"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 1},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Art Stehr"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 2},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Curtis Harann"},
                  "tossups_heard": 19
                }
              ],
              "points": 325,
              "team": {"$ref": "team_607932"}
            },
            {
              "match_players": [
                {
                  "answer_counts": [
                    {"value": 10, "number": 1},
                    {"value": 15, "number": 1},
                    {"value": -5, "number": 1}
                  ],
                  "player": {"name": "Vincenza Sawayn"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 2},
                    {"value": 15, "number": 0},
                    {"value": -5, "number": 0}
                  ],
                  "player": {"name": "Sage Purdy"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 0},
                    {"value": 15, "number": 1},
                    {"value": -5, "number": 2}
                  ],
                  "player": {"name": "Aurelie Hyatt"},
                  "tossups_heard": 19
                },
                {
                  "answer_counts": [
                    {"value": 10, "number": 0},
                    {"value": 15, "number": 1},
                    {"value": -5, "number": 1}
                  ],
                  "player": {"name": "Otto Steuber"},
                  "tossups_heard": 19
                }
              ],
              "points": 145,
              "team": {"$ref": "team_717039"}
            }
          ],
          "overtimeTossups": 0,
          "round": 2,
          "serial": "2-2",
          "tossups": 19,
          "type": "Match"
        },
        {
          "id": "school_damascus",
          "name": "Damascus",
          "teams": [
            {
              "id": "team_962512",
              "name": "Damascus",
              "players": [
                {
                  "id": "player_413233",
                  "name": "Merl Hackett",
                  "year": 11
                },
                {
                  "id": "player_290096",
                  "name": "Maeve Beatty",
                  "year": 11
                },
                {
                  "id": "player_961411",
                  "name": "Riley McKenzie",
                  "year": 10
                },
                {
                  "id": "player_186850",
                  "name": "Trevion Goldner",
                  "year": 12
                }
              ]
            }
          ],
          "type": "Registration"
        },
        {
          "id": "school_huntington",
          "name": "Huntington",
          "teams": [
            {
              "id": "team_607932",
              "name": "Huntington",
              "players": [
                {
                  "id": "player_816763",
                  "name": "Zola Howe",
                  "year": 12
                },
                {
                  "id": "player_413172",
                  "name": "Davion Hilll",
                  "year": 12
                },
                {
                  "id": "player_477641",
                  "name": "Art Stehr",
                  "year": 11
                },
                {
                  "id": "player_706462",
                  "name": "Curtis Harann",
                  "year": 11
                }
              ]
            }
          ],
          "type": "Registration"
        },
        {
          "id": "school_new_albany",
          "name": "New Albany",
          "teams": [
            {
              "id": "team_11459",
              "name": "New Albany",
              "players": [
                {
                  "id": "player_440854",
                  "name": "Myriam Kautzer",
                  "year": 12
                },
                {
                  "id": "player_440428",
                  "name": "Mckenzie Ledner",
                  "year": 9
                },
                {
                  "id": "player_56643",
                  "name": "Kiel King",
                  "year": 10
                },
                {
                  "id": "player_634960",
                  "name": "Alisha Hilll",
                  "year": 9
                }
              ]
            }
          ],
          "type": "Registration"
        },
        {
          "id": "school_verbank",
          "name": "Verbank",
          "teams": [
            {
              "id": "team_717039",
              "name": "Verbank",
              "players": [
                {
                  "id": "player_334028",
                  "name": "Vincenza Sawayn",
                  "year": 11
                },
                {
                  "id": "player_110388",
                  "name": "Sage Purdy",
                  "year": 10
                },
                {
                  "id": "player_627078",
                  "name": "Aurelie Hyatt",
                  "year": 10
                },
                {
                  "id": "player_535588",
                  "name": "Otto Steuber",
                  "year": 12
                }
              ]
            }
          ],
          "type": "Registration"
        },
        {
          "matches": [
            {"$ref": "game_1_damascus_verbank"},
            {"$ref": "game_1_huntington_new_albany"},
            {"$ref": "game_2_damascus_new_albany"},
            {"$ref": "game_2_huntington_verbank"}
          ],
          "name": "Test Tournament",
          "registrations": [
            {"$ref": "school_damascus"},
            {"$ref": "school_huntington"},
            {"$ref": "school_new_albany"},
            {"$ref": "school_verbank"}
          ],
          "type": "Tournament"
        }
      ]
    }

## Larger example

The complete data file for the 2014 HSNCT is [7 MB of JSON, or about 325 KB zipped](/hsnct2014.qbj.zip).
