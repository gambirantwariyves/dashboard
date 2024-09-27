// Change Navbar on Scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window_scroll', window.scrollY > 0)
})

// Stats Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const targetCount = +counter.getAttribute("data-target");
  let currentCount = 0;

  const countUp = () => {
    if (currentCount < targetCount) {
      currentCount += Math.ceil(targetCount / 100);
      counter.textContent = currentCount;
      setTimeout(countUp, 20);
    }
  };

  countUp();
});

// Show / Hide Testimony

const test = document.querySelectorAll('.testimony');

test.forEach(testimony =>{
  testimony.addEventListener('click',() => {
    testimony.classList.toggle('open');

    const icon = testimony.querySelector('.testimony_icon i');
    if (icon.className==='bi bi-arrow-down') {
      icon.className = "bi bi-arrow-left";
    }
    else{
      icon.className = "bi bi-arrow-down";
    }
  })
})