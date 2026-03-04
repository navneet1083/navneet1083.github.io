/* ============================================
   Theme Setup
   ============================================ */

(function() {
    'use strict';

    // Set light theme as default
    document.documentElement.setAttribute('data-theme', 'light');

    // Future-ready: theme toggle support
    window.Portfolio = window.Portfolio || {};

    window.Portfolio.theme = {
        current: 'light',
        set: function(theme) {
            this.current = theme;
            document.documentElement.setAttribute('data-theme', theme);
        }
    };
})();
