const darkModeBtn = document.getElementById('drk-btn');
const moonImg = document.createElement('img');
const sunImg = document.createElement('img');
sunImg.src = '/images/sun.svg';
moonImg.src = '/images/moon.png';
darkModeBtn.appendChild(sunImg);

let clicked = 0;

darkModeBtn.addEventListener('click', function() {
  clicked++;
  
  if(clicked === 1){
    darkMode();
  } else {
    lightMode();
  }
});

const darkMode = () => {
  darkModeBtn.innerHTML = '';
  darkModeBtn.appendChild(moonImg);

  document.body.style.backgroundColor = '#212121'; //background color
  document.body.style.color = '#ffffff'; //text color
  darkModeBtn.style.backgroundColor = 'hsl(0, 0%, 18%)';
  darkModeBtn.style.border = 'inset 2px rgb(0, 0, 0)';
  darkModeBtn.style.scale = '0.90';
}

const lightMode = () => {
  darkModeBtn.innerHTML = '';
    darkModeBtn.appendChild(sunImg);
    document.body.style.backgroundColor = '#ffffff';
    darkModeBtn.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    darkModeBtn.style.border = 'outset 2px #4c4c4c90';
    darkModeBtn.style.scale = '1';

    clicked = 0;
}