---
title: (TEST - NOT FINISHED) Reducing the overload of filtering  options with
  dynamic filtering
description: Introducing filter options that dynamically update to provide a
  more tailored and responsive user experience.
author: Claire Short
date: 2023-12-22
tags:
  - post-award
users:
  - applicants
---
/// The problem



Users find it difficult to quickly sort through big sets of data and filter out what data they need. The current way in which the Find Monitoring Data tool filters data is not easy to use, or intuitive. It doesn't let users easily create and find the specific data they're looking for. This makes it difficult for users to smoothly and efficiently sort through big sets of data, making their experience with processing data poor.



### What we did 

First, we introduced a 'profile flow'. A "profile flow" is like a step-by-step guide where you choose your preferences or the things you're interested in. It helps the filter understand what you like or want to see. For example, just selecting to see all data related to Towns Fund. 

After testing the profile flow with users, we found it didn't fix all their needs when filtering down their data sets. They would still need to scroll through lots of irrelevant, or unrelated data, as some options still didn't necessarily match their initial filters preferences. 

\[XX IMAGES]

"I select Towns Deal because that is the fund I want to look at. This should change what regions, funded organisations, and outcomes are available, as not all the other options presented are relevant for Towns Deal funding."

The next iteration of design saw a single page scroll, with 'drop-down' (accordion) boxes. Each of these boxes contained a category for filtering. Although users liked that all the filtering options appeared on one screen, it was noted that users didn't like the long scrolling of this layout. They also mentioned that they wanted to see filters only display options, that refined based on their previous selections. 

\[XX IMAGES]

This is where we decided that applying a dynamic filter would answer all the users needs, whilst keeping the filtering flow simple and easy to understand. Dynamic filtering is a way to help users easily find what they are looking for, when filtering big group of data. Dynamic filtering lets a user choose filtering options, then only provides them with relevant options on their next filter. Dynamic filtering updates filter options in real time too, as users make selections. This means that users always see relevant choices and can easily explore the available data, avoiding cognitive overload.

Cognitive overload can happen when your brain gets too much information at once, making it feel overwhelmed and stressed. It's like trying to carry too many shopping bags at the same time – it's just too much to handle, and you might drop something. In the same way, cognitive overload can make it hard for your brain to process and understand things when there's too many details, information or tasks at once.

In order to make the dynamic filtering possible, we introduced a page by page filtering, creating six individual filtering pages. Each filter page is related to a specific category, for example, filter by reporting period, region, or funded organisation. Each time a user makes a selection on a filtering page and clicks the 'continue filtering button' it will lock in their filter selections and the dynamic filtering will come into play; on the next page, they will only see filter options that now fall under the categories of their previous selections. 



\[XX IMAGES]

### Evidence

Users said that the dynamic filtering makes the tool easier and quicker to use.

With dynamic filtering, users can now change their filters in real-time. This means they can explore big sets of data and see results right away. The tool gives instant feedback when users pick different filters, so they can understand how their choices affect what they see.

We found out that users like that the tool fast and easy to use. Dynamic filtering helps with this by making filtering their dataset options much simpler. When the users reach the last filter in the flow, they will have successfully selected all the relevant data, without feeling overwhelmed. We also saw the confidence in their filter choices increase, meaning there was less need for the users to want to 'check' their filter selections before download their file.