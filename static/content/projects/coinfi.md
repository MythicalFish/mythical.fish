---
title: CoinFi
tags:
  - Rails
  - JS
  - Sass
  - React
  - Tachyons
links:
  - label: coinfi.com
    url: https://www.coinfi.com
  - label: coinfi
    url: https://github.com/coinfi/coinfi
position: '9'
private_code: false
visible: true
---
I worked on the CoinFi platform for several months, cleaning up and refactoring their Rails codebase, as well as implementing the functional CSS framework Tachyons, and React via Webpacker. 

Their React needs were quite unique, as some pages needed to be server-rendered, but they wanted to keep using Ruby/Rails as the app framework, so server-rending with Node wasn't an option. My solution was to replace special tags with React components as needed, and optionally connected with the Redux store.