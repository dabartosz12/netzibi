const btnOpen = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

btnOpen.addEventListener("click", ()=> {
    menu.classList.toggle("_active")
});

btnOpen.addEventListener("click", ()=> {
    btnOpen.classList.toggle("__close")
});

const controller = new ScrollMagic.Controller();

const tween2 = gsap.timeline();
tween2.to(".ttesst", {
    opacity:0,
})
tween2.to(".ttesst2", {
    y: "-150%",
    delay: -1,
})

const scene2 = new ScrollMagic.Scene({
    triggerElement: ".img-text",
    duration: "80%",
    triggerHook: 0.1
})
.setTween(tween2)
.addIndicators()
.addTo(controller);

const tl = gsap.timeline();

tl.from(".preloader-content", {
    duration: 2,
    y: "150%", 
    opacity: 0, 
    ease: "expo.inOut",
    skewY: "6deg"
})

tl.to(".span", {
    opacity: 0,
    ease: "expo.inOut",
    duration: 1,
    stagger: .01,
})

tl.to(".black-block", {
    duration: 3,
    y: "-100%",
    ease: "expo.inOut",
    stagger: .25,
})

tl.to(".preloader", {
    duration: .0001,
    y: "-100%",
    ease: "expo.inOut",
    delay: "-=4"
})

gsap.from(".animation-test", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: "expo.inOut",
})

const tween4 = gsap.timeline();

tween4.to(".heading-outline", {
    y: "-50%",
    delay: -1,
})

const scene4 = new ScrollMagic.Scene({
    triggerElement: ".project-item",
    duration: "100%",
    triggerHook: .01
})
.setTween(tween4)
.addIndicators()
.addTo(controller);


gsap.from(".testY", {
    y: "100%",
    duration: 1,
    ease: "expo.inOut",
    delay: 6,
})