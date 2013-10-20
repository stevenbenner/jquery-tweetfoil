# TweetFoil

TweetFoil is a jQuery twitter timeline plugin that works in the post-version-1.1 Twitter API world. It lets you embed your twitter timeline on directly your web page without needing to install any server-side code and without using iframes, giving you the chance to customize the look of your Twitter feed with CSS.

[![Build Status](https://travis-ci.org/stevenbenner/jquery-tweetfoil.png?branch=master)](https://travis-ci.org/stevenbenner/jquery-tweetfoil) [![Dependency Status](https://gemnasium.com/stevenbenner/jquery-tweetfoil.png)](https://gemnasium.com/stevenbenner/jquery-tweetfoil)

## Important Information

* **This is a parser.** This plugin is essentially an alternative client for the [official Twitter Timeline Widget](https://dev.twitter.com/docs/embedded-timelines). It still requires you to setup your Twitter feed on your Twitter account and obtain a Twitter WidgetID.
* **This does not use the Twitter API.** It uses the same data source as the official Twitter Widget and completely ignores the Twitter API.
* **This plugin is fragile.** Since it works by parsing the HTML output Twitter uses for its widget this plugin is likely to break if and when Twitter makes significant changes to the markup they use, their data structure, or their service endpoints. Do not use it for mission-critical applications.
* **This is a work in progress.** While this plugin is currently functional, it is missing most of the features of the most popular pre-1.1 Twitter feed plugins. Feel free to submit pull requests and feature requests for the features you need.

## Getting Started

* [Setup a new widget](https://twitter.com/settings/widgets) on your Twitter account and grab the `data-widget-id` number in code they give you.
* Add the TweetFoil JavaScript (and CSS if you're feeling lazy) to your website.
* Run the plugin on the HTML element that you want to hold your Twitter feed.

## License

*(This project is released under the [MIT license](https://raw.github.com/stevenbenner/jquery-tweetfoil/master/LICENSE.txt).)*

Copyright (c) 2013 Steven Benner (http://stevenbenner.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
