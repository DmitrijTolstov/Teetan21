import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/index.scss'
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger) 

let tl = gsap.timeline({
});


tl
    .from('.mainPage-banner_title', { scale: 0.3, rotation: 45, autoAlpha: 0, })
    .from('.mainPage-banner_text', { scale: 1.5, rotation: 90, autoAlpha: 0,  })
    .from('.mainPage-banner-scrolls svg', { y:100, autoAlpha: 0})

// about

gsap.to('.about-content__text', {
     scrollTrigger:{
       trigger: '.about',
       start:'top 20%',
       scrub:true,
    }, 
        yPercent:-40,
})
 gsap.to('.about-content__image', 
    { 
       scrollTrigger:{
       trigger: '.about',
       start:'bottom bottom',
       scrub:true,
    }, 
        yPercent:18,
    }
)
gsap.from('.about-card__right', 
    { 
       scrollTrigger:{
       trigger: '.about-card__right',
       toggleActions:'restart none none none'
    }, 
        x:1000,
        duration:1

    }
)
gsap.from('.about-card', 
    { 
       scrollTrigger:{
       trigger: '.about-card__right',
       toggleActions:'restart none none none'
    }, 
        x:-1000,
        duration:1

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
    let sliderVerticalsWidth = 3200
    let cardVerticalsWidth = document.querySelector('.slider-card').clientWidth

    let sliderClientsWidth = document.querySelector('.clients-slider').clientWidth
    let cardClientsWidth = document.querySelector('.slider-card-image').clientWidth


    let scrollSliderTransform = sliderVerticalsWidth - cardVerticalsWidth
    let scrollSliderTransform2 = (sliderClientsWidth - cardClientsWidth ) - 250


gsap.to('.slider-card',{
     x:'-=' + scrollSliderTransform + 'px',
      scrollTrigger:{
        trigger:'.verticals',
        scrub:10,
        start:'center center',
    },
     
})
gsap.to('.verticals-progress',{
    value:100,
    scrollTrigger:{
         trigger:'.verticals',
          start:'center center',
         scrub:10,
    }
})

gsap.to('.slider-card-image',{
     x:'-=' + scrollSliderTransform2 + 'px',
      scrollTrigger:{
        trigger:'.clients',
        start:'center center',
        scrub:4
    },
     
})

gsap.to('.clients-progress',{
    value:100,
    scrollTrigger:{
         trigger:'.clients-slider',
          start:'center center',
          scrub:4
    }
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



// card

let cards = document.querySelectorAll('.partners-card')

cards.forEach(card =>{
    card.addEventListener('mousemove', e =>{

	    let rect = card.getBoundingClientRect();

        let percentY = Math.round((rect.x - e.clientX)/rect.width * 50);
		let percentX = Math.round((rect.y - e.clientY)/rect.height * 50);
		percentX = (percentX + 50) / 3; 
		percentY = (percentY + 50) / 3; 


         card.style.transform = 'rotateX(' + percentX + 'deg) rotateY(' + percentY + 'deg)';
  })
  card.addEventListener('mouseleave', e =>{

    card.style.transform = 'rotateX(0deg) rotateY(0deg)';

  })
        
    })
    



