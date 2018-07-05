---
title: Shpred
tags:
  - Rails
  - React
  - PostCSS
links:
  - label: shpred-api
    url: https://github.com/MythicalFish/shpred-api
  - label: shpred-front
    url: https://github.com/MythicalFish/shpred-front
  - label: shp.red
    url: https://shp.red
position: '6'
private_code: false
visible: true
---
A Youtube-like site I built for fun.

The frontend is built with React, Redux, PostCSS, and receives its data from a Rails API. The Rails app also provides an interface which allows the user to upload large videos, where they get transcoded into multiple qualities and formats using Amazon Elastic Transcoder, stored on S3, and finally delivered through Cloudfront to the end user.