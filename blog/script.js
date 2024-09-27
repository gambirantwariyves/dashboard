const closeNav = document.querySelector('.close-nav');
const menu = document.querySelector('.open-nav');
const navBar = document.querySelector('nav');
const mode = document.querySelector('.mode');
closeNav.addEventListener('click', function(){
  navBar.style.height = '0px';
  navBar.style.overflow = 'hidden';
})
menu.addEventListener('click', function(){
  navBar.style.height = '250vh';
  navBar.style.overflow = 'visible';
})

mode.addEventListener('click', function(){
 const light = mode.querySelector('span:nth-child(1)');
 const dark = mode.querySelector('span:nth-child(2)');
  if(light.classList.contains('active')){
    light.classList.remove('active');
    dark.classList.add('active');
    document.body.classList.add('dark-mode');
  } else{
    light.classList.add('active');
    dark.classList.remove('active');
    document.body.classList.remove('dark-mode');
    
  }
})

const toTop = document.querySelector('.sect4');
window.addEventListener('scroll', function(){
  if(this.scrollY > 80){
    toTop.classList.add('active');
  } else{
    toTop.classList.remove('active');
  }
})
