//=======================================================

const popupBtn = document.getElementById('popbtn');
const popUpBox = document.getElementById('popup');
const popUpClose = document.querySelectorAll('.popupclose');

popUpBtnClick = 0;
popUpBox.style.display = 'none';
popupBtn.style.display = 'flex';

const popUp = () => {
  popUpBox.style.display = 'flex';
  popUpBox.classList.add('showpopup');
  popUpBox.classList.remove('closepopup');

  popupBtn.style.display = 'none';
};

const closePopUp = () => {
  popUpBtnClick = 0;
  popUpBox.classList.add('closepopup');
  popupBtn.style.display = 'flex';
};

popupBtn.addEventListener('click', popUp);

popUpClose.forEach((element) => {
  element.addEventListener('click', closePopUp);
});

//=======================================================
