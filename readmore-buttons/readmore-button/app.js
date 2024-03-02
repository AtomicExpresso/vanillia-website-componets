//================================================
let readBtn = document.getElementById('readbtn');
let expand = document.getElementById('expand-text');
let dots = document.getElementById('dots');

let expandClick = 0;
expand.style.display = 'none';
readBtn.style.backgroundColor = '#006eff';

const readBtnClick = () => {
  expand.style.display = 'inline';
  readBtn.style.backgroundColor = '#054ba7';
  readBtn.innerText = 'Read less';
  dots.innerText = ' ';
  expandClick++;

  if (expandClick >= 2) {
    expand.style.display = 'none';
    readBtn.style.backgroundColor = '#006eff';
    readBtn.innerText = 'Read more';
    dots.innerText = '...';
    expandClick = 0;
  }
};

//================================================
