---
layout: page
title: Introduction
---
Here we present an object schema for describing a quizbowl tournament. Note that this is about the necessary data to pass back and forth and get a full recounting of what happened; it does not attempt to be any type of database schema.

## Current version: **1.0**

At this point, the schema is **complete** for this stage of its life. Your feedback is welcome—it's [open source](http://github.com/puls/qb-schema)!

While we don't anticipate removing anything from this schema in the future, we may add to it. We'll use [semantic versioning](http://semver.org); if any fields change names or anything is removed or any required fields are added, we'll increment the major version number. If optional fields are added, we'll increment the minor version number.

## How to use this schema

Start with the top-level [Tournament][tournament] object. You'll see how everything relates; note that while we include "to-one" and "to-many" relationships between objects, we do not include the inverse relationships, since they're not necessary for data interchange. Your app is welcome to model them.

## Serializing a tournament

Once you've modeled all of your data, you may find yourself wanting to serialize it to a file and send it to somebody else. [Serialization][serialization] is on its own page.

[tournament]: {{ site.baseurl }}/tournament
[serialization]: {{ site.baseurl }}/serialization
