// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// fill svg color
user_pref("svg.context-properties.content.enabled", true);

// enable :has selector
user_pref("layout.css.has-selector.enabled", true);

// integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);

// trim url
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);

// show profile management in hamburger menu
user_pref("browser.profiles.enabled", true);

// gtk rounded corners
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);

// show compact mode
user_pref("browser.compactmode.show", true);

// fix sidebar tab drag on linux
user_pref("widget.gtk.ignore-bogus-leave-notify", 1);

user_pref("browser.tabs.allow_transparent_browser", false);

// uidensity -> compact
user_pref("browser.uidensity", 1);

// macos transparent
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);

// don't warn on about:config open
user_pref("browser.aboutConfig.showWarning", false);

user_pref("sidebar.revamp", false);
user_pref("sidebar.verticalTabs", false);
