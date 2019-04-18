import Typed from 'typed.js';

const loadDynamicWelcomeText = () => {
  new Typed('#welcome-typed-text', {
    strings: ["Whatever has driven you to my page", "welcome 👋🏽!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicWelcomeText };
