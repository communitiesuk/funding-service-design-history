---
layout: post
title: ASS4. Helping assessors to score applications wth a simplified model
description: ///DRAFTING/// Introducing standardised scoring to reduce assessor training and improve cross-fund evaluation and comparison
date: 2023-10-13
author: Charles Reynolds-Talbot
tags: learn
screenshots:
  items:
    - text: Scoring and rationale component
      src: scoring-component.png
      caption: Screenshot of the scoring and rationale component design implemented
    - text: How a score and rationale is presented
      src: scored-example.png
      caption: Screenshot example of how a score and rationale is presented to assessors

---

## The problem
From our research with different funds we identified that scores were used to weight the overall application. For example, some sections were scored to a maximum of 3 because they didn't have as much bearing on the overall submission, whereas some sections were scored up to 25 because they were much more important. 

What we saw is that assessors didn't always know when and why they should be scoring those individual points on those larger scales — the difference between an 11, 12, 13, 14, etc weren't clearly defined. 

## What we did
We tested a simplified scoring model range of 1-5 for all sections to foster consistency in the assessment process. We also added relatable quality terms to better define the outcome of that decision — was it a Poor response or a Strong one?

It was important for assessors to add a rationale to support their decision. Why did they mark a section as Good? What was missing that would have made it Strong? This was useful for when Lead Assessors were reviewing assessments as part of moderation or quality assurance. 

Sometimes scores would change, either because something relevant was found elsewhere in the application, or as a result of moderation and quality assurance. That is why we enable users to Rescore. This would replace the primary score but not delete it. Scoring history was preserved as an audit trail so users could see how a score might have changed over time

## Decisions
Due to delivery constraints, the simplified scores were exported to spreadsheets to enable the shortlisting part of the process to still happen. This is because the simplified 1-5 scoring model still needed to be converted with appropriate weighting applied to achieve the "true" score of the application.

This means the value of 1 can be adjusted according to the importance of the section. If the overall "true" score for that section is 3, then 1=0.6. If the overall score is 25, then 1=5. 

The team are exploring adding this weighted conversion directly into the product so processes, like shortlisting, can be done more effectively in the same space, without resorting to spreadsheets.