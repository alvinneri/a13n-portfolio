const btn = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-items');
let menuOpen = false;
btn.addEventListener('click', ()=>{
    if(!menuOpen){
        btn.classList.add('open');
        navlinks.classList.add('show-menu');
        
        menuOpen = true;
    }else{
        btn.classList.remove('open');
        navlinks.classList.remove('show-menu');
        menuOpen = false;
    }
});

var tl = gsap.timeline({defaults:{duration: 1}});

tl
    .from('.name' , {x:-50, opacity: 0, duration: 1.5,  ease : 'Slow.easeInOut'})
    .from('.lastname' , {x:50, opacity: 0,  ease : 'Slow.easeInOut'}, "-=.5")
    .from('.avatar', {y:20, opacity: 0, duration: 2, ease : 'Back.easeInOut'},"-=1")
    .from('.description', {opacity: 0,  ease : 'Slow.easeInOut'}, "-=.5")
    .from('.stagger', {opacity: 0, x:-50,  ease : 'Slow.easeInOut', stagger:1}, "-=.5")
    .from('.explore' , {y:20, opacity: 0 , ease : 'Slow.easeInOut'})