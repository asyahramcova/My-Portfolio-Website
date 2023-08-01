/*Animation gsap*/

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const tl = gsap.timeline({default: {duration:.2}})
    tl.to( '.photo', {opacity:1, })
    tl.to( '.textOne', {opacity:1, })
    tl.to( '.textTwo', {opacity:1, })

gsap.to('.textOne',{
    scrollTrigger:{
    trigger:'#about',
    start: '100 0',
    scrub: true
    },
    xPercent:100,
})

gsap.to('.textTwo',{
    scrollTrigger:{
    trigger:'#about',
    start: '100 0',
    scrub: true
    },
    xPercent:150,
})


gsap.to('body',{
    scrollTrigger:{
    trigger:'#skills',
    start: 'top top',
    scrub: true
    },
    css:{
    backgroundColor: '#fff',
    }
})
gsap.to('.skils-list',{
    scrollTrigger:{
    trigger:'#skills',
    start: 'bottom bottom',
    scrub: true
    },
    css:{
    backgroundColor: '#749BC2',
    }
})
gsap.to('#mySkills-title',{
    scrollTrigger:{
    trigger:'#skills',
    start: 'center bottom ',
    scrub: true
    },
    scale: 1.2,
})

gsap.to('#portfolio-title',{
    scrollTrigger:{
    trigger:'#skills',
    start: 'center bottom ',
    scrub: true
    },
    scale: 1.2,
})
gsap.to('#contact-btn',{
    scrollTrigger:{
    trigger:'#portfolio',
    start: 'bottom bottom ',
    scrub: true
    },
    opacity: 0,
})

/* JS */
let burgerMenu = document.querySelector("#burger-menu");
let overlay = document.querySelector("#menu");

burgerMenu.addEventListener("click", function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
    });

/*  Animation aos  */

AOS.init({
    delay:400,
    duration:1000
})
