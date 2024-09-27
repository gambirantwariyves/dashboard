var search = document.querySelector("#search");

window.onscroll = function() {myScroll()};
sticky = search.offsetTop;

function myScroll(){
  if(window.pageYOffset >= sticky){
    search.classList.toggle('sticky');
  } else{
    search.classList.remove('sticky');
  }
}