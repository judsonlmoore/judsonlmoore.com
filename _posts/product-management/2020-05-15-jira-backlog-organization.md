---
title:			How to organize the Jira backlog and Kanban board
description:	This methodology takes the stress out of organizing your Jira backlog and Kanban board so that you can focus on what matters - delivering user value.
categories:		['product management']
tags:
  - jira
image:			/assets/images/2020/05/jira-backlog-organization-featured-image.png
---


One of my career goals is to work at Atlassian one day because I want to learn how the people who built the Jira project management software use it themselves. I've used Jira in a variety of team environments and often get the feeling that it isn't used correctly, or at the minimum, it isn't being used very efficiently. Of course, probably the only entity capable of knowing how the software can best be used for a team is by that team itself. 

How a team works with Jira is dependent on how Jira is set up and what practices of organizing tasks the team incorporates into their general way of working.

In this article, I will provide examples of how I set up the Jira backlog and Kanban board, their workflows, and general best practices for using Jira to organize the work of cross-functional software delivery teams. 

This article uses examples and screenshots from an example Jira project populated with a task structure explained in this article with [Jira task templates]({{ site.url }}/jira-task-templates/). If you've not yet read that article, you might find it worthwhile to read that first and then return to this article. 

You can access the example Jira project by using these credentials:

**login:** [https://judsonlmoore.atlassian.net/](https://judsonlmoore.atlassian.net/browse/JTT-3)  
**user:** ``Jira-templates@judsonlmoore.com``  
**password:** ``Iamthe1Passwordforthisuser!``

You don't need to log in to that project to follow along with these articles, but should you be interested in taking a self-exploratory deeper dive into how the example Jira project is set up, then be my guest.

If you have any questions that I don't answer here, please leave me a comment at the end of this article, and I will respond to you ASAP.

{% cloudinary /assets/images/2020/05/jira-project-classic-templates.png alt="Jira default classic project templates" caption="" %}

## Jira anatomy

Jira is a very sophisticated and highly-customizable project management software. I've used Jira as part of teams with focuses ranging from content writing to product marketing, and of course, product management and software delivery.

The first thing Jira will ask you when you spin up a new project is to select a project template. The options are: 

* **Kanban** - Suits teams who control work volume from a backlog.
* **Scrum** - For teams that deliver work on a regular schedule.
* **Bug tracking** - Great for teams who don't need a board.

For this article, I chose the Kanban setup. 

From a delivery team perspective, there are two basic screens within this Jira set up that are critical for organizing a team's work: the backlog and the Kanban board. When setting up properly, and with the systematic use of labels, hierarchy, versions, and task linking, it is easy to drill down on to the topics where the team should focus.

{% cloudinary /assets/images/2020/05/jira-backlog-example.png alt="An example backlog in Jira with epics, stories, and subtasks" caption="An example backlog in Jira with epics, stories, and subtasks" %}

## Backlog

The backlog view of Jira is the Product Manager's playground. From this view, tasks can quickly be filtered by version and epic, as well as any number of other label-based custom filters. 

In addition to seeing the story tasks within the epics, you will also see the story's sub-tasks nested in the backlog. Clicking on any of these tasks reveals the task content in the right-most panel. 

Before a refinement meeting, the tasks can be moved up or down in the backlog to shift their priority. This means team members can have a look at the backlog any time and see what work is coming their way and already start to think about the challenges the task presents and what questions they have about the requirements. 

Then during a refinement, simply start at the top of the backlog and work your way down until you run out of time (I think it is safe to assume you won't run out of stories before you run out of time!)

Moving a story into Ready for Dev will move all of that story's sub-tasks with it. Sub-tasks can also be moved into Ready for Dev independent of the story, which might make sense for any discovery or UX tasks that need to be done before the story's requirements can be fully fleshed out. 

Some argue that a story's sub-tasks should not be moved into Ready for Dev before the story itself is ready. That is a fair argument to make, but again this comes down to the way the team likes to work, and in my experience, it is useful for UX tasks to live within the story for contextual and documentation purposes. As UX tasks get done before the story can be adequately refined, this means they often progress down the Kanban board before the story is Ready for Dev.

From a task-linking perspective, it is easier to have all tasks related to a story living within that story, rather than having additional stories which only cover the UX scope. 

{% cloudinary /assets/images/2020/05/jira-ready-for-dev-example.png alt="An example backlog in Jira with epics, stories, and subtasks being shown as ready for dev" caption="" %}

## Ready for Dev

Jira allows for some customization of the backlog screen. I find that it is useful to have both backlogged tasks as well as the Ready for Dev tasks in this singular view because Ready for Dev tasks have not started to be worked on yet.

By presenting these tasks in one view, it is easy to see how much work is "ready," so that you can determine when a refinement meeting has generated enough work that the refinement can be ended early (or skipped), so as not to waste the team's valuable time.

What are the requirements for a task to be considered Ready for Dev? As I write about in [this article]({{ site.url }}/ready-for-dev/), a sensible definition of "ready" is when the team has had an opportunity to ask questions about a task and all of those questions have been responded to. 

It may or may not be possible to respond to all questions during a single refinement meeting, which is why it is useful to provide the team with backlog tasks in advance so that they can come prepared with questions or so that you can already investigate potential responses. 

A team can get stuck when there are not many tasks that are Ready for Dev, and there are still too many open questions in the backlog, preventing tasks to advance in to "ready." Maintaining this balance is a key responsibility of the product manager, but it takes input from the whole team to overcome it. 

{% cloudinary /assets/images/2020/05/jira-kanban-board-example.png alt="An example Jira Kanban board with columns and swimlanes" caption="" %}

## Kanban board

The Kanban board provides an overview of all tasks that are in some state of progress. As a product manager, I rarely look at the Kanban board except for the PO Review column (more on that later), but it is a very informative screen.

Pictured above is the Kanban board from the example Jira project mentioned at the beginning of this article. You can see all of the board's columns and a few of the swimlanes representing tasks with specific labels. The tasks shown here represent various states of done. 

As you can see, those tasks associated with Story 1 are further to the right than those associated with Story 2. Design and backend tasks have also progressed more than web tasks. There is also a web improvement task that is not associated with a story.

Using the Kanban board, the product manager, and any team member or stakeholder can quickly see what parts of delivery are done and which are coming soon.

Now let's take a look at how the columns and swimlanes are set up. 

{% cloudinary /assets/images/2020/05/jira-kanban-board-column-settings.png alt="Column management settings in a Jira Kanban project" caption="Column management settings in a Jira Kanban project" %}

### Columns

Kanban board columns represent the various states of progress in which a task can be. Depending on your team's ways of working, you should consider adding and removing columns here. For example, in the past, I had the luxury of a dedicated QA engineer on the team and so one column was **In QA**. I advise that you find a balance of columns representing thoroughness, but don't overdo it, or you risk it becoming too difficult to look at the board. 

Here is a brief explanation of the columns from this example Jira project and how they are defined. 

*Note: the first column contains the states which appear on the backlog screen.*

* **Ready for Dev** - the task is refined, and every question has a response
* **In progress** - the task has been picked up by a member of the delivery team and they are working on it
* **Ready for review** - the task is ready for a technical code review. If a problem is found, the task returns to "in progress."
* **PO review** - the task has passed code review, and now the PO confirms that the outcome is what was expected. If a problem is found, the task returns to "in progress."
* **Done** - the PO determines that the requirements are fulfilled, and the task is done

Conveniently, when all of the sub-tasks of a story are "done," Jira will automatically ask you if you want to set the story to "done" as well. For this reason, stories typically move from "in progress" to "done" in one step.

{% cloudinary /assets/images/2020/05/jira-kanban-board-swimlane-settings.png alt="Swimlane settings in a Jira Kanban project" caption="Swimlane settings in a Jira Kanban project" %}

### Swimlanes

Swimlanes can be populated with tickets matching any criteria you determine via a JQL query. This gives lots of flexibility to define any value of a task to determine which swimlane it should be in. 

In the example I share in the screenshot above, you can see the JQL parameters that I have used in the example Jira project. For cross-functional teams, I recommend a swimlane for each delivery function. I also pull out a dedicated swimlane for bugs and put that right on top, as bugs should have a very high priority. 

Here is a breakdown of the swimlanes in this example Jira project.

* **Bugs** - For the highest visibility, bug issue types go first.
* **Labels** - Corresponds to the labels that are defined inside the tasks. Convenient for organizing delivery functions. These will include improvement tasks as well.
* **+ Everything else** - This is a required swimlane and the home for all tasks that aren't anywhere else. In this example, stories would be here.

A common mistake is that after your initial board setup, your team will adopt a new label that does not get reflected here. Be sure to keep your swimlane settings up to date with your team's ways of working. 

## Final thoughts

I hope that these organizing principals offered you some concrete takeaways you can apply in your team's way of working. Please leave me a comment below to let me know which parts you found most useful, and if any parts of this don't make any sense to you. Do you have a different approach to organizing Jira? I'd love to learn about it!

Please share the [Jira task templates]({{ site.url }}/jira-task-templates/) with your team if you think they might be of value. You can read more [product management articles here]({{ site.url }}/product-management/) as well. 