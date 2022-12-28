// jquery 套件引入
import $ from 'jquery';
$('body').css('background-color' , 'yellow');


//gsap  套件引入
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

// css style 引入
import './css/style.css'
import './css/header.css'
import './css/index.css'
// sass style 引入
import './sass/index.scss'



// test
function aa(x){
  return  x * 10 
}






console.log(aa(20));
console.log('finish');



