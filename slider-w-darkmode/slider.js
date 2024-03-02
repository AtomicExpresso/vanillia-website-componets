const toggleDarkMode = () => {

  const checkbox = document.querySelector('input[type="checkbox"]');
  const body = document.body;

  if (checkbox.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }

}
