/* ============================================
   Main V2 — App Initialization
   ============================================ */
(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded',function(){
        var P=window.Portfolio;
        if(!P)return;
        if(P.initNavigation)P.initNavigation();
        if(P.initAnimations)P.initAnimations();
        if(P.initTypewriter)P.initTypewriter();
        if(P.initParticles)P.initParticles();
        if(P.initCountUp)P.initCountUp();
        if(P.initImpactCounter)P.initImpactCounter();
        if(P.initContactForm)P.initContactForm();
        if(P.initBlogFilter)P.initBlogFilter();
        // Hero elements animate immediately
        var hero=document.querySelectorAll('.hero .animate-on-scroll');
        setTimeout(function(){hero.forEach(function(el){el.classList.add('visible')})},100);
    });
})();
