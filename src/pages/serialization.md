---
title: Serialization
---

import VersionNumber from "../components/versionNumber"
import GenerateFile from "../components/generateFile"

This page describes a JSON-based serialization format to write a whole tournament to a file.

## Basic format

All of the data types in the schema for an object are either native JSON data types or references to other object types.

Indeed, native JSON data types serialize as you would expect in JSON; object types defined here serialize as JSON objects with a few extra fields.

The top level of the JSON file **must** be an object with keys for `version` (the current version is <code><VersionNumber /></code>), and `objects`, an array of objects; among these objects, there should be exactly one object of type `Tournament` and any number of other objects.

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

In the interest of incremental data transfer, it is _not_ considered an data format error to have a reference from an object to another object that isn't defined in the file. If the receiving end of the data transfer parses the file and cannot resolve the references, it should fail with an application-level error.

## Example file

<GenerateFile />
