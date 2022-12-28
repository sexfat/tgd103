import $ from 'jquery';
$('body').css('background-color' , 'yellow');


//gsap 
import { gsap } from "gsap";

gsap.to('.box' , {
   x : 400,
   y: 400,
   duration: 1,
   rotation : 360,
   repeat : 1,
   scale : 4,
   yoyo: true
})





// test
function aa(x){
  return  x * 10 
}

console.log(aa(20));
console.log('finish');



