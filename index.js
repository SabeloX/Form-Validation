const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('c-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkForm();
});

const checkForm = () => {
  const passwordValue = password.value.trim();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if(usernameValue === ''){
    setError(username, 'Please enter a username');
  }
  else{
    setSuccess(username);
  }

  if(emailValue === ''){
    setError(email, 'Please enter your email address');
  }
  else if(!isEmail(emailValue)){
    setError(email, 'Enter a valid email format');
  }
  else{
    setSuccess(email);
  }

  if(passwordValue === ''){
    setError(password, 'Please choose a password');
  }
  else if(passwordValue !== '' && confirmPasswordValue ==''){
    setError(password, 'Confirm your password');
  }
  else{
    setSuccess(password);
  }

  if(confirmPasswordValue === ''){
    setError(confirmPassword, 'Confirm your password');
  }
  else if(!passwordMatch(passwordValue, confirmPasswordValue)){
    setError(confirmPassword, 'Passwords do not match!');
    setError(password, 'Passwords do not match!');
  }
  else{
    setSuccess(confirmPassword);
  }
}

const setError = (field, message) => {
  const formControl = field.parentElement;
  const small = formControl.querySelector('small');

  small.innerHTML = message;
  formControl.className = 'form-control error';
}

const setSuccess = (field) => {
  const formControl = field.parentElement;
  const small = formControl.querySelector('small');

  small.innerHTML = '';
  formControl.className = 'form-control success';
}

const isEmail = (emailValue) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);
}

const passwordMatch = (passwordValue, confirmPasswordValue) => {
  return passwordValue === confirmPasswordValue
}
