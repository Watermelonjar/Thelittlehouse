const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

// Function to prevent horizontal scrolling
function preventHorizontalScroll(e) {
    // Check if the scroll event is horizontal
    if (e.deltaX !== 0) {
        e.preventDefault(); // Prevent the default scroll behavior
    }
}

// Add event listener for the 'wheel' event on the window or document
window.addEventListener('wheel', preventHorizontalScroll, { passive: false });

// Optionally, you can also disable horizontal scrolling for touch devices
function preventTouchMove(e) {
    if (e.touches.length === 1 && Math.abs(e.touches[0].screenX - e.changedTouches[0].screenX) > 1) {
        e.preventDefault();
    }
}

window.addEventListener('touchmove', preventTouchMove, { passive: false });
