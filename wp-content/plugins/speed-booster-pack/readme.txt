=== Speed Booster Pack ===
Contributors: optimocha
Tags: speed, speed optimization, performance, scripts to the footer, defer parsing of javascript, remove query strings, gtmetrix, google pagespeed, yslow, compression, instant.page, disable cart fragments, javascript optimization, css optimization, inline css
Requires at least: 4.6
Tested up to: 5.2.1
Requires PHP: 5.6
Stable tag: 3.8.2.1
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

A light, frequently updated and easy to use plugin to help your website load faster and score higher on Google Page Speed.

== Description ==

**Speed Booster Pack** is a standalone plugin built, maintained & operated by the friendly folks over at [Optimocha](https://optimocha.com/)

**Speed Booster Pack is a lightweight, frequently updated, easy to use and well supported plugin which allows you to improve your website's loading speed.**

Improving your site's speed will get you a better score on major speed testing services such as [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/), [GTmetrix](https://gtmetrix.com/), [Pingdom](https://tools.pingdom.com/), [WebPageTest](https://www.webpagetest.org/) and will also improve your overall site's usability. This will help Google and other search engines to rank your site higher in search results thus sending more traffic.

= WordPress Speed Optimization and the Importance of Having a Fast Website =

People abandon pages that take more than a few seconds to load, which means slow pages lose you visitors (and money). You don’t want that to happen, do you? :-)

Speed Booster Pack is a plugin that can help you speed up your website by tweaking different options.

= Main Plugin Features =

* **Eliminate render-blocking JavaScript and CSS** in your content.
* **Move scripts to the footer** to improve page loading speed.
* **Minify and inline all CSS and move them to footer** to optimize CSS delivery.
* **Minify HTML and JavaScript** to increase your page speed.
* **Defer parsing of JavaScript files** to reduce the initial load time of your page.
* **Remove query strings from static resources** to improve your speed scores.
* **Remove junk header tags** to clean up your WordPress head code.
* **Exclude scripts** from being moved to the footer or defered.
* **Remove RSD Link** if you are not using a Weblog Client or some 3rd party sites/programs that use the XML-RPC request formats.
* **Remove WordPress Version** this option is added for security reasons and cleaning the header.
* **Remove all RSS feed links** to cleanup your WordPress header.

* For complete usage instructions visit [Plugin Documentation](http://optimocha.com/speed-booster-pack-documentation/)

== Installation ==

1. Download the plugin (.zip file) on your hard drive.
2. Unzip the zip file contents.
3. Upload the `speed-booster-pack` folder to the `/wp-content/plugins/` directory.
4. Activate the plugin through the 'Plugins' menu in WordPress.
5. A new sub menu item `Speed Booster Pack` will appear in your main Settings menu.

== Screenshots ==
1. Plugin options page

== Changelog ==

= 3.8.2.1 =

*Release Date: 04 June 2019*

* **Fixed:** Quick fix for the "Move scripts to footer" option.

= 3.8.2 =

*Release Date: 03 June 2019*

* **Added:** The new uninstall.php file now removes plugin settings when you delete the plugin. (Deactivating the plugin doesn't remove plugin settings.)
* **Fixed:** Minor styling & HTML validation fixes for the settings panel.
* **Updated:** Rewrote part of the Localize Analytics feature, and update the default Google Analytics code.
* **Updated:** Tags in readme.txt.
* **Tested:** Ensured the plugin works in WordPress version 5.2.1 and PHP version 5.6.

= 3.8.1 =

*Release Date: 20 May 2019*

* **Speed Booster Pack turns five!** We're celebrating SBP's birthday (20th May) with a better (WAY better) admin interface. We changed places of some of the options in the General and Advanced tabs, and put a "be careful" warning on top of the Advanced, CDN and Google Analytics tabs. We also updated the CSS, and added a sidebar which has some speed test links that could turn into speed test widgets in the future!
* **New:** Added a "Disable jQuery Migrate" option.
* **Fixed:** Added a WooCommerce check for the "Disable cart fragments" option.
* **Updated:** The POT file is recreated and will be updated on each feature update.
* **Removed:** The "Load JS from Google Libraries" option.
* **Removed:** The "Disable all above CSS options on mobile devices" option.
* **Removed:** The "Disable XML-RPC" option.
* **Removed:** The "Remove extra Font Awesome styles" option. This will be added later, but needs a rewrite.
* **Removed:** Some very unnecessary CSS styling both in the plugin's main style.css file and a separate, jQuery UI-related file.

= 3.8 =

*Release Date: 03 May 2019*

* Fixed most of the typos
* Added option: "Disable cart fragments"
* Added option: "Integrate instant.page"
* Removed option: JPEG quality
* Removed all default options for new users
* Fixed the issues with already defined constants
* Fixed the double jQuery issue
* Tested for WordPress 5.2

= 3.7.7 =

*Release Date: 02 April 2019*

* Speed Booster Pack is acquired by [Optimocha](https://optimocha.com/)!
* Updates to the Optimize More tab

= 3.7.6 =

*Release Date: 18 February 2019*

* Improved admin UI
* Added "Disable Self Pingbacks" option
* Added "Disable Dashicons" option
* Added "Disable Google Maps" option
* Added "Disable Heartbeat" option
* Added "Heartbeat frequency" option
* Added "Autosave interval" option
* Added "Remove REST API Links" option
* Added "Limit Post Revision" option
* Added CDN options
* Added Google Analytics options
* Removed "Remove RSD(Really Simple Discovery) Link" option
* Removed "Image compression level" option

= 3.7.5 =

*Release Date: 09 December 2018*

* removed uninstall feedback

= 3.7.4 =

*Release Date: 05 December 2018*

* minor backend tweaks - notice
* added language files

= 3.7.3 =

*Release Date: 08 November 2018*

* minor backend tweaks

= 3.7.2 =

*Release Date: 08 November 2018*

* minor tweaks & version bump
* removed ShortPixel aff integration

= 3.7.1 =
* Temporarily remove lazyLoad as the bundled JS files, namely, CrazyLazy don't seem to be working properly with the latest jQuery version.

= 3.7 =

* Bumped FontAwesome bundled CSS version from 4.1 -> 4.7 and changed to using MaxCDN
* (Hopefully) fixed the issue affecting relative/absolute paths when using minify CSS
* Wrongfully used escape functions
* Should use wp_scripts-> done instead of wp_scripts->queue
* Update Use Google Libraries 3rd party dependency
* Can't be fully translated because of one wrong text-domain string
* Change UI to WordPress Core UI
* Added plugin uninstall feedback
* Added plugin (dedicated) support tab && moved plugin feedback section only to support tab
* Added tooltips to all fields
* Re-worked the page load / site stats bar & added a bit more info
* Removed the old way of handling the uninstall hook & deletion of the sbp_integer variable from SBP when you uninstall it. In case you change your mind & reactivate the plugin, your former image compression value's there waiting for you.
* Addressed a small issue with the "Exclude scripts from being moved to footer" display
* Made all of the plugin's link send to MachoTheme's docs instead of Tiguan
* Updated jQuery UI CSS to latest version & included the PNG sprites that come by default with jQuery UI, eliminating some back-end "asset not found" errors
* Removed unused files
* Added feature: "Remove Emoji scripts"
* Added feature: "Disable XML-RPC" pings
* Added default values. Now it's even easier to get speed boosts without actually having to toggle stuff
* Removed po/mo files from SBP since translations are now handled here: https://translate.wordpress.org/projects/wp-plugins/speed-booster-pack
* jQuery will always be enqueued in the header, as a security/fallback measure.
* Fixed the way "exclude scripts from footer" works. It's now usable and only requires the script handle. Added backwards compat as well
* Fixed the way script deferring works, it's now actually usable. Introduced a filter: sbp_exclude_defer_scripts so users can exclude more than 4 scripts from being deferred
* Rewrote the way the plugin was handling removal of query strings from assets
* Automatically exclude certain known CSS assets from being async/minifed and/or moved from header (ex: dashicons / admin-bar)
* Full list of changes for v3.7, here: https://github.com/MachoThemes/speed-booster-pack/milestone/1?closed=1

= 3.6.1 =
 * Added a section for feedback in the plugin's dashboard

= 3.6 =
* Changed contributors and fixed a few bugs. Plugin is now under new ownership.

= 3.5 =
* Fix compatibility with the CrazyLazy plugin.

= 3.4 =
* Added an option to increase your page load speed by minifying JavaScript and HTML. Removed option to remove RSD Link, since its impact on improving speed was insignificant.

= 3.3 =
* Fix Lazy Load CSS problem.

= 3.2 =
* Added Lazy Load feature to improve the web page loading times of your images.

= 3.1 =
* Following requests from users, added back the option of excluding javascript elements.

= 3.0 =
* We removed the option of excluding javascript elements as this option falls page speed score, making this plugin almost useless. Also, these options were only for advanced users, for regular users, incorrect use these options could destabilize the entire site functionality.
* We also removed the lazy load images option because it was outdated and broken. We'll come up with a new and updated solution soon.

= 2.9 =
* Added a new recommended features that can make your site load faster

= 2.8 =
* Fixed plugin options visibility issue

= 2.7 =
* All important options switched to off by default (on first plugin activation).

= 2.6 =
* Added Spanish translation by [Andrew Kurtis](http://www.webhostinghub.com/)

= 2.5 =
* Added option to exclude certain JS files from being moved to the footer.
* Added option to exclude certain JS files from being defered.
* Added a list of handles of all scripts and styles enqueued by your theme, useful for excluding options.
* Removed FOUC option since is useless with W3 Total Cache.
* Some visual changes on plugin options page.
* Translation updated with the new strings.
* Moved some admin inline scripts to js files.

= 2.4 =
* Fixed TypeError: $ is not a function when Prevent Flash of Unstyled Content (FOUC) option is active. Thanks to [@Marcio Duarte](http://profiles.wordpress.org/pagelab) for the [bug report](http://wordpress.org/support/topic/javascript-error-53).

= 2.3 =
* Added option to exclude certain CSS files from being loaded asynchronously.
* Changed the position of the styles when they are inlined to the footer (before js files).
* Added an experimental option to eliminate flash of unstyled content (FOUC) when all CSS styles are inlined to the footer.
* Translations updated.

= 2.2 =
* Fixed option to disable all CSS Async features on mobile devices.
* Fixed incompatibility with WPtouch plugin. Thanks to [@DevilIce](http://profiles.wordpress.org/devilice) for the [bug report](http://wordpress.org/support/topic/css-asynchronously-and-wptouch-issue).
* Updated function wp_is_mobile() on lazy load images to really disabled this feature on mobile devices.

= 2.1 =
*Added an option to disable all CSS Async features on mobile devices, to avoid some appearance issues until finding a clean solution to fix it.

= 2.0 =
*Modified: amended previous except for the admin toolbar css to enqueue its stylesheets only if admin bar is showing, to not break the render blocking plugin option.

= 1.9 =
* Fix: breaking the SEO by Yoast plugin interface (perhaps as well as to others too). Thanks to [@JahLive](http://profiles.wordpress.org/jahlive) for the [bug report](http://wordpress.org/support/topic/yoast-wordpress-seo-broken-after-update).
* Added an except for the admin toolbar css since the Load CSS asynchronously option removes its dashicons and stylesheets.


= 1.8 =
* Added option to load CSS asynchronously to render your page more quickly and get a higher score on the major speed testing services
* Added option to inline and minify all CSS styles and move them to the header or to the footer, to eliminate external render-blocking CSS and optimize CSS delivery.
* Added option to change the default image compression level, to help your pages load faster and keep file sizes smaller.
* Added memory usage information and active plugins number in the plugin options page.
* Replaced PHP version info with memory usage information (more useful).
* Added Romanian translation and POT file. Translators are welcome!

= 1.7 =
* Fixed Lazy Load missed js.

= 1.6 =
* Fixed some errors and missed codes from plugin functions.

= 1.5 =
* Added Lazy Load feature to improve the web page loading times of your images.
* Added an option to remove all rss feed links from WP Head.
* Added plugin options informations to the footer, visible in page source(hidden in front end), useful for debugging.

= 1.4 =
* Added a new option to remove extra Font Awesome stylesheets added to your theme by certain plugins, if Font Awesome is already used in your theme.
* Added a new option to remove WordPress Version Number.

= 1.3 =
* Fixed strict standards error: redefining already defined constructor for class.

= 1.2 =
* Modified the plugin version number variable in plugin options page.

= 1.1 =
* Modified Readme file

= 1.0 =
* Initial release
