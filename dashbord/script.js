const nav = document.querySelector('header');
const main = document.querySelector('main');
const menu = document.querySelector('.menu');
const  bland = document.querySelector('.bland');

menu.addEventListener('click', function(){
  nav.classList.toggle('wide');
  if(nav.classList.contains('wide')){
    main.classList.toggle('wide');
  } else{
    nav.classList.remove('wide');
    main.classList.remove('wide');
  }
});

const dackMode = document.querySelector('.mode');
dackMode.addEventListener('click', function(){
  document.body.classList.toggle('dack-mode');
  dackMode.querySelector('i:nth-child(1)').classList.toggle('active');
  dackMode.querySelector('i:nth-child(2)').classList.toggle('active');
})

const closeNav = document.querySelector('.close');
closeNav.addEventListener('click', function(){
  nav.classList.remove('wide');

})
