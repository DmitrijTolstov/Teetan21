import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/index.scss'
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger) 

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: '.mainPage',
        pin: true, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=500', // end after scrolling 500px beyond the start
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
            snapTo: 'labels', // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 1, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        }
    }
});


tl
    .from('.mainPage-banner_title', { scale: 0.3, rotation: 45, autoAlpha: 0 })
    .from('.mainPage-banner_text', { scale: 1.5, rotation: 90, autoAlpha: 0 })
    .from('.mainPage-banner-scrolls svg', { y:1000, autoAlpha: 0, duration:3})

gsap.from('.about-content__text', {
    scrollTrigger:{
       trigger: '.about-content__text',
       toggleActions:'restart none none none'
    }, 
    x: 1000,
    duration:1,
    
});
    
gsap.from('.about-card', 
    { 
         scrollTrigger:{
       trigger: '.about-card',
       toggleActions:'restart none none none'
    }, 
        x:-1000,
        duration:2

    }
)

gsap.from('.about-card__right', 
    { 
       scrollTrigger:{
       trigger: '.about-card__right',
       toggleActions:'restart none none none'
    }, 
        x:1000,
        duration:2

    }
)