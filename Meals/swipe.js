
// $(document).ready(function(){
//   $(".flip").click(function(){
//     $("p").flip();
//   });
// });


// $(".flip").flip({   
// });


  // $("#tuesday").on("swiperight", function(){ 
  //   alert("Your swiped right");
  // });





// const _swipe = document.querySelector('#swiper'); 
// const _swiper= document.querySelector('.day'); 
// const totalSections = _swipe.children.length; 
// let initialX = 0; 
// let i = null; 

// _swipe.style.setProperty('--selectionNumber', totalSections);
// _swipe.addEventListener('touchstart', initial, false);
// _swipe.addEventListener('touchend', moveIt, false);
// // for testing
// _swipe.addEventListener('mousedown', initial, false);
// _swipe.addEventListener('mouseup', moveIt, false);

// function makeSame(xSpot) { 
//   return xSpot.changedTouches ? xSpot.changedTouches[0] : xSpot 
// };

// function initial(item) { 
//   initialX = (item.changedTouches ? item.changedTouches[0] : item).clientX;
// };

// function moveIt(item) {
//   if (initialX || initialX === 0) { 
//     let changeInX = makeSame(item).clientX - initialX, sign = Math.sign(changeInX);

//     if ((i > 0 || sign < 0) || (i < totalSections - 1 || sign > 0)) { 
//       _swipe.style.setProperty('--index', i -= sign);
//     }

//     // reset initial x
//     initialX = null;
//   }
// };

