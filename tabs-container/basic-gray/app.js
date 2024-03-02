//================Javascript Tabs============================

//Assigns a variable to the element id's for DOM manipulation
const tabOneContent = document.getElementById('tabone');
const tabTwoContent = document.getElementById('tabtwo');
const tabThreeContent = document.getElementById('tabthree');

const tabOneBtn = document.getElementById('tabone-btn');
const tabTwoBtn = document.getElementById('tabtwo-btn');
const tabThreeBtn = document.getElementById('tabthree-btn');

//For tab opening and closing
let tabOneClick = 0;
let tabTwoClick = 0;
let tabThreeClick = 0;

const tabOne = () => {
  tabOneContent.classList.add('showtabone');
  tabTwoContent.classList.remove('showtabtwo');
  tabThreeContent.classList.remove('showtabthree');

  tabOneBtn.classList.add('tabonebtn-shown');
  tabTwoBtn.classList.remove('tabtwobtn-shown');
  tabThreeBtn.classList.remove('tabthreebtn-shown');

  tabOneClick++;
  tabTwoClick = 0;
  tabThreeClick = 0;

  if (tabOneClick >= 2) {
    clickDectection();
  }
};

const tabTwo = () => {
  tabOneContent.classList.remove('showtabone');
  tabTwoContent.classList.add('showtabtwo');
  tabThreeContent.classList.remove('showtabthree');

  tabOneBtn.classList.remove('tabonebtn-shown');
  tabTwoBtn.classList.add('tabtwobtn-shown');
  tabThreeBtn.classList.remove('tabthreebtn-shown');

  tabTwoClick++;
  tabOneClick = 0;
  tabThreeClick = 0;

  if (tabTwoClick >= 2) {
    clickDectection();
  }
};

const tabThree = () => {
  tabOneContent.classList.remove('showtabone');
  tabTwoContent.classList.remove('showtabtwo');
  tabThreeContent.classList.add('showtabthree');

  tabOneBtn.classList.remove('tabonebtn-shown');
  tabTwoBtn.classList.remove('tabtwobtn-shown');
  tabThreeBtn.classList.add('tabthreebtn-shown');

  tabThreeClick++;
  tabTwoClick = 0;
  tabOneClick = 0;

  if (tabThreeClick >= 2) {
    clickDectection();
  }
};

//Click Decection, Tests for if the tab is clicked more then once. It's to prevent multiple tabs from opening at the same time. Additonally, its also used to help prevent the tab container from being empty.
const clickDectection = () => {
  if (tabOneClick >= 2) {
    tabOneClick = 0;
    if ((tabTwoClick, tabThreeClick === 0)) {
      tabOne();
    }
  }
  if (tabTwoClick >= 2) {
    tabTwoClick = 0;
  }
  if (tabThreeClick >= 2) {
    tabThreeClick = 0;
    if ((tabOneClick, tabThreeClick === 0)) {
      tabThree();
    }
  }
};

//Forces tabOne to open when the window is reloaded.
window.addEventListener('load', (event) => {
  console.log('page was loaded');
  tabOne();
});

//================End ofJavascript Tabs====================
