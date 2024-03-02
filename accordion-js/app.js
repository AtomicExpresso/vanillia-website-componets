//============Javascript Accordian========================
//Grab document id's
const tabOne = document.getElementById('tabone');
const tabTwo = document.getElementById('tabtwo');
const tabThree = document.getElementById('tabthree');

//Click & close
let tabOneClick = 0;
let tabTwoClick = 0;
let tabThreeClick = 0;

const colOne = () => {
  console.log('click');
  tabOne.classList.add('show-col-1');
  tabOneClick++;

  if (tabOneClick >= 2) {
    tabOne.classList.remove('show-col-1');
    tabOneClick = 0;
  }
};

const colTwo = () => {
  console.log('click');
  tabTwo.classList.add('show-col-2');
  tabTwoClick++;

  if (tabTwoClick >= 2) {
    tabTwo.classList.remove('show-col-2');
    tabTwoClick = 0;
  }
};

const colThree = () => {
  console.log('click');
  tabThree.classList.add('show-col-3');
  tabThreeClick++;

  if (tabThreeClick >= 2) {
    tabThree.classList.remove('show-col-3');
    tabThreeClick = 0;
  }
};
//============Javascript Accordian========================