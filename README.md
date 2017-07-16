# e-Feedly
e-Feedly is a modern RSS feed that gives a user access to view all headlines from 70 news sources and link to the original articles/news on those sources. https://e-feedly.herokuapp.com

[![Code Climate](https://codeclimate.com/github/Vynessa/newsfeed-app/badges/gpa.svg)](https://codeclimate.com/github/Vynessa/newsfeed-app)
[![Travis Build](https://travis-ci.org/Vynessa/newsfeed-app.svg?branch=develop)](https://travis-ci.org/Vynessa/newsfeed-app)
[![Coverage Status](https://coveralls.io/repos/github/Vynessa/inverted-index-api/badge.svg?branch=back-end)](https://coveralls.io/github/Vynessa/newsfeed-app?branch=develop)

## Introduction
e-Feedly is a News Feed Application that makes use of an API to display various News Sources with their corresponding Headlines based on the various options: top and latest.


## Features
Users can:
- Search for News Source within the application
- View Headlines based on News Source
- Sort Headlines based on Top and Latest Headlines.


### Getting started with the project
  * Requirements
    - To run the app locally, have `node.js` installed
  * How to setup the project/Installation/Configuration
    - Clone the repo `git clone https://github.com/vynessa/newsfeed-app.git`
    - Navigate to the `newsfeed-app` directory
    - Run `npm install` to install all dependencies
    - Run `npm start` to run the application
  * How to run tests
    - Run `npm test` 

### How to use the app
* Navigate to the hosted url [e-feedly](https://e-feedly.herokuapp.com) or `http://localhost:8080/`
* Click on `Sign in with Google` to upload assess the application
* Upon successful login:
  - Use the `Search Field` to search for News Source
  - Click on `View Headlines` to view the news headlines of News Source.
  - Use the `Sort By: ` to views news based on the sort by available.

### Dependencies
* **[Node JS](https://nodejs.org/en/)** - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
* **[React](https://facebook.github.io/react/)** - React is a JavaScript library for building user interfaces.
* **[Express](https://expressjs.com/)** - Express is a minimal and flexible Node.js web application framework, It is used as the web server.
* **[Axios](https://github.com/mzabriskie/axios)** -A Promise based HTTP client for the browser and node.js. Used in making the Api Call.

### Limitations of the project
* The Application uses only Google Login for Authentication
* The Application doesn't have a ```bookmark``` feature.
* The Application does not have scraped articles displayed on the site.

### Naming conventions
* Visit the [Wiki](https://github.com/vynessa/newsfeed-app/wiki) to find branch, commit messages and pull request naming conventions.

### Contributing to the project
* Fork this repository to your github account
* Clone the repository -  `git clone https://github.com/vynessa/newsfeed.git`
* Create your feature branch - `git checkout -b your-branch-name`
* Commit your changes - `git commit -m “[Enter message]“` or `git commit` for the interactive interface
* Push to the remote branch - `git push origin your-branch-name`
* Open a pull request (See [wiki](https://github.com/vynessa/newsfeed-app/wiki) for the pull request naming convention)

Click this link to visit the hosted app [e-feedly](https://e-feedly.herokuapp.com)

I look forward to your pull requests :)

### License
MIT License

Copyright (c) 2017 Vanessa Ejikeme

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author
* **Vanessa Ejikeme**