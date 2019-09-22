const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const burger = document.querySelector('.burger');
const headline = document.querySelector('.headline');
const h = document.querySelector('.h');

const tl = new TimelineMax();


tl.fromTo(hero,1,{height:'0%'},{height:'80%', ease: Power2.easeInOut})
.fromTo(hero,1.2,{width:'100%'},{width:'80%', ease: Power2.easeInOut}, '-=0.5')
.fromTo(slider,1.2,{x: '-100%'},{x:'0%', ease: Power2.easeInOut}, "-=1.3")




