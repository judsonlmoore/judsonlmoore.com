---
title:			How to migrate from Wordpress to Jekyll and AWS
description:	I decreased my page load time by 400% while learning about the static site generator, Jekyll
excerpt:		Why I rebuilt my website
author:			judsonlmoore
date:			2020-01-10 22:08:48 Z
categories:		blog
tags:			
  - web development
  - technical skills
  - jekyll
  - product management
layout:			post
image:			2020/01/wordpress-vs-jekyll.png


---

## tl;dr

By migrating my blog from Wordpress to Jekyll I decreased my page load time from 7.5 seconds to .380ms. Furthermore, I learned a lot of useful web development technical skills in the process. The steps outlined here are rather involved, but if you have interest in seeing this through to the end and are willing to read a number of how-to guides for the various steps, then migrating from Wordpress to Jekyll is something anyone can do. 

[Find the sourcecode on this Github repository](https://github.com/judsonlmoore/judsonlmoore.com)

## Why I wanted to migrate my blog from Wordpress to Jekyll

My daytime profession is as a software product manager. This means that I am sitting _web engineer adjacent_ but don't actually _need_ any technical skills myself to do my job. However, I find that working on personal web development projects is a fantastic way to gain a greater understanding, appreciation, and empathy for the work that my team does everyday.

I've been interested in web development and technical tinkering for as long as I can remember. Until a few years ago when I started working in the tech sector professionally, I was pretty much on my own in figuring out how websites were made. For many years, I managed various projects with Wordpress and obsessed over numerous optimizations via plugins and coding custom themes. 

Then a few years ago I decided I wanted to increase my knowledge around the tool that "real" software developers use. I started with Amazon's AWS Web Service. "The Cloud" is all everyone talks about for enterprise website hosting and I felt with AWS I could increase my website's performance while learning something new. 

First, I migrated my Wordpress instances from a shared hosting provider to AWS EC2 cloud-based servers. Then I learned how to offload my media and other assets to S3 buckets so that they could be distributed by Cloudfront. The user benefit of this was clear: fater pageload by parallelizing the download of assets across multiple sub-domains. 

In AWS, I learned about the following topics: 

- Network load balancing
- Lambda functions 
- Route 53 DNS 
- User management with IAM
- Migrated from SQL to MariaDB and hosted on RDS
- Amazon Virtual Private Cloud (Amazon VPC) 
- Network access control list (ACLs) 
- Security Groups

A big thank you to [MartyAWS and his YouTube channel](https://www.youtube.com/channel/UCeHkyJsi_1MLh5ScR98Mvzw) for consulting with me and helping me figure some of this out!

For offloading media from Wordpress to S3 buckets, I used the [WP Offload Media Plugin](https://deliciousbrains.com/wp-offload-media/) by Delicious Brains. The plugin worked really well and was easy to implement, but it was quite expensive to renew the license each year, so it felt less and less sustainable over time.

All of this was great fun and I learned a lot while tinkering with the AWS universe, but it really just gave me a taste of what AWS was capeable of.

_I thirsted for more._

This initial project of migrating my Wordpress hosting to AWS brought me in to close contact with a number of other services that intrigued me. More over, as I was reading about this new realm, I encountered many recommendations for other solutions which had not yet occured to me. 

One of the suggestions was that I shouldn't use Wordpress at all, but rather build my website using a static site generator. I failed to grasp at first what was being suggested and it sounded a bit _too_ technical, but as I learned more, the benefits bacame clear. 

By the way, there are many static site generators out there, but Jekyll seemed to be the best fit for my needs and skill level. Among other benefits, Jekyll works seemlessly with Github Pages as a free hosting provider, which I am not using on this website (as you'll see below) but do use for other projects.

Other popular static site generators you might like to look in to include [Hugo](https://gohugo.io/), [Gatsby](https://www.gatsbyjs.org/), and [Next](https://nextjs.org/). If you choose to use one of those, then most of the rest of this post will not be applicable to use, or at least not the code snippets.

After the idea to use a static site generator had some time to gestate for awhile, I couldn't resist the urge to see if I could figure out how to migrate from Wordpress to Jekyll. It took quite some doing and I had to ask for help a few times, but looking back, this was actually rather quite easy (if not very involved with lots of steps) and most of all, I found that migrating my blog from Wordpress to Jekyll was lots of fun! 

In the remainder of this post I will outline the steps I took to migrate from Wordpress to Jekyll. 

## My goals for migrating from Wordpress to Jekyll

As mentioned above, I had a primary goal of learning a new set of technical skills. Beyond that, I was further hoping to achive the following: 

**10 benefits to migrating from Wordpress to Jekyll**
1. Increase user value
2. Increase 
3. Increase 
4. Increase 
5. Increase security
6. Decrease website load time
7. Decrease 
8. Decrease 
9. Decrease complexity
10. Decrease hosting costs

Your own goals might be different than mine, but you will still achieve each of these benefits should you choose to migrate your website from Wordpress to Jekyll. 

**What goals do you have for migrating Wordpress to Jekyll? I'd love to hear them in the comments below.**

## Tools used for migrating from Wordpress to Jekyll

In order for me to get my wordpress-based website migrated to a static site generator, there were a number of resources I needed to learn about. I'll go though how I used each of these step by step, but first, here is a list of the tools required. Note that all of these can be used for free and some require you to create an account.

- [Wordpress's export tool](https://wordpress.org/support/article/tools-export-screen/)
- [Wordpress plugin to export content to Jekyll files](https://wordpress.org/plugins/jekyll-exporter/)
- [Jekyll](https://jekyllrb.com/) (with various plugins, listed furhter down)
- [Bootstrap](https://getbootstrap.com/)
- [GitHub](https://github.com/)
- [CircleCI](https://circleci.com/)
- [AWS S3](https://aws.amazon.com/s3/)
- [AWS Cloudfront](https://aws.amazon.com/cloudfront/)
- [Cloudinary](https://cloudinary.com/)

You will also need a good text editor with syntax highlighting for code. I use [Sublime Text Editor](https://www.sublimetext.com/) for Mac OS becuase it is free and has a lot of functionality without feeling very complex.

This is what `code looks like` inline and then.

## Wordpress site performance benchmark

Before I began the migration, I ran a few tests on the existing Wordpress instalation to estabish a benchmark so that I could measure if my efforts were helping me to achieve my goals. 

My tool of preference is the [Pingdom Website Speed Test](https://tools.pingdom.com/) and the screenshots in this post all come from this service's Washington D.C. server. Other services you may want to consider are [GTMetrix](https://gtmetrix.com/) and [Google's PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). 

{% cloudinary /assets/images/2020/01/judsonlmoore-blog-on-wp.png alt="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Wordpress" caption="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Wordpress" %}

As you can see, on Wordpress, my website was 2.0MB, making 90 requests, and loading in 7.67 seconds. The 2.0MB is not so terrible but to load in more than 2 seconds is like asking Google to rank you on the last page of search results. So all those great image optimizations and offloading of assets to S3 buckets wasn't really helping me much.

In particular, the page load speed of 7.67 seconds is what I was most eager to impact. Now, let's get on to the steps for getting that down to under half a second. 

## 4 steps to migrating Wordpress to Jekyll 

Here are the steps

1. [Step 1: Export content from Wordpress](#step-1)
2. [Step 2: Convert content to markdown and Jekyll file structure](#step-2)
3. [Step 3: Rewrite file paths and cleanup clutter](#step-3)
4. [Step 4: Deploy to hosting](#step-4)
5. [Step 5: Optimize](#step-5)

> Note: You will have questions about this process so I want to remind you that Google is your friend. If at any point you get stuck, search Google for the tool or step desribed below to find a wealth of information. That is how I learned everything here. I also invite you to write a comment below seeking help and I will do my best to point you in the right direction and to update this post for the benefit of other readers. 

### <a name="step-1"></a>Step 1: Export content from Wordpress

This is the easiest step. Use the [native Wordpress Export feature](https://en.support.wordpress.com/export/) to export your site's entire content to a .xml file. 

### <a name="step-2"></a>Step 2: Convert content to markdown and Jekyll file structure

Convert content 
.xml converted to markdown https://www.npmjs.com/package/wpxml2md
recompiled for jekyll

### <a name="step-3"></a>Step 3: Rewrite file paths and cleanup clutter

Remove image sizes
ReGex find replace for 
- image references
- file paths
- 

rewrote all urls for images to look for local images
removed all references to images with size variables
deleted all images except for originals (5GB worth!)
used Liquid tags for SEO on posts and for images
used a bunch of mass search/replace to get image captions into markdown across 200+ posts
a ton of optimization as indicated from google page insights 
manual cleanup of post meta data... for 190ish more posts...

### <a name="step-4"></a>Step 4: Deploy to hosting

There are a number of options for where to host your new Jekyll website. You can host the generated files on any 

### Option 1: Github Pages

The best hostimg option for simple static sites generated by Jekyll is [Github Pages](https://pages.github.com/). Github Pages is designed specifically with Jekyll in mind. 

Github pages is free, very fast, and very easy to setup. However, Github Pages does have some limitations. For example, only a very limited number of Jekyll plugins and themes are supported. Therefor, if you are using many plugins on your Jekyll site, then Github Pages will not be an option for you.

If you decide to try out Github pages, then I encourage you to check out [this step-by-step guide by Jonathan McGlone](http://jmcglone.com/guides/github-pages/) for a tutorial on how to get that up and running.

Since I am using a few unsupported plugins, I needed to find another option.

### Option 2: Amazon Web Services 

As part of my motiviation for migrating from Wordpress to Jekyll was to expand my knowledge and use of enterprise engineering tools and best practices, I opted to make things a little bit more complex for myself. 

Therefor, I am using Github only for version controll via my website project's repository, then hosting the compiled files on an AWS S3 buckets and then distributing the website using an AWS Cloudfront CDN.

In order to get all of those resources to work together, a code compiler is required. I am using a continuous integration and delivery platform called [CircleCI](https://circleci.com/) to get the job done. 

This makes my development pipeline look like this: 

My machine > Github > CircleCI > S3 > Cloudfront

{% cloudinary /assets/images/2020/01/judsonlmoore-blog-with-jekyll.png alt="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Jekyll" caption="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Jekyll" %}

### <a name="step-5"></a>Step 5: Optimize


#### Bootstrap Sass


#### Minimize 

#### Cloudinary
[Jekyll Cloudinary Liquid tag plugin](https://github.com/nhoizey/jekyll-cloudinary)

{% cloudinary /assets/images/2020/01/judsonlmoore-blog-with-jekyll-optimized.png alt="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Jekyll after optimizations" caption="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Jekyll after optimizations" %}

## Conclusion

One note: Did not migrate e-commerce pages 

As you can see, there is quite a lot to migrating an established website from one form to another. The switch from Wordpress to Jekyll was a lot of work but the payoff in terms of performance is huge. As for my goals to learn some new skills, the effort was well worth the time required. Now that the migration project is over, my next challenge is to return to writing valuable content for my readers. This is the first post on the new setup, and writing this in markdown has indeed proven to reduce the friction of writing in the Wordpress editor. So far: no regrets! 

Are you thinking about migrating from Wordpress to Jekyll? Have you done it before? I welcome you to ask questions, providde feedback, or share your experiences in the comments below. 


