# Connecting Vue.js to a WordPress website, using axios + the WP REST api

> A small reminder/checklist for myself in future projects

## What I often include in my vue/wordpress projects

#### Vue.js
- [vue.js webpack template](http://vuejs-templates.github.io/webpack/)
- [my regular setup](https://github.com/Meuss/vue-webpack-quickstart) (with sass, prettier/eslint, vuex)
- axios

#### WordPress Plugins
- ACF PRO
- ACF to REST API
- Custom Post Type UI
- Disable Comments
- Post Types Order
- WP Migrate DB

## How to setup

#### Load up a new vue project

``` bash
# go through regular cli install, this is for vue-cli 2
npm init webpack my-project
.....
npm i axios -S
npm run dev
```

#### Install WordPress

Download the [latest wordPress](https://wordpress.org/download/) and unzip it at the root.

Go through the regular local wordpress install:
- start your local server to it (I use MAMP, localhost:8888)
- create your local empty database in phpmyadmin
- visit localhost:8888 and enter wp info
- install your plugins (if you use ACF, be sure to add ACF to REST API)

#### Create basic 'theme' for wordpress

- Delete all default themes (wordpress/wp-content/themes/)
- Create your own theme, with these necessary files:
    - functions.php
    - index.php
    - screenshot.png (1200x800)
    - style.css
- Activate the theme in the wp dashboard
- Don't forget to edit gitignore

## Configuration for Vue / webpack

- **config/dev.env.js**

  ``` bash
    'use strict';
    const merge = require('webpack-merge');
    const prodEnv = require('./prod.env');

    module.exports = merge(prodEnv, {
      NODE_ENV: '"development"',
      WP_REST_API: '"http://localhost:8888/wp-json/wp/v2/"',
    });

  ```
- **config/prod.env.js**

  ``` bash
    'use strict';
    module.exports = {
      NODE_ENV: '"production"',
      WP_REST_API: '"https://your-production-website.com/wordpress/wp-json/wp/v2/"',
    };
  ```
- **src/axios-config.js**

  ``` bash
    import axios from 'axios';

    export const api = axios.create({
      baseURL: process.env.WP_REST_API,
    });
  ```
Restart your server with **npm run dev**

# You are now ready to get the data from the api 😎

Take a look at these components as quick examples:
- Home.vue (example of getting a page's content)
- Posts.vue (example of getting latest posts)

=> [WP REST API Handbook](https://developer.wordpress.org/rest-api/)
