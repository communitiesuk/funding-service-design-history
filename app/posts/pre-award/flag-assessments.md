---
layout: post
title: Flag and stop assessments
description: Enabling assessments to be flag for attention
date: 2023-11-15
author: Charles Reynolds-Talbot
eleventyNavigation:
    parent: Access funding
    key: Pre-award history
tags: ['learn', 'pre-award'] 
users: ['assessors', 'fund policy']
screenshots:
  items:
    - text: Flagged assessment notification banner
      src: flagged-assessment.png
      caption: Screenshot of a notification banner when an assessment has been flagged
    - text: Flagged assessment status
      src: flagged-status.png
      caption: Screenshot of relevant status changes when an assessment has been flagged or stopped

---

## The problem
In the assessment process it's normal for assessors to need to ask for intervention with an application from a lead assessor, resulting in a pause or halt to the assessment. 

Some of the reasons an assessment might be flagged include:
- questions around eligibility
- missing or partial information from the application
- additional support or clarification needed

If the ability to flag isn't represented in the system there's an unreliable communications overhead to:
- raising the intervention
- tell other assessors not to assess it while the intervention is being resolved
- halting assessment permanently

## What we did
We designed a solution that enabled assessors to flag an application for any reason necessary. This changed the status of the assessment to tell other assessors not to continue while the intervention if being resolved.

The lead assessor the application was flagged to then has the option to remove the flag after resolution, or stop the assessment completely. This too resulted in an appropriate status change.

## Evidence
Through interviews with stakeholders and real-world use we observed that our first solution solved some problems while introducing others. As a result, flagging went through several iterations and enhancements.

## Decisions
Assessors can now flag applications for specific leads or teams so they know which flagged assessments they need to prioritise.

We also enabled multiple flags to be raised as we discovered through observation that a single flag blocked other teams from participating in the activity and offline conversations were continuing to take place.

Due to tech constraints we haven't yet implemented a notification process but we know this is something the team need to consider in the future to remove the need for manual checking or flags raised/resolved.