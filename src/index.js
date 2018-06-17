import {addSameListenerToMulti, appendClass, removeClass} from './utils';
import './sass/app.scss';

(function() {
    
    let init = () => {
        addSameListenerToMulti(document.getElementsByClassName('toggle-button'), 'click', function(e) {
            let classes = this.className.split(' ');
            let toggleTarget = document.getElementById(this.getAttribute('data-target'));
            let sideNav = document.getElementById('sideNav');
            let navbar = document.getElementById('navbar');
            if(classes.indexOf('toggle') != -1) {
                removeClass(this, 'toggle');
                removeClass(toggleTarget, 'toggle');
                removeClass(sideNav, 'hide');
                removeClass(navbar, 'fixed');
            }
            else {
                appendClass(this, 'toggle');
                appendClass(toggleTarget, 'toggle');
                appendClass(sideNav, 'hide');
                appendClass(navbar, 'fixed');
            }
            e.preventDefault();
        });
        
        
        addSameListenerToMulti(document.getElementsByClassName('scroll-link'), 'click', function(e) {
            // let scrollTo = $(this.getAttribute('href'));
            // $('html').animate({scrollTop: scrollTo.offset().top},'slow');
            e.preventDefault();
        });
        
        addSameListenerToMulti(document.getElementsByClassName('link-to'), 'click', function(e) {
            let link = this.getAttribute('link');
            window.open(link);
            e.preventDefault();
        });
        
        
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-56712879-5', 'auto');
          ga('send', 'pageview');
    }
    
    init();
})()