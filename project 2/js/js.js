const themToggle = document.querySelector('.them');

// if(localStorage.getItem('mode') == 'dark'){
//     document.body.classList.toggle('dack-them');

// }
// themToggle.addEventListener('click', ()=>{
//     document.body.classList.toggle('dack-them');
//     document.querySelector('li:nth-child(1)').classList.toggle('active');
//     document.querySelector('li:nth-child(2)').classList.toggle('active');
//     localStorage.setItem('mode', 'dark');
// })
// localStorage.getItem('mode');

const menu = document.querySelector('.menu');
const openNav = document.querySelector('.navigationbar')
const closeNav = document.querySelector('.closenav')
menu.addEventListener('click', ()=>{
    openNav.style.width='100%';
})

closeNav.addEventListener('click', ()=>{
    openNav.style.width='0';
})