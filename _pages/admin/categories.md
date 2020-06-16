---
title: 			Categories
description: 	All posts grouped by category on judsonlmoore.com 
permalink: 		"/categories/"
layout: 		page
---


<!-- 
<ul class="tag-box inline">
    {% assign tags_list = site.categories %} {% if tags_list.first[0] == null %} {% for tag in tags_list %}
    <li>
        <a href="#{{ tag }}">{{ tag | capitalize }} <span>{{ site.tags[tag].size }}</span></a>
    </li>
    {% endfor %} {% else %} {% for tag in tags_list %}
    <li>
        <a href="#{{ tag[0] }}">{{ tag[0] | capitalize }} <span>{{ tag[1].size }}</span></a>
    </li>
    {% endfor %} {% endif %} {% assign tags_list = nil %}
</ul>

{% for tag in site.categories %}
<h2 id="{{ tag[0] }}">{{ tag[0] | capitalize }}</h2>
<ul class="post-list">
    {% assign pages_list = tag[1] %} {% for post in pages_list %} {% if post.title != null %} {% if group == null or group == post.group %}
    <li>
        <a href="{{ site.url }}{{ post.url }}">
            {{ post.title }}<span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></span>
        </a>
    </li>
    {% endif %} {% endif %} {% endfor %} {% assign pages_list = nil %} {% assign group = nil %}
</ul>
{% endfor %}
 -->

<div class="row row-cols-1 row-cols-md-3">
	{% for category in site.categories %}
	<div class="section-title col-md-12 mt-4">
		<h2 id="{{ category[0] | replace: " ","-" }}" class="text-capitalize">Category {{ category[0] }}</h2>
	</div>
	{% assign pages_list = category[1] %}
	{% for post in pages_list %}
	{% if post.title != null %}
	{% if group == null or group == post.group %}
	{% include postbox.html %}
	{% endif %}
	{% endif %}
	{% endfor %}
	{% assign pages_list = nil %}
	{% assign group = nil %}
	{% endfor %}
</div>