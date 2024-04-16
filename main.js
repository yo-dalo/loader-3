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
var i=0;
  setInterval(()=>{
load.textContent=i+"%"
i++;
},100);


let loding_bor = gsap.timeline();
loding_bor.to(".loading_bar",{
  delay:10,
  rotate:90+"deg",
  top:50+"%",
  left:50+"%",
    transform: "translate(-50%,-50%)",
   ease: "power4",

  
})

loding_bor.to(".loading_bar",{
  width:100+"vh",
    delay:1,
       ease: "power4",


})
loding_bor.to(".loading_bar", {
  height: 100 + "vw",
    delay:0.2,
   ease: "power4",

})
loding_bor.to(".loader",0.8, {
  opacity: 0,
  delay: 0.2,

})



////loader_x_________
var hello = ["hell","swagatham"]
loding_bor.to(".loader_x",{
  //top:1000+"vh",
  duration:3,
  rotate:180+'deg',
  repeat:5,
  yoyo: true,
   //stagger:1,
   ease: "power4.inOut",
})

loding_bor.to(".loader_x",{
  top:1000+"vh",
  duration:3,
  rotate:180+'deg',
   //stagger:1,
   ease: "power4.inOut",
})
