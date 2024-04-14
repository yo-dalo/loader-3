let t_x= gsap.timeline()
let t_x_= gsap.timeline()

t_x.from(".main_text h1",1.8,{
  y:270,
   delay:0.5,
   stagger:2.2,
   skewY:10,
   ease: "power4.out",
})

var load = document.getElementById("load");

var loading_bar_ = document.querySelector(".loading_bar_");
function x__() {
  loading_bar_.style.width=load.textContent;
  
  if (load.textContent=="100%") {
    t_x_.to(".loading_bar",{
    //  rotate:90+"deg",
   //   x:2.1+"vw"
    })
    t_x_.to(".loading_bar",{
     // height:1000+'vw',
    //  width:1000+"vh",
    })

    
  }
  requestAnimationFrame(x__);
}
requestAnimationFrame(x__);

load.textContent="74%"

