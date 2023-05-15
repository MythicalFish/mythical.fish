---
type: project
title: Shpred
tags:
  - Rails
  - React
  - PostCSS
links:
  - label: shpred-api
    url: 'https://github.com/MythicalFish/shpred-api'
  - label: shpred-front
    url: 'https://github.com/MythicalFish/shpred-front'
  - label: shp.red
    url: 'https://shp.red'
previews:
  - description: >-
      <p>The homepage is a grid of video thumbnails, which show a preview when
      hovered on.</p>


      The thumbnails are automatically generated based on the video, but can
      optionally replaced with a custom image. The preview clips are currently
      manually created using Premiere.
    image: /content/images/shpred-1.jpg
    label: Homepage
  - image: /content/images/shpred-2.jpg
    label: Video page
position: 6
privateCode: false
visible: true
date: ~ 2017
---
A Youtube-like site I built for fun.

The frontend is built with React, Redux, PostCSS, and receives its data from a Rails API. The Rails app also provides an interface which allows the user to upload large videos, where they get transcoded into multiple qualities and formats using Amazon Elastic Transcoder, stored on S3, and finally delivered through Cloudfront to the end user.
