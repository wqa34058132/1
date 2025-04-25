function checkPassword() {
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');
  if (password === '我愛李芯潔') {
    window.location.href = 'https://wqa34058132.github.io/14/';
  } else {
    error.style.display = 'block';
  }
}

document.getElementById('password').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkPassword();
  }
});
