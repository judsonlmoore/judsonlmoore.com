---
title:			Jira Task Templates
date:			2020-05-01 08:00:00 Z
categories:		['Product Managment']
tags:			jira
author:			judsonlmoore
excerpt:		
layout:			post
image:			/assets/images/2020/05/Jira-task-templates-featured-image.png
---


One of the most important responsibilities of the product managment role is to organize a team's backlog. The more organized the backlog is, and the more detailed the tasks are, then the more productive your refinement and planning meetings will be. Having a well-structured set of task templates is a great way to maintain consistancy in your tasks, streamlining the foundational step of the team's way of working. 

Every team is organized differently and so these tasks, their structure, and their labels will likely need to be tweaked in order to best fit your team's way of working. In fact, with my primary team, we use the hierarchical strucuture described here, but deviate from the task content fairly frequently.

The value in these templates is two fold. First, they establish a set of questions that should be considered every time a task is written. Secondly, by pre-formatting some of the repetitive sections of common tasks, they establish a higher degree of readabiity and consistancy across the tasks that your team will work with. Both of these points lead to clearer communication, freeing up everyone involved to focus on what really matters: **delivering user value.**

## How to use the templates

The templates are plain-text files written in the Jira syntax (a flavor of Markdown). Simply copy and paste the content of each file in to the description field of a new task and Jira will set the formating when you save the task. If you see syntax fragments in the new task, especially any extra `*` characters, then just re-paste into the description field and save again. This should fix any formatting issues.

Click these links to download the Jira Task Templates:

- [Epic task template]({{ site.url }}/assets/images/2020/05/jira-template-epic.txt)
- [Story task template]({{ site.url }}/assets/images/2020/05/jira-template-story.txt)
- [Design task template]({{ site.url }}/assets/images/2020/05/jira-template-design.txt)
- [Technical subtask template]({{ site.url }}/assets/images/2020/05/jira-template-technical.txt)
- [Bug task template]({{ site.url }}/assets/images/2020/05/jira-template-bug.txt)
- [Improvement task template]({{ site.url }}/assets/images/2020/05/jira-template-improvement.txt)

I've also spun up a Jira project with all of these tasks laid out, as well as some real-world examples of how multiple epics and stories at various states of progress look in the backlog and the Kanban board. You can log in to that project using these credentials: 

