# e-Feeds
Newsfeed App is a modern RSS feed that enables one view all headlines from 70 news sources and links to the original articles/news on these sources.

[![Code Climate](https://codeclimate.com/github/Vynessa/newsfeed-app/badges/gpa.svg)](https://codeclimate.com/github/Vynessa/newsfeed-app)
[![Travis Build](https://travis-ci.org/Vynessa/newsfeed-app.svg?branch=develop)](https://travis-ci.org/Vynessa/newsfeed-app)
[![Coverage Status](https://coveralls.io/repos/github/Vynessa/inverted-index-api/badge.svg?branch=back-end)](https://coveralls.io/github/Vynessa/newsfeed-app?branch=develop)

# e-Feeds
## Introduction
E-News is a News Feed Application that makes use of an API to display various News Sources with their corresponding Headlines based on the various options(top, latest e.t.c). The link to the hosted app [E-News](https://e-feedly.herokuapp.com)

## Features
- Search for News Source
- View Headlines based on News Source
- Sort Headlines based on Top and Latest Headlines.


### Getting started with the project
  - Requirements
    * To run the app locally, have `node.js` installed
  - How to setup the project/Installation/Configuration
    * Clone the repo `git clone https://github.com/vynessa/newsfeed-app.git`
    * Navigate to the `newsfeed-app` directory
    * Run `npm install` to install all dependencies
    * Run `npm start` to run the application
  - How to run tests
    * Run `npm test` 

### How to use the app
* Navigate to the hosted url [E-News](https://e-feedly.herokuapp.com) or `http://localhost:8080/`
* Click on `Sign in with Google` to upload assess the application
* Upon successful login:
  ** Use the `Search Field` to search for News Source
  ** Click on `View Headlines` to view the news headlines of News Source.
  ** Use the `Sort By: ` to views news based on the sort by available.

### Dependencies
*  **[Node JS](https://nodejs.org/en/)** - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
* **[React](https://facebook.github.io/react/)** - React is a JavaScript library for building user interfaces.
* **[Webpack](https://webpack.github.io/)** - webpack is a module bundler for modern JavaScript applications.
* **[Babel](https://babeljs.io/)** - Babel is a JavaScript compiler, it is used for transpiling ES6 down to ES5.
* **[Express](https://expressjs.com/)** - Express is a minimal and flexible Node.js web application framework, It is used as the web server.
* **[Jest](https://facebook.github.io/jest/)** - Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project.
* **[Axios](https://github.com/mzabriskie/axios)** -A Promise based HTTP client for the browser and node.js. Used in making the Api Call.

### Limitations of the project
* The Application uses only Google Login as a form of Authentication
* The Application does not display stories on the site
* The Application can not save favorite articles for later viewing

### Contributing to the project
* Fork this repository to your account
* Clone the repository -  `git clone https://github.com/vynessa/newsfeed.git`
* Create your feature branch - `git checkout -b your-branch-name`
* Commit your changes - `git commit -m “[Enter message]“` or `git commit` for interactive interface
* Push to the remote branch - `git push origin your-branch-name`
* Open a pull request 

I look forward to your Pull requests :)


