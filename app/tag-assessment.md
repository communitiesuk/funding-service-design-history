---
layout: post
title: ASS9. Assessors can tag applications in a flexible way that works for them
description: ///DRAFTING/// Summary
date: 2023-10-13
author: Charles Reynolds-Talbot
tags: ['learn', 'pre-award'] 
---

## The problem
Through research we saw the primary tool for managing the whole assessment process was spreadsheets. Whilst these were prone to error and data loss, they were also provided a great level of freedom for teams to add additional content as needed to assign people to work and tag applications based on individual fund teams processes.

An unintentional consequence of moving fund teams away from spreadsheets into specifically design product was the removal of that freedom.

## What we did
We designed and implement the ability for teams to tag applications within the product in the way they needed to. 

We didn't want to add constraints to what tags teams could add. Instead allowing teams to create, add and remove any tag they needed as part of their process. This was designed to be intentionally flexible and powerful as a result. 

## Decisions
We decided not to link tags to pre-determined datasets, nor mirror created tags across multiple funds. This decision was made in order to maintain flexibility and not introduce unknown workflow from one fund team to another.

There is an assumption that creating tags for work allocation could be automated based on the list of users invited to use the product via Axure Active Directory. This needs further research as carries a risk of losing flexibility and not solving the right problem for users.