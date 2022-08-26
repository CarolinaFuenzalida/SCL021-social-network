// import {register} from "../component/register.js";
import { loginEmailPassword, signGoogle } from '../lib/firebase.js';

const login = () => {
  // Crea Div que contiene Titulo mainContainer
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('mainContainer');

  // Crea logo
  const logo = document.createElement('img');
  logo.src = './assets/audifonito-sin-pixelado.png';
  mainContainer.appendChild(logo);

  // Crea parrafo o titulo
  const title = document.createElement('p');
  title.textContent = '/GGgirls';
  mainContainer.appendChild(title);

  // Crea form para ingresar datos de Email y Password
  const formLogin = document.createElement('form');
  formLogin.classList.add('formLogin');
  mainContainer.appendChild(formLogin);

  // Crea ingreso de Email
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('value', '');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'emailLogin');
  inputEmail.setAttribute('placeholder', 'Ingresa tu correo o usuario');
  inputEmail.setAttribute('size', '25');
  inputEmail.setAttribute('maxlength', '40');
  inputEmail.setAttribute('required', '');
  mainContainer.appendChild(inputEmail);

  // Crea ingreso de Password
  const passwordContainer = document.createElement('div');
  passwordContainer.setAttribute('id', 'passwordContainer');
  mainContainer.appendChild(passwordContainer);

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('value', '');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('class', 'password');
  inputPassword.setAttribute('id', 'passwordLogin');
  inputPassword.setAttribute('placeholder', 'Ingresa tu contraseña');
  inputPassword.setAttribute('minlength', '6');
  inputPassword.setAttribute('maxlength', '12');
  inputPassword.setAttribute('required', '');
  // mainContainer.appendChild(inputPassword);

  passwordContainer.appendChild(inputPassword);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  // checkbox.setAttribute('value', 'hola');
  checkbox.setAttribute('id', 'checkbox');
  passwordContainer.appendChild(checkbox);

  // funcion de ocultado
  function showPassword() {
    const x = document.getElementById('passwordLogin');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }
  checkbox.addEventListener('click', showPassword);

  // Botones para Login e inicio de sesión con Google
  const buttonForLogin = document.createElement('button', 'a');
  buttonForLogin.setAttribute('id', 'buttonLogin');
  buttonForLogin.setAttribute('type', 'click');
  buttonForLogin.innerHTML = '<a href="#/posts">Iniciar sesión</a>';
  mainContainer.appendChild(buttonForLogin);

  const buttonForGoogle = document.createElement('button', 'a');
  buttonForGoogle.setAttribute('type', 'button');
  buttonForGoogle.setAttribute('id', 'googleButton');
  buttonForGoogle.innerHTML = '<a href="#/posts">Iniciar sesión con Google</a>';
  mainContainer.appendChild(buttonForGoogle);

  // Olvidaste contraseña
  const forgotPassword = document.createElement('h3');
  forgotPassword.textContent = '¿Olvidaste tu contraseña?';
  mainContainer.appendChild(forgotPassword);

  // Crea Div dentro de Div principal el donde se encuentra link a Register
  const registerContainer = document.createElement('div');
  registerContainer.classList.add('registerContainer');

  mainContainer.appendChild(registerContainer);

  // Crea texto y link que da a pagina de Register
  const pRegister = document.createElement('p');
  pRegister.innerHTML = '¿No tienes una cuenta?';
  registerContainer.appendChild(pRegister);

  const linkRegister = document.createElement('a'); /* id="linkReg" */
  linkRegister.innerHTML = '<a href="#/register">Regístrate</a>';
  linkRegister.setAttribute('id', 'linkRegist');
  registerContainer.appendChild(linkRegister);

  // Funcionalidad de botón para Login con addEventListener
  buttonForLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    // console.log(email, password);
    const alertaLogin = (valid) => {
      if (valid) {
        window.location.hash = '#/posts';
      }
    };
    loginEmailPassword(email, password, alertaLogin);
  });

  buttonForGoogle.addEventListener('click', signGoogle);

  return mainContainer;
};
export { login };
