import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/nav-responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  menu: document.querySelector('#menu'),
  nav: document.querySelector('#list__menu '),
  content: document.querySelector('.latest '),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

console.log('Hello Coders! :)');