**login:** [https://judsonlmoore.atlassian.net/](https://judsonlmoore.atlassian.net/browse/JTT-3)  
**user:** ``Jira-templates@judsonlmoore.com``  
**password:** ``Iamthe1Passwordforthisuser!``  

The screenshots later in this post all come from this Jira project. 

## Task structure

In Jira's task strucuture, hirearchy is everything. Hirarchy, task types, labels, and versions are all important task elements that allow you to easily organize your backlog and Kanban board. 

I typically work with cross-functional teams, so I like to have technical subtasks for each function. This way, it is easy to track the various states of progress for each function. 

In order to complete a user story, you will likely need some design files, backend work, and then client work across web and apps. It will never be the case that design and client teams deliver results at the same time, as design is an engineering dependency. Therefor, it makes sense to have seperate sub-tasks for each function. This might also be really helpful for mapping work to pull requests, depending on how your CI is built.

Here is an overview of my default hirearchy of Jira tasks. The labels are especially important, as will be explained later in the section about Kanban boards: 

- **Epic task** describing a large body of work, its background, and rationale for pursuit
	- **Story task** defining deliverable user value
		- ux: **design task** with the `ux` label
		- be: **techical task** with the `backend` label
		- web: **techical task** with the `web` label
		- ios: **techical task** with the `ios` label
		- Android: **techical task** with the `android` label
- **Bug task** identifying a problem which *does block* the user, `labeled` with the offending platform
- **Improvment task** identifying a problem which *does not block* the user, `labeled` with the offending platform

*Epic tasks contain stories, stories contain design and technical sub tasks, bug and improvement tasks are reported on their own but are labeled with their cooresponding platform where the issue was observed.*

Now that you've had a chance to look at the templates and at the hirearchy, I'll go a little more in-depth regarding the logic behind the contents of each of these Jira task templates. 

## Epic

Teams appreciate knowing *why* they are doing the work they are being asked to perform. Epics are a great place to document the bigger picture, background information, and any relevant data which explains the *why* of the attached stories. Beyond team members appreciating that their efforts are delivering real, measureable value, it is also critical that the product manager understands why the product is moving in this direction and can explain it to stakeholders.

There are many ways to document product decisions. Many organizations have a wiki, such as [Confluence](https://confluence.atlassian.com/) for such things. I prefer to document with epics, as they are were the work is performed and to repeat this information elsewhere creates an inefficency (I strongly believe that every copy / paste action is a red flag of inefficency).

Here are the sections of the epic task that I focus my attention on: 

**Request and Value Generation**

This is the most fundemental information of any task: what is being asked and what is the expected outcome?

Use the ["Problem, Solution, Result" framework](https://help.optimizely.com/Ideate_and_Hypothesize/Design_an_effective_hypothesis) to explain how the outcome of this epic is expected to generate value for your users and business.

Notice how the outcome should be written to include *both* user and business value of this effort? Product managers spend a lot of time learning about the business requirements and thinking about how to shape that in to product delivery, but often this can get muddied as we like to champion delivering user value. The two can go hand in hand, for sure, but at this point in the epic, I find that it is helpful to split out the expected user value and business value. 

Not to lose my sense of altruism, I *always* write the user value first. 

**Assumptions**

It is common to make some assumptions. What are they? Do they lead to constraints? Risks? Is there a plan to mittigate any negative outcomes of these assumptions?

**Background & Strategic Fit**

How does the scope of this epic fit into the longer-term strategy of the product and organization? What researh was done to inform the decisions of this epic? What other background work has contributed to this epic coming to fruition? Link to all sources of background materials, especially to user resarch, other tasks, and to any corporate-level communication that led to this being the direction the product needs to move. 

**Goals & Success Metrics**

How will you know that the impact of this epic is worthwhile? What are the metrics you are trying to move? Is there a NPS or CES score? Is it revenue-driven? Adoption of new functionality? Engagement or other metrics? Define those up front the best you can. 

**Additional Information**

You don't work in a silo. There are other teams, stakeholders, and interested parties (think about the marketing opportunities) that will feel the impact of this work. Who are they, and have they been informed? This section of the epic task template serves as a reminder to those other entities that you might easilly forget about in your rush to get the epic written. Use this opportinity to @mention them or shoot them a message with your intent. 

Some questions to ask yourself when writing an epic:

- Who will be impacted by this epic?
- Which stakeholders should be informed?
- Does this epic's current priority justify it be worked on now?
- What risks will come with this task?

Once you've answered each of these questions to the best of your ability, you will be well-positioned to prepare all of the stories required to meet the goals of this epic. 

## Story

User stories are the heart of product development. These tasks are where the final product decisions, scope of work, and acceptance criteria are defined, from which the delivery team is able to clearly understand the functionality they are required to deliver.

The traditional user story follows a format like:

**As a** user purchasing an item,  
**I want** to provide my credit card details,  
**So that** I can pay with credit card.

To be honest, I almost never use this format when I write stories, but sometimes I will start with a statement like this and then remove it from the final story. This has been a trend amongst the teams I've worked with, who do not percieve this format of a user story as useful. If your team does like this format, then by all means, do use it. You can learn more about writing user stories like this from [Mountain Goat Software](https://www.mountaingoatsoftware.com/agile/user-stories).

The important thing is that the Story Task describes the functionality of the request. For more great insight about writing good user stories, and when that means to use alternative tools for defining user value, check out Roman Pichler's article, [10 Tips for Writing Good User Stories](https://www.romanpichler.com/blog/10-tips-writing-good-user-stories/). By the way, Roman is really awesome. I did my CSPO course with him in London and found his way of thinking very insightful.

To that end, here are some elements that you should include in your stories:

**Request**

In 1-2 sentences, describe what is being requested in this task. If it is a followup task, you can include a link to the previous task. 

**Acceptance Criteria**

The acceptance criteria lead to the "definition of done." Like with user stories, there is a traditional format, looking like 

**Given** that I want to pay with Visa,  
**When** I am purchasing an item,  
**Then** provide me with input fields for my card information.

Notice the symetry between this format of acceptance criteria and the user story? Again, some teams like it formatted this way, but I find it quite repetitive and usually just provide a list of things that need to happen for the story to be complete.

**Design**

If there is any UI work to be performed, then designs must be defined before a story can be ready for development. I like to provide mobile and desktop screenshots in the story and a link to Abstract / Figma / Sketch / etc... 

Screenshots will likely become out-of-date after a refinement or in a copywriting revision, and that is ok. It is enough for the screenshots to depict the general scope of the task and then the linked design project should be the single source of truth. Including the screenshots is helpful as a quick reference to team members and to external parties who might find this task and be curious what it is all about.

**More Info**

What other information is relevant to keep in mind while implementing this story? Is there background information? Is there previous work conducted? User research? A/B test results?

**Open questions**

Documenting questions is often overlooked but I believe that this is one of the most critical elements to include in a story task's description. As I outlined in further detail in my article titled, [A Sensible Definition of "Ready for Dev,"]({{ site.url }}/ready-for-dev/) no story can be ready until all questions have been addressed. 

Jira task comments are a suitable place for questions to appear, but I like to pull questions from the comments and from 1:1 meetings with team members, and the questions that come from refinement meetings, in to the description of the story so that we don't loose track of them. 

## Technical subtasks

I've always worked on cross-functional teams and find that creating sub tasks for each function is useful for tracking the progress of stories at a more grainuler level. It is likely that UX work needs to be done well before the rest of the functions can begin, and the backend might also need to be completed before other functions are completly done as well. 

There are added benefits as well for mapping individual tasks to pull requests, which help with keeping the team's repository and CI organized. 

99% of the time, these tasks are empty. They only have a title and a label which help to identify them on the Kanban board. A good title the technical subtasks can be just a repeat of the story task, prefixed with the function, like so:

Ask the user if they like this modal <-- *This is the story title*
- `ux`: ask the user if they like this modal
- `be`: ask the user if they like this modal
- `web`: ask the user if they like this modal
- `ios`: ask the user if they like this modal
- `android`: ask the user if they like this modal

I will show you a screenshot later in this article of how this looks in the backlog and on the Kanban board to better illustrate how this is helpful in tracking various states of progress. 

## Bugs

For priotitization purposes, it is useful to have two levels of reporting tasks: bugs and improvements (more in the next section). Bugs are reports of failing functionality that *blocks the user from getting the job done*. Bugs should clearly describe the error and how to reporduce it. They do not need to propose a solution to the problem, though should describe what the expected behavior is.

**Environment**

What device, OS, build, and production environment was the bug discovered on?

**Summary**

In 1-2 sentences, describe what the bug is and on what screen or view it occured. Provide your expectation of what you expected to happen and a description of what actually happened.

**Steps to reproduce**

Use bullet points to define the steps you took to produce the bug so that someone else can do the same. Don't forget to mention if a user needs to be logged-in (or logged-out) or meet some other prerequisit before starting these steps. 

Be sure to include the URL or name of the screen where the bug was observed. 

**Screenshots**

Attach a screenshot of the bug. Consider overlaying the screenshot with some annotation to highlight where on the screen the bug is located. This helps just in case the person who picks up the bug task is completely familiar with the functionality. 

**Logs**

If there are any logged data of the bug then copy / paste that here or provide a link to those logs.

## Improvements 

Improvement tasks are special. They may or may not fit into a story or an epic and they might not require refinement by the whole team. Improvement tasks are reports of sub-optimal functionality that was not caught before the feature went live, but which do not block the user from getting the job done. 

Depending on the nature of the improvement, if might qualify for immediate action or be something that stays in your backlog for quite some time.

As for the content of the improvement task, consider some mix of a story task and a bug task. What you are describing in this is unexpected functionality (like a bug) but you might also propose a solition (via acceptance criteria). Have a discussion with your team to find the mix that works best for you. 

Because improvement tasks often report the experience from one function, I recommend that you include the `label` of the offending function and title the task like:

* `function`: I am the name of the task

For the same reason that the technical tasks are named with this convention, the improvement tasks will simply be easier to identify in the backlog and Kanban boards. 

{% cloudinary /assets/images/2020/05/Jira-task-templates-featured-image.png alt="" %}

## Backlog

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. 

{% cloudinary /assets/images/2020/05/Jira-task-templates-featured-image.png alt="" %}

## Kanban Board

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tellus id viverra facilisis. 
