<?php

// auto-update plugins
add_filter( 'auto_update_plugin', '__return_true' );
// allow Featured image in posts
add_theme_support( 'post-thumbnails' );
// normal enqueue
wp_enqueue_style( 'style', get_stylesheet_uri() );