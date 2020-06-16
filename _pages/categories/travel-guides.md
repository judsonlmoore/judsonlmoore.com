---
layout: page
title: travel guides
permalink: "/travel-guides/"
---


<style type="text/css">
	.card-img-top {
	    width: 100%;
	    height: 15vw;
	    object-fit: cover;
	}
</style>

<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
{% for guide in site.travel-guides %}
	<div class="col mb-3">
		<div class="card h-100">
	    	{% cloudinary card-img-top {{ site.url }}{{ guide.image }} alt="{{ guide.subtitle }}" %}
		    <div class="card-body">
		        <h5 class="card-title">{{ guide.title }}</h5>
		        <p class="card-text mb-0">{{ guide.subtitle | strip_html | truncatewords:20 }}</p>
		  		<a href="{{ site.url }}{{ guide.permalink }}" class="stretched-link"></a>
		    </div>
		</div>
	</div>
{% endfor %}
</div>