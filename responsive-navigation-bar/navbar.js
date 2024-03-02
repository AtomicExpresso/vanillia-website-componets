//======================================
//Get document id's and assing variables

const navLinks = document.getElementById('nav-links');
let hamburgerMenu = document.getElementById('hamburger-menu');
const secondMenu = document.getElementById('second-menu');

//set the hambuger menu click to 0, this behaves sort of like an on/off switch. 0 is off and 1 is on
let hamburgerMenuClick = 0;

//This funciton is used to test the window size
const windowResize = () => {
  if (window.innerWidth > 768) {
    //IF the window size is greater then 768px, hide the hamburger menu
    hamburgerMenu.style.display = 'none';
    hamburgerMenu.classList.remove('hamburger-menu-show');
    hamburgerMenuClick = 0;

    //resets hamburger menu styles
    hamburgerMenu.style.scale = 1; 
    hamburgerMenu.style.backgroundColor = 'transparent';
    hamburgerMenu.style.borderRadius = '0%';
    hamburgerMenu.style.padding = '0px';

    navLinks.classList.add('nav-links');
    navLinks.classList.remove('nav-links-hide');

    secondMenu.classList.add('second-menu');
    secondMenu.classList.remove('second-menu-show');
  } else {
    //if its less then 768px, show the hamburger menu
    hamburgerMenu.style.display = 'flex';
    hamburgerMenu.classList.add('hamburger-menu-show');
    navLinks.classList.remove('nav-links');
    navLinks.classList.add('nav-links-hide');
  }
};

//Function for if the hamburger menu is clicked
const toggleMenu = () => {
  secondMenu.classList.add('second-menu-show');
  secondMenu.classList.remove('second-menu');
  hamburgerMenuClick++; //sets click to on

  hamburgerMenu.style.scale = 0.8;
  hamburgerMenu.style.backgroundColor = 'hsl(341, 0%, 95%)';
  hamburgerMenu.style.borderRadius = '10%';
  hamburgerMenu.style.padding = '5px';

  if (hamburgerMenuClick > 1) {
    hamburgerMenuClick = 0; //sets click to off
    secondMenu.classList.remove('second-menu-show');
    secondMenu.classList.add('second-menu');
    
    //resets hamburger menu styles
    hamburgerMenu.style.scale = 1;
    hamburgerMenu.style.backgroundColor = 'transparent';
    hamburgerMenu.style.borderRadius = '0%';
    hamburgerMenu.style.padding = '0px';
  }
};

//Event listeners to see if the hamburger menu is clicked and if the window is either resized or loaded
hamburgerMenu.addEventListener('click', toggleMenu);
window.addEventListener('resize', windowResize);
window.addEventListener('load', windowResize);

//===============================================
