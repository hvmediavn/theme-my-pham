=== Export media with selected content ===
Contributors: joostdekeijzer
Donate link:  https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=joost@dekeijzer.org&item_name=Export+media+with+selected+content+WordPress+plugin&item_number=Joost+de+Keijzer&currency_code=EUR
Tags: export, attachments
Requires at least: 4.0
Tested up to: 5.0
Stable tag: 1.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Include all relevant attachments in your export.

== Description ==

When selecting one post type in the WordPress export screen, by default the linked media (attachments) are not included.

This plugin adds an "Export media with selected content" option. When checked, the plugin tries to find featured images and included media in the post_content, adding them to the export file.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/export-media-with-content` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress

== Screenshots ==
1. "Export media with selected content" checkbox option now available in the Export screen.

== Changelog ==

= 1.1 =
* Tested with WordPress 5
* Includes "Uploaded to" media

= 1.0 =
* Bugfix when only posts from 1 category must be selected
* Feature: introduced `export_query` filter to allow for hooking into this plugin

= 0.9.1 =
* Sanitize input

= 0.9 =
* Initial release
