---
title: 			Categories
description: 	All posts grouped by category on judsonlmoore.com 
permalink: 		"/categories/"
layout: 		page
---


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