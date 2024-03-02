//================================================
let readtxt = document.getElementById('readtxt');
let expand = document.getElementById('expand-text');
let dots = document.getElementById('dots');

let expandClick = 0;
expand.style.display = 'none';
readtxt.style.color = '#006eff';

const readTxtClick = () => {
  expand.style.display = 'inline';
  readtxt.style.color = '#054ba7';
  readtxt.innerText = 'Read less';
  dots.innerText = ' ';
  expandClick++;

  if (expandClick >= 2) {
    expand.style.display = 'none';
    readtxt.style.color = '#006eff';
    readtxt.innerText = 'Read more';
    dots.innerText = '...';
    expandClick = 0;
  }
};

//================================================
