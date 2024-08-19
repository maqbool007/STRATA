const dropdownBtns = document.querySelectorAll(".dropbtn");

dropdownBtns.forEach((btn, index) => {
  btn.addEventListener("click", function() {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("show");
  });
});

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
};

const textItems = document.querySelectorAll('.text-item');
let currentIndex = 0;

function showNextText() {
  textItems[currentIndex].classList.remove('active');
  textItems[currentIndex].classList.add('text-item-exit');
  
  currentIndex = (currentIndex + 1) % textItems.length;

  textItems[currentIndex].classList.add('active');
  textItems[currentIndex].classList.remove('text-item-exit');
}

setInterval(showNextText, 3000);

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-item');

  navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('show');
    }
  });
});

