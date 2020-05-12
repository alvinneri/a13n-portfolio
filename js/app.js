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
    .from('.name' , {x:-50, opacity: 0})
    .from('.lastname' , {x:50, opacity: 0}, "-=.5")
    .from('.description', {opacity: 0}, "-=.5")
    .from('.avatar', {y:20, opacity: 0, duration: 2, ease : 'Back.easeInOut'},"-=1")