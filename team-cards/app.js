const colOne = document.getElementById('card-one');
const colTwo = document.getElementById('card-two');
const colThree = document.getElementById('card-three');
const flipBtn = document.getElementById('flip');

clicked = 1;

flipBtn.addEventListener('click', function() {
  clicked++;

  if (clicked === 2){
    console.log('front')
    colOne.classList.remove('flip-animation-back');
    colOne.classList.add('flip-animation');
    document.getElementById('col-1-p').innerText = 'Email: John Doe\n Phone: 555-555\n Facebook: @example123\n Website: example.com';
    document.getElementById('flip').textContent = 'Flip'
  } else {
    console.log('back')
    clicked = 1;
    colOne.classList.remove('flip-animation');
    colOne.classList.add('flip-animation-back');
    document.getElementById('pfp').style.display = 'flex';
    document.getElementById('col-1-p').innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';
    document.getElementById('flip').textContent = 'Contact';
  }
});

document.getElementById('flip2').addEventListener('click', function() {
  clicked++;
  if (clicked === 2){
    console.log('front')
    colTwo.classList.remove('flip-animation-back');
    colTwo.classList.add('flip-animation');
    document.getElementById('col-2-p').innerText = 'Email: John Doe\n Phone: 555-555\n Facebook: @example123\n Website: example.com';
    document.getElementById('flip2').textContent = 'Flip'
  } else {
    console.log('back')
    clicked = 1;
    colTwo.classList.remove('flip-animation');
    colTwo.classList.add('flip-animation-back');
    document.getElementById('pfp').style.display = 'flex'
    document.getElementById('col-2-p').innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';
    document.getElementById('flip2').textContent = 'Contact';
  }
});

document.getElementById('flip3').addEventListener('click', function() {
  clicked++;
  if (clicked === 2){
    console.log('front')
    colThree.classList.remove('flip-animation-back');
    colThree.classList.add('flip-animation');
    document.getElementById('col-3-p').innerText = 'Email: John Doe\n Phone: 555-555\n Facebook: @example123\n Website: example.com';
    document.getElementById('flip3').textContent = 'Flip'
  } else {
    console.log('back')
    clicked = 1;
    colThree.classList.remove('flip-animation');
    colThree.classList.add('flip-animation-back');
    document.getElementById('pfp').style.display = 'flex'
    document.getElementById('col-3-p').innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';
    document.getElementById('flip3').textContent = 'Contact';
  }
});
