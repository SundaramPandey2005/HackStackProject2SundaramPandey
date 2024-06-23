// function slideLeft(){
//     let bg2=document.querySelector('.bg2');
//     let windowHeight=window.innerHeight;
//     let elementTop = bg2.getBoundingClientRect().top;
//     let elementVisible = 100;
//     if(elementTop < windowHeight - elementVisible){
//         bg2.classList.add("show-animation")
//     }
//     else{
//         bg2.classList.remove("show-animation")
//     }
// }
// window.addEventListener("scroll",slideLeft)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);