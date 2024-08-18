import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/index.scss'
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger) 

let tl = gsap.timeline({
});


tl
    .from('.mainPage-banner_title', { scale: 0.3, rotation: 45, autoAlpha: 0, })
    .from('.mainPage-banner_text', { scale: 1.5, rotation: 90, autoAlpha: 0,  })
    .from('.mainPage-banner-scrolls svg', { y:1000, autoAlpha: 0})

// about

gsap.from('.about-content__text', {
    scrollTrigger:{
       trigger: '.about-content__text',
       toggleActions:'restart none none none'
    }, 
    x: 1000,
    duration:1
})
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

// services

const tl2 = gsap.timeline({
    scrollTrigger:{
       trigger: '.services-cards',
    },
})
tl2.from('.services-content__title', 
    { 
        x:40,
        opacity:0
    }
)
   tl2.from('.services-content__text',{
        x:-40,
        opacity:0
    })
    tl2.from('.services-content__suptitle',{
        y:40,
        opacity:0
    })


const tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:'.services-strategy__title'
        },
})

tl3
.from('.services-strategy__title',{
    x:200,
    opacity:0,
    duration:1
})

.from('.services-strategy__suptitle',{
    rotate:90,
    opacity:0,
})


// slider



function Slider(){
    let sliderWidth = 3200
    let cardWidth = document.querySelector('.slider-card').clientWidth

    let scrollSliderTransform = sliderWidth - cardWidth

const tlSlider = gsap.timeline({
    scrollTrigger:{
        trigger:'.verticals',
        scrub:4,
        start:'center center',
    },
})

tlSlider
.to('.slider-card',{
     x:'-=' + scrollSliderTransform + 'px',
})
}

Slider()




// partners animation


const tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:'.partners-cards',
    },
    
})
tl4
.from('.partners-content__suptitle',{
     opacity:0,
    rotate:90
})
.from('.partners-content__title',{
     opacity:0,
    x:-40
})
.from('.partners-content__text',{
     opacity:0,
    x:40
})



