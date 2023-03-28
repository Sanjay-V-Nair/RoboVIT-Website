//Animations for intro
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mb = document.getElementById('mb');
let gr = document.getElementById('gr');
let text = document.getElementById('text');
let robo = document.getElementById('robo');
let btn = document.getElementById('btn');
let header = document.getElementById('header');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value*0.5 +'px';
    moon.style.top = value*1.05 +'px';
    mb.style.left = value*0.1 +'px';
    // text.style.marginRight = value*1.5+'px';
    text.style.marginTop = value*-1.2+'px';
    btn.style.marginTop = value*0.5+'px';
    robo.style.marginRight = value*-1.5+'px';
    header.style.marginTop = value*0.5+'px';
    // const parallax = document.getElementById('robo');
    // let scrollPosition = window.pageYOffset;
    // parallax.style.transform = 'translateY(' + scrollPosition * -1 + 'px)';
})


//Animations for remaining pictures
const pic1 = document.getElementById('head');
const part1 = document.getElementById('p2');
const part5 = document.getElementById('p5para');
const pic5 = document.getElementById('robo5');

const s1options = {};

const s1 = new IntersectionObserver(function(entries,s1){
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            pic1.style.transition = 3+'s';
            pic1.style.opacity = 1;
            pic1.style.marginTop = 200+'px';
        }
    });
},s1options);

const s2 = new IntersectionObserver(function(entries,s1){
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            pic5.style.marginRight=0+'px';
            pic5.style.transition=3+'s';
            pic5.style.width = 700 +'px';
        }
    });
},s1options);

s1.observe(part1);
s2.observe(part5);



