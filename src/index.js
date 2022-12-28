// jquery 套件引入
// import $ from 'jquery';
$('body').css('background-color' , '#333');


//gsap  套件引入
import { gsap } from "gsap";

gsap.to('.box' , {
   x : 400,
   y: 400,
   duration: 1,
   rotation : 360,
   repeat : 1,
   scale : 10,
   yoyo: true,
   backgroundColor : '#000'
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


import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')


