gsap.registerPlugin(ScrollTrigger);

//variable de la sección
//variable de

let section = document.getElementById("poem-section");
let masks = document.querySelectorAll(".poem-mask");

let timeline; //variable vacía

timeline = gsap.timeline({
    scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=2500", //una vez que termine de sumar hasta 2500 se acaba el trigger
        scrub:1,
        pin: true,
        markers: true
    }
});

timeline.to(masks, {
xPercent:102,
stagger: 0.6, //marca un delay para no revelar o mostrar las lineas al mismo tiempo
ease: "none"
});
