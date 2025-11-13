const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');

loginBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if(username === 'admin' && password === '1234'){
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    loginError.textContent = "Invalid username or password. Hint: admin / 1234";
  }
});