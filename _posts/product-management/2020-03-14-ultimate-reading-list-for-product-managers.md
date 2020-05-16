---
title:			Ultimate reading list for product managers
description:	This ultimate reading list for product managers includes books, articles, blogs, and even podcasts and some videos.  
categories:		['product management']
tags:
  - career
image:			/assets/images/2020/03/ultimate-reading-list-for-product-managers.jpg
---


I've been reading product management and other business books, articles, blogs, and listening to industry podcasts for years, even before I was a product manager. Here is a list of some of my favorites that I've found or had shared with me. I hope that you will find this ultimate reading list for product managers to be of value to you. 

**Have something to add?** Please leave me a comment at the bottom of this page to suggest additions to this list. 

## Books 

This list contains general management and product management books. Yes, reading in-depth about product management is very valuable. Still, part of what makes a good product manager is broad knowledge, which is why I include general management and management books from other industries.

{% for item in site.data.ultimate-reading-list-for-product-managers.books %}
<h3 class="h5">{{ item.title }}</h3>
<p>{{ item.review }}</p>
<a href="{{ item.url }}" class="btn btn-primary" target="_blank">Get book</a>
<hr>
{% endfor %}

## UX Research

Product managers work hand-in-hand with UX Research and Design. Therefore, it makes sense to read up on that profession's best-practices as well. The more you know about how they garner insights, the better equipped you'll be to work together as a product team.

{% for item in site.data.ultimate-reading-list-for-product-managers.uxresearchbook %}
<h3 class="h5">{{ item.title }}</h3>
<p>{{ item.review }}</p>
<a href="{{ item.url }}" class="btn btn-primary" target="_blank">Get book</a>
<hr>
{% endfor %}

## Blogs

Here are some great blogs to pursue. Be sure to subscribe to some of their newsletters for the most up to date insights. 

{% for item in site.data.ultimate-reading-list-for-product-managers.blogs %}
<h3 class="h5">{{ item.title }}</h3>
<p>{{ item.review }}</p>
<a href="{{ item.url }}" class="btn btn-primary" target="_blank">Read blog</a>
<hr>
{% endfor %}

## Articles

Some articles have been of particular value to me in shaping my way of thinking like a product manager. For an up to date look at what I am reading most recently, check out my [Pocket App RSS feed](https://getpocket.com/users/judsonlmoore/feed/all). Note that this feed contains all my saved articles, which include travel-related things I am reading for trips I am planning ( I travel a lot). 

{% for item in site.data.ultimate-reading-list-for-product-managers.articles %}
<p><a href="{{ item.url }}" target="_blank">{{ item.title }}</a></p>
{% endfor %}

## Videos

TED Talks and other conference videos make for excellent evening viewing and at-home learning. Here are a few of my favorites. 

{% for item in site.data.ultimate-reading-list-for-product-managers.videos %}
<h3 class="h5">{{ item.title }}</h3>
<p>{{ item.review }}</p>
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="{{ item.url }}" allowfullscreen></iframe>
</div>
<hr>
{% endfor %}

## Podcasts

These podcasts offer great insights into how other product managers approach their product challenges and are great to listen to during your commute to work or time at the gym. 

{% for item in site.data.ultimate-reading-list-for-product-managers.podcasts %}
<h3 class="h5">{{ item.title }}</h3>
<p>{{ item.review }}</p>
<p><a href="{{ item.url }}" class="btn btn-primary" target="_blank">Subscribe to podcast</a></p>
<hr>
{% endfor %}

## Courses

More in-depth learning requires more effort, try a course (of course)!

{% for item in site.data.ultimate-reading-list-for-product-managers.courses %}
<h3 class="h5">{{ item.title }}</h3>
<p>{{ item.review }}</p>
<p><a href="{{ item.url }}" class="btn btn-primary" target="_blank">Learn more</a></p>
<hr>
{% endfor %}

## Twitter

A few of the prolific twitter accounts for some product management thought-leaders. 

{% for item in site.data.ultimate-reading-list-for-product-managers.twitter %}
<h3 class="h5">{{ item.title }}</h3>
<p>{{ item.review }}</p>
<p><a href="https://twitter.com/{{ item.twitter }}?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-show-count="false">Follow @{{ item.twitter }}</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>
<hr>
{% endfor %}

## Other

Here are some other random resources for product managers. 

{% for item in site.data.ultimate-reading-list-for-product-managers.other %}
<p><a href="{{ item.url }}" target="_blank">{{ item.title }}</a> - {{ item.review }}</p>
<hr>
{% endfor %}