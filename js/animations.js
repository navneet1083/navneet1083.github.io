/* ============================================
   Animations V2 — Richer interactions
   ============================================ */
(function(){
    'use strict';
    window.Portfolio = window.Portfolio || {};

    /* --- Scroll Animations --- */
    window.Portfolio.initAnimations = function(){
        var els = document.querySelectorAll('.animate-on-scroll, .impact-card, .journey-entry');
        if(!els.length) return;
        var obs = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
                if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}
            });
        },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
        els.forEach(function(el){obs.observe(el)});
    };

    /* --- Typewriter --- */
    window.Portfolio.initTypewriter = function(){
        var el = document.getElementById('typewriter');
        if(!el) return;
        var phrases = ['Enterprise GenAI Platforms','Computer Vision Systems','LLM-Powered Solutions','Edge AI Deployments','Intelligent Document Pipelines','Agentic AI Frameworks'];
        var pi=0,ci=0,del=false;
        function type(){
            var cur=phrases[pi];
            if(del){el.textContent=cur.substring(0,ci-1);ci--}
            else{el.textContent=cur.substring(0,ci+1);ci++}
            var d=del?35:70;
            if(!del&&ci===cur.length){d=2200;del=true}
            else if(del&&ci===0){del=false;pi=(pi+1)%phrases.length;d=400}
            setTimeout(type,d);
        }
        type();
    };

    /* --- Particle Canvas --- */
    window.Portfolio.initParticles = function(){
        var c = document.getElementById('particlesCanvas');
        if(!c||window.innerWidth<768) return;
        var ctx=c.getContext('2d'),ps=[],cnt=Math.min(Math.floor(window.innerWidth/20),50),mouse={x:null,y:null};
        function resize(){c.width=c.offsetWidth;c.height=c.offsetHeight}
        function P(){this.x=Math.random()*c.width;this.y=Math.random()*c.height;this.vx=(Math.random()-0.5)*0.4;this.vy=(Math.random()-0.5)*0.4;this.r=Math.random()*1.8+0.8}
        P.prototype.update=function(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>c.width)this.vx*=-1;if(this.y<0||this.y>c.height)this.vy*=-1;if(mouse.x!==null){var dx=this.x-mouse.x,dy=this.y-mouse.y,d=Math.sqrt(dx*dx+dy*dy);if(d<130){this.x+=dx*0.008;this.y+=dy*0.008}}};
        P.prototype.draw=function(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle='rgba(79,70,229,0.35)';ctx.fill()};
        function lines(){for(var i=0;i<ps.length;i++)for(var j=i+1;j<ps.length;j++){var dx=ps[i].x-ps[j].x,dy=ps[i].y-ps[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<140){ctx.beginPath();ctx.moveTo(ps[i].x,ps[i].y);ctx.lineTo(ps[j].x,ps[j].y);ctx.strokeStyle='rgba(79,70,229,'+(1-d/140)*0.12+')';ctx.lineWidth=0.5;ctx.stroke()}}}
        function anim(){if(!document.hidden){ctx.clearRect(0,0,c.width,c.height);ps.forEach(function(p){p.update();p.draw()});lines()}requestAnimationFrame(anim)}
        function init(){resize();ps=[];for(var i=0;i<cnt;i++)ps.push(new P());anim()}
        c.parentElement.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top});
        c.parentElement.addEventListener('mouseleave',function(){mouse.x=null;mouse.y=null});
        window.addEventListener('resize',resize);
        init();
    };

    /* --- Count-Up (hero metrics) --- */
    window.Portfolio.initCountUp = function(){
        var counters = document.querySelectorAll('.metric__value[data-target]');
        if(!counters.length) return;
        var done=false;
        var obs = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting&&!done){
                    done=true;
                    counters.forEach(function(c){animate(c)});
                    obs.disconnect();
                }
            });
        },{threshold:0.5});
        obs.observe(counters[0].closest('.hero__metrics')||counters[0]);
        function animate(el){
            var t=parseInt(el.getAttribute('data-target')),dur=1800,start=null;
            function step(ts){
                if(!start)start=ts;
                var p=Math.min((ts-start)/dur,1);
                var ease=1-Math.pow(1-p,3);
                el.textContent=Math.floor(ease*t);
                if(p<1)requestAnimationFrame(step);else el.textContent=t;
            }
            requestAnimationFrame(step);
        }
    };

    /* --- Impact Counter (dark section) --- */
    window.Portfolio.initImpactCounter = function(){
        var cards = document.querySelectorAll('.impact-card__value[data-target]');
        if(!cards.length) return;
        var done=false;
        var obs = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting&&!done){
                    done=true;
                    cards.forEach(function(c){animateImpact(c)});
                    obs.disconnect();
                }
            });
        },{threshold:0.3});
        obs.observe(document.querySelector('.impact-grid')||cards[0]);
        function animateImpact(el){
            var t=parseInt(el.getAttribute('data-target')),dur=2000,start=null;
            function step(ts){
                if(!start)start=ts;
                var p=Math.min((ts-start)/dur,1);
                var ease=1-Math.pow(1-p,4);
                el.textContent=Math.floor(ease*t);
                if(p<1)requestAnimationFrame(step);else el.textContent=t;
            }
            requestAnimationFrame(step);
        }
    };

    /* --- Contact Form --- */
    window.Portfolio.initContactForm = function(){
        var f=document.getElementById('contactForm');
        if(!f)return;
        f.addEventListener('submit',function(e){
            e.preventDefault();
            var btn=f.querySelector('button[type="submit"]'),orig=btn.innerHTML;
            btn.innerHTML='<i class="fas fa-check"></i> Message Sent!';
            btn.style.background='linear-gradient(135deg,var(--color-success),#059669)';
            btn.disabled=true;
            setTimeout(function(){btn.innerHTML=orig;btn.style.background='';btn.disabled=false;f.reset()},3000);
        });
    };

    /* --- Blog Filtering --- */
    window.Portfolio.initBlogFilter = function(){
        var pills=document.querySelectorAll('.filter-pill');
        var cards=document.querySelectorAll('[data-category]');
        if(!pills.length||!cards.length) return;
        pills.forEach(function(pill){
            pill.addEventListener('click',function(){
                var f=this.getAttribute('data-filter');
                pills.forEach(function(p){p.classList.remove('filter-pill--active')});
                this.classList.add('filter-pill--active');
                cards.forEach(function(card){
                    if(f==='all'||card.getAttribute('data-category')===f){card.style.display=''}
                    else{card.style.display='none'}
                });
            });
        });
    };
})();
