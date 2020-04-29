---
title:			How to migrate from Wordpress to Jekyll with CircleCI and AWS
description:	I decreased my page load time by 400% while learning about the static site generator, Jekyll
author:			judsonlmoore
date:			2020-01-10 22:08:48 Z
categories:		['product management']
tags:			
  - web development
  - technical skills
  - jekyll
  - product management
layout:			post
image:			/assets/images/2020/01/wordpress-vs-jekyll.png


---


By migrating my blog from Wordpress to Jekyll I decreased my page load time from 7.5 seconds to .380ms. Furthermore, I learned a lot of useful web development technical skills in the process. The steps outlined here are rather involved, but if you have an interest in seeing this through to the end and are willing to read several how-to guides for the various steps, then migrating from Wordpress to Jekyll is something anyone can do. 

[Find the source code on this GitHub repository](https://github.com/judsonlmoore/judsonlmoore.com)

## Why I wanted to migrate my blog from Wordpress to Jekyll

My daytime profession is as a software product manager. This means that I am sitting _web engineer adjacent_ but don't actually _need_ any technical skills myself to do my job. However, I find that working on personal web development projects is a fantastic way to gain a greater understanding, appreciation, and empathy for the work that my team does every day.

I've been interested in web development and technical tinkering for as long as I can remember. Until a few years ago when I started working in the tech sector professionally, I was pretty much on my own in figuring out how websites were made. For many years, I managed various projects with Wordpress and obsessed over numerous optimizations via plugins and coding custom themes. 

Then a few years ago I decided I wanted to increase my knowledge around the tool that "real" software engineers use. I started with Amazon's AWS Web Service. "The Cloud" is all anyone talks about for enterprise website hosting and I felt with AWS I could increase my website's performance while learning something new. 

First, I migrated my Wordpress instances from a shared hosting provider to [AWS EC2 cloud-based servers](https://aws.amazon.com/ec2/). Then I learned how to offload my media and other assets to [S3 buckets](https://aws.amazon.com/s3/) so that they could be distributed by [Cloudfront](https://aws.amazon.com/cloudfront/). The user benefit of this was clear: faster page load by parallelizing the download of assets across multiple sub-domains. 

While tinkering with AWS, I learned about the following topics: 

- Network load balancing
- Lambda functions 
- Route 53 DNS 
- User management with IAM
- Migrated from SQL to MariaDB and hosted on RDS
- Amazon Virtual Private Cloud (Amazon VPC) 
- Network access control list (ACLs) 
- Security Groups

A big thank you to [MartyAWS and his YouTube channel](https://www.youtube.com/channel/UCeHkyJsi_1MLh5ScR98Mvzw) for consulting with me and helping me figure a lot of this out! Be sure to check out his channel and subscribe for updates if you're interested in learning about AWS-related topics. 

For offloading media from Wordpress to S3 buckets, I used the [WP Offload Media Plugin](https://deliciousbrains.com/wp-offload-media/) by Delicious Brains. The plugin worked well and was easy to implement, but it was quite expensive to renew the license each year, so it felt less and less sustainable over time.

All of this was great fun and I learned a lot while tinkering with the AWS universe, but it just gave me a taste of what AWS was capable of.

_I thirsted for more._

This initial project of migrating my Wordpress hosting to AWS brought me in to close contact with many other services that intrigued me. Moreover, as I was reading about this new realm, I encountered many recommendations for other solutions to speed up my website which had not yet occurred to me. 

One of the suggestions was that I shouldn't use Wordpress at all, but rather build my website using a static site generator. I failed to grasp at first what was being suggested and it sounded a bit _too_ technical, but as I learned more, the benefits became clear.

By the way, there are many static site generators out there, but [Jekyll](https://jekyllrb.com/) seemed to be the best fit for my needs and skill level. Among other benefits, Jekyll works seamlessly with [Github Pages](https://pages.github.com/) as a free hosting provider, which I am not using on this website (as you'll see below) but do use for other projects.

Other popular static site generators you might like to look in to include [Hugo](https://gohugo.io/), [Gatsby](https://www.gatsbyjs.org/), and [Next](https://nextjs.org/). If you choose to use one of those, then most of the rest of this post might not apply to you, or at least not the code snippets.

After the idea to use a static site generator had some time to gestate, I couldn't resist the urge to see if I could figure out how to migrate my blog from Wordpress to Jekyll. It took quite some doing and I had to ask for help a few times, but looking back, this was rather quite easy (if not very involved with lots of steps) and most of all, I found that migrating my blog from Wordpress to Jekyll was lots of fun! 

In the remainder of this post, I will outline the steps I took to migrate from Wordpress to Jekyll. 

## Benefits from migrating from Wordpress to Jekyll

As mentioned above, I had a primary goal of learning a new set of technical skills. Beyond that, I was further hoping to achieve the following benefits: 

**8 benefits to migrating from Wordpress to Jekyll**
1. Increase security
2. Increase ease of writing content
3. Increase Google search ranking
4. Increase SEMrush site health check status
5. Decrease website load time
6. Decrease dependencies
7. Decrease technical complexity
8. Decrease hosting costs

Your own goals might be different than mine, but you will still achieve each of these benefits should you choose to migrate your website from Wordpress to Jekyll. 

**What goals do you have for migrating Wordpress to Jekyll? I'd love to hear them in the comments below.**

## Tools used for migrating from Wordpress to Jekyll

For me to get my Wordpress-based website migrated to a static site generator, there were several resources I needed to learn about. I'll go through how I used each of these, but first, here is a list of the tools required. Note that all of these can be used for free and a few require you to create an account.

- [Wordpress's export tool](https://wordpress.org/support/article/tools-export-screen/)
- [Jekyll](https://jekyllrb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [GitHub](https://github.com/)
- [CircleCI](https://circleci.com/)
- [AWS S3](https://aws.amazon.com/s3/)
- [AWS Cloudfront](https://aws.amazon.com/cloudfront/)
- [Cloudinary](https://cloudinary.com/)

You will also need a good text editor with syntax highlighting for code. I use [Sublime Text Editor](https://www.sublimetext.com/) for Mac OS because it is free and has a lot of functionality without feeling very complex.

## Wordpress site performance benchmark

Before I began the migration, I ran a few tests on the existing Wordpress installation to establish a benchmark so that I could measure if my efforts were helping me to achieve my goals. 

My tool of preference is the [Pingdom Website Speed Test](https://tools.pingdom.com/) and the screenshots in this post all come from this service's Washington D.C. server. Other services you may want to consider are [GTMetrix](https://gtmetrix.com/) and [Google's PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). 

{% cloudinary /assets/images/2020/01/judsonlmoore-blog-on-wp.png alt="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Wordpress" caption="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Wordpress" %}

As you can see, on Wordpress, my website was 2.0MB, making 90 requests, and loading in 7.67 seconds. The 2.0MB is not so terrible but to load in more than 2 seconds is like asking Google to rank you on the last page of search results. So all those great image optimizations and offloading of assets to S3 buckets weren't helping me much.

In particular, the page load speed of 7.67 seconds is what I was most eager to impact. Now, let's get on to the steps for getting that down to under half a second. 

## 5 steps to migrate from Wordpress to Jekyll 

Here are the steps I took to migrate from Wordpress to Jekyll:

1. [Step 1: Export content from Wordpress](#step-1)
2. [Step 2: Convert content to markdown and Jekyll file structure](#step-2)
3. [Step 3: Rewrite file paths and clean up clutter](#step-3)
4. [Step 4: Deploy to hosting](#step-4)
5. [Step 5: Optimize](#step-5)

You will almost certainly have questions about this process so I want to remind you that Google is your friend. If at any point you get stuck, search Google for the tool or step described below to find a wealth of information. That is how I learned everything here. **I also invite you to write a comment at the end of this post** seeking help and I will do my best to point you in the right direction and to update this post for the benefit of other readers. 

### <a name="step-1"></a>Step 1: Export content from Wordpress

This is a two-part task. First, we will export your site data. Second, we will grab all of your media.

#### Option 1: Export using a Wordpress plugin

The easy but less-reliable way is to use the [Jekyll Exporter Plugin for Wordpress](https://wordpress.org/plugins/jekyll-exporter/). I say this is less reliable because, as of this writing, that plugin has not been updated for over a year. Still, it is worth a try. Just check the export results. 

The benefit is that your site data should be exported already in the Jekyll file structure and Markdown. That will save you some additional steps later.

If you encounter errors, then you will need to run the export and file conversion manually.

#### Option 2: Export manually

To export your site data manually, use the [native Wordpress Export feature](https://en.support.wordpress.com/export/) to export your site's entire content to a .xml file. 

1. Open your Wordpress admin dashboard
2. Click **Tools > Export** from the left sidebar
3. Choose **All content**
4. Click **Download export file**

You will now download a .xml file (more than one on larger sites) with all of your site data. This file will contain your posts, pages, custom post types, comments, custom fields, categories, tags, custom taxonomies, and users.

#### Exporting media

You will note that your media files are not included in this export. The reason is that Wordpress intends this export to be used for migrating your site to another Wordpress installation. The Wordpress import tool would then migrate media files on the backend to your new Wordpress site, but that doesn't help you in migrating from Wordpress to Jekyll. 

Now we just have to go grab your media files. 

For smaller sites, you might be able to use a plugin like the [Export media Library Plugin](https://wordpress.org/plugins/export-media-library/), but for me, I just downloaded everything via FTP. 

1. FTP in to your server
2. Navigate to the /wp-content/uploads/
3. Download all of the /uploads/`####`/ folders

That's it! Now you have all of your Wordpress data saved locally. Now comes the real fun.

### <a name="step-2"></a>Step 2: Convert content to markdown and Jekyll file structure

If **option 1** from the last step worked for you, then this step can probably be skipped. Otherwise, you must still convert your Wordpress export file into the Jekyll folder structure and file formats. 

To do this, use the [exitwp](https://github.com/thomasf/exitwp) tool. Follow the instructions on that page. You will need:

* [A GitHub account](https://github.com/join)
* [The GitHub desktop client](https://desktop.github.com/)
* Commandline access on your computer (use Terminal on Mac)

After you follow the steps of wpexit, you will have the Jekyll folder structure and file formats you need. The only thing you need to do now is to move those folders and files into your Jekyll site's root folder on your computer.

If you've not yet actually set up Jekyll on your local computer, then you will need to do that now. Follow the instructions on [jekyllrb.com](https://jekyllrb.com/).

### <a name="step-3"></a>Step 3: Rewrite file paths and cleanup clutter

Now comes the rather involved part. The Wordpress export probably brought over a lot of things you don't need in the form of code and extra media files.

#### Cleaning the code

Depending on the theme you were using, there might be code you need to get rid of now. 

In my case, I was using the DIVI theme. Most of my posts were ok, but the pages were full of code looking like `[et_pb_section bb_built="1"]`. I found that I just needed to go through page by page and delete this stuff. 

I had dozens of pages and was fearful this would be very tedious, but I quickly discovered patterns in the code and was able to move fairly quickly. You can also do some search/replace on all your pages and post files to bulk-remove a lot of things. 

In the end, you will want to review every file for proper formatting and just clean up some things like margins, links, and file paths to your media files.

As you do this, you will also discover URLs to local files and pages. It is good to add the `{{ site.url }}` Liquid object to the front of the path so that all these URL references will be full URLs instead of relative URLs. Google prefers crawling it like this, and you need the Liquid object so that when you are in the development environment, the URLs point to the localhost instead of your live domain. 

#### Cleaning the media files

If you were using one of the common Wordpress plugins for auto-cropping and sizing your images, then when you exported all of your media folders, you will see many image files replicated for these sizes. They should be named something like: 

* image.jpg <-- the original image
* image-50x50.jpg
* image-250x250.jpg
* image-500x500.jpg

You now only need the original image file, which means you can delete all of the images with the size suffix in the file name. When I did this, I saved 5GB of space.

Now be sure to run some search/replace on all of your Jekyll files to remove any reference to the non-original image file. Regex works well for this. Try something like:

Find: `-.*.x.*\.jpg`  
Replace: `.jpg`

Test that on one file first where you can make sure the find query is correct, and then you can run it across all posts and pages. 

### <a name="step-4"></a>Step 4: Deploy to hosting

There are many options for where to host your new Jekyll website. You can host the generated files on any server or file hosting service you prefer, but two options seem to be the preferred hosting solutions for Jekyll static pages. 

#### Option 1: Github Pages

The best hosting option for simple static sites generated by Jekyll is [Github Pages](https://pages.github.com/). Github Pages is designed specifically with Jekyll in mind. 

Github Pages is free, very fast, and very easy to setup. However, Github Pages does have some limitations. For example, only a very limited number of Jekyll plugins and themes are supported. Therefore, if you are using many plugins on your Jekyll site, then Github Pages will not be an option for you.

If you decide to try out Github pages, then I encourage you to check out [this step-by-step guide by Jonathan McGlone](http://jmcglone.com/guides/github-pages/) for a tutorial on how to get that up and running.

Since I am using a few unsupported plugins, I needed to find another option.

#### Option 2: Amazon Web Services 

As part of my motivation for migrating from Wordpress to Jekyll was to expand my knowledge and use of enterprise engineering tools and best practices, I opted to make things a little bit more complex for myself. 

Therefore, I am using Github only for version control via my website project's repository, then hosting the compiled files on an AWS S3 bucket and then distributing the website using an AWS Cloudfront CDN.

To get all of those resources to work together, a code compiler is required. I am using a continuous integration and delivery platform called [CircleCI](https://circleci.com/) to get the job done. 

This makes my development pipeline look like this: 

**My machine** > **Github** > **CircleCI** > **S3** > **Cloudfront** > **You**

Jekyll's official documentation has [a great tutorial](https://jekyllrb.com/docs/continuous-integration/circleci/) for how to set this up.

Here is a performance test screenshot once I got all page content and media assets hosted on AWS before I started conducting any optimizations. The page size has increased by 600%, while the load time has decreased to 1/5 the speed of Wordpress. This is awesome! Just imagine what will happen after we get into some optimizations... 

{% cloudinary /assets/images/2020/01/judsonlmoore-blog-with-jekyll.png alt="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Jekyll" caption="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Jekyll" %}

### <a name="step-5"></a>Step 5: Optimize

Now that the structure is all set up and the site is being hosted, we can dig into the exciting part: optimization. This is where we will start to see the major improvements in site performance. 

#### Bootstrap Sass

At the top of this post, I mentioned that one of the tools I use is [Bootstrap](https://getbootstrap.com/). This is about the theming, so if you choose to use a non-bootstrap theme, then this part isn't relevant to you. I had first thought about using one of the well-supported Jekyll themes like [Minima](https://github.com/jekyll/minima) but in the end, I opted to code from scratch and I chose Bootstrap as my front-end component library.

To that end, I recommend reading [5 Steps To Add Bootstrap 4 To Jekyll The Right Way](5 Steps To Add Bootstrap 4 To Jekyll The Right Way). This tutorial is the best one I found for using Bootstrap with Jekyll properly. Note that this tutorial assumes you've not yet set up a Jekyll site, so if you follow their instructions then you can also just migrate your /posts, /pages, and /assets folders over to here and then rewrite your GitHub repository with this new setup. 

#### Minimize 

I am using [this layout by Anatol Broder](http://jch.penibelst.de/) to compress all of my HTML files. It is very easy to setup and avoids the use of plugins, which is preferable.

Your site will be using a few .js libraries. If they are not minified, then the easiest thing to do is to look at the documentation for those libraries for the URL or file to reference which is minified by default. Typically this is the same file path as the non-minified version but with `.min.js` at the end of the file. So for example, if your code references `jquery.js` then the minified version of the file is probably `jquery.min.js`.

For CSS output, it took me ages to figure out how simple it is to minimize the output of your SCSS file when it compiles to CSS. To minimize the CSS output by Bootstrap, simply add this to your `config.yml` file:

`sass:`  
  `style: compressed`

Also, note that in the `assets/main.scss` file there are several optional Bootstrap references. If any of these parts of Bootstrap are not relevant to you, then simply remove that line and that code will be excluded from your final CSS file. 

#### Cloudinary

The optimization I am most excited about is the image optimizations. I want to have perfectly-optimized, smartly cropped, and `srcset`-responsive image files so that no matter what device users are on, they get the right image size. 

To accomplish this, I used the [Jekyll Cloudinary Liquid tag plugin](https://github.com/nhoizey/jekyll-cloudinary). The plugin is simple to use and once you follow their setup instructions then all you need to do to render an optimized image delivered from the Cloudinary service in your content is to use a Liquid object. 

This will be another good time to use the Regex search/replace skills you developed previously to go through and convert all of your existing image code in HTML or Markdown to this Liquid object. 

Don't forget to look outside of your post content for images. Images appear in all sorts of places, like your sidebar, postbox.html, logo, and other includes. The only image I didn't figure out how to get served from Cloudinary is my favicon, but I also think that is rather unnecessary since it is a really small image that you can optimize yourself and which does not need to be served in responsive sizes.

So let's check-in again at how we are progressing in our optimizations. Now that Cloudinary is running, the page size is similar to what I had on Wordpress but reduced by 1/6 of what I had on Jekyll before I added Cloudinary. As for the page load speed, I am lightning fast coming in at .426 ms! **This is 18x faster than on Wordpress!**

{% cloudinary /assets/images/2020/01/judsonlmoore-blog-with-jekyll-optimized.png alt="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Jekyll after optimizations" caption="Pingdom Website Speed Test of JudsonLMoore.com while hosted on AWS with Jekyll after optimizations" %}

## HTTP Security Headers

Pingdom and other site auditing tools are giving me negative scores for not having HTTP Security Headers, but until now, I've still not figured out how best to address this for a static site. It's easier on a server, but for static pages, you need another service to add these headers. 

AWS offers some documentation for [Adding HTTP Security Headers Using Lambda@Edge and Amazon CloudFront](https://aws.amazon.com/blogs/networking-and-content-delivery/adding-http-security-headers-using-lambdaedge-and-amazon-cloudfront/), but as much as I tinkered with that, I didn't find a favorable outcome.

**If you know how to add HTTP Security Headers to static files, please write a comment at the end of this post. Thanks!**

## Other considerations

Wordpress comes with an amazing universe of plugins to support various site functionality. To get similar functionality to my new Jekyll site, I needed to find some suitable replacements. Here is a list of a few other services I incorporated to get the final functionality I was looking for: 

* [Formspree](https://formspree.io/) - Contact form
* [Mailchimp](https://mailchimp.com/) - Mailing list signup form
* [Pixlee](https://www.pixlee.com/) - Instagram feed
* [Lightbox](https://lokeshdhakar.com/projects/lightbox2/) - Image modals
* [Jekyll Codex](https://jekyllcodex.org/without-plugins/) - A library of ways to avoid plugins while still delivering more complex functionality

## Conclusion

As you can see, there is quite a lot to migrate an established website from one form to another. The switch from Wordpress to Jekyll was a lot of work but the payoff in terms of performance is huge. As for my goals to learn some new skills, the effort was well worth the time required. Now that the migration project is over, my next challenge is to return to writing valuable content for my readers. This is the first post on the new setup, and writing this in markdown has indeed proven to reduce the friction of writing in the Wordpress editor. So far: no regrets! 

<!-- 
Here is a comparison table of all the performance metrics scattered throughout this post: 

|---------------------+-----------------------+---------------+--------------+---------------|
|                     | **Performance Grade** | **Page Size** | **Requests** | **Load Time** |
|---------------------|:---------------------:|:-------------:|:------------:|:-------------:|
| **On Wordpress**    | 74                    | 2.0 MB        | 90           | 7.67 s        |
| **On Jekyll**       | 78                    | 5.0 MB        | 44           | 1.16 s        |
| **+Cloudinary**     | 86                    | 1.9 MB        | 23           | 425 ms        |
| **New Theme**       | 81                    | 3.6 MB        | 112          | 599 ms        |
|---------------------+-----------------------+---------------+--------------+---------------|
 -->

Are you thinking about migrating from Wordpress to Jekyll? Have you done it before? I welcome you to ask questions, provide feedback, or share your experiences in the comments below. 