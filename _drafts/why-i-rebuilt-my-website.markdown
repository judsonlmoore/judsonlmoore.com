---
title:			How to migrate from Wordpress to Jekyll and AWS
description:	I decreased my page load time by 400% while 
excerpt:		Why I rebuilt my website
author:			judsonlmoore
date:			2020-01-10 21:08:48 Z
categories:		blog
tags:			
  - adventure
  - germany
  - hiking
  - holiday
  - kyrgyzstan
layout:			post
image:			2018/01/best-of-2017-april-neandertal-hiking.jpg


---

## Why I wanted to migrate my blog from Wordpress to Jekyll

I've been interested in web development and technical tinkering for as long as I can remember. Until a few years ago, I was really on my own in figuring out how websites were made. For many years, I managed various projects on Wordpress and obsessed over numerous Wordpress optimizations via plugins and coding custom themes. 

Then a few years ago I decided I wanted to increase my knowledge around some of the tool that software developers use. I started with AWS. 

First, I migrated my wordpress instances to AWS E2 cloud servers. Then I learned how to offload my media and other assets to S3 buckets so that they could be distributed by Cloudfront. 

This increase performance and decreased my costs while also giving me an opportunity to learn about server security and 


## My goals for migrating from Wordpress to Jekyll

As mentioned above, I had a primary goal of learning a new set of technical skills. Beyond that, I was further hoping to achive the following: 
- Increase website performance
- Increase 
- Decrease website download time
- Decrease complexity
- Decrease costs 

## Tools used

- Jekyll (with various plugins, listed furhter down)
- GitHub
- CircleCI
- AWS S3
- AWS Cloudfront



There are many 



https://www.sublimetext.com/

## Wordpress site performance benchmark

Before I began I ran a few tests on the existing Wordpress instalation to estabish a benchmark so that I could measure if my efforts were helping me to achieve my goals. 

My tool of preference is the [Pingdom Website Speed Test](https://tools.pingdom.com/) and the screenshots in this post all come from this service's Washington D.C. servers. Other services you may want to consider are [GTMetrix](https://gtmetrix.com/) and [Google's PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). 



{% cloudinary /assets/images/2020/01/judsonlmoore-blog-on-wp.png alt="" description="" %}





{% cloudinary /assets/images/2020/01/judsonlmoore-blog-with-jekyll.png alt="" description="" %}




{% cloudinary /assets/images/2020/01/judsonlmoore-blog-with-jekyll.png alt="" description="" %}



