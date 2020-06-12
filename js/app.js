const btn = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-items");
let menuOpen = false;
btn.addEventListener("click", () => {
  if (!menuOpen) {
    btn.classList.add("open");
    navlinks.classList.add("show-menu");

    menuOpen = true;
  } else {
    btn.classList.remove("open");
    navlinks.classList.remove("show-menu");
    menuOpen = false;
  }
});

// var tl = gsap.timeline({defaults:{duration: 1}});
// var tl2 = gsap.timeline({onUpdate:updatePercentage});
// const controller = new ScrollMagic.Controller();

// tl2.to('.scrolldown' , {duration: 1, opacity: 0})
//     .from(".about-image" , {duration: 1, x:-200,opacity: 0})
//     .from(".about-content" , {duration :1, opacity: 0 , ease: 'Slow.easeInOut'})

// const scene = new ScrollMagic.Scene({
//     triggerElement : "#about",
//     triggerHook : "onLeave",
//     duration: "100%"
// })

//     .setPin("#about")
//     .setTween(tl2)
//     .addTo(controller)

// function updatePercentage() {
//     tl2.progress();
//     console.log(tl2.progress());

// }

tl.from(".name", { x: -50, opacity: 0, duration: 1.5, ease: "Slow.easeInOut" })
  .from(".lastname", { x: 50, opacity: 0, ease: "Slow.easeInOut" }, "-=.5")
  .from(
    ".avatar",
    { y: 20, opacity: 0, duration: 2, ease: "Back.easeInOut" },
    "-=1"
  )
  .from(".description", { opacity: 0, ease: "Slow.easeInOut" }, "-=.5")
  .from(
    ".stagger",
    { opacity: 0, x: -50, ease: "Slow.easeInOut", stagger: 1 },
    "-=.5"
  )
  .from(".explore", { y: 20, opacity: 0, ease: "Slow.easeInOut" });
