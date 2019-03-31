import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Welcome to my page", "Full Stack Developer"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };


// const loadDynamicProgramText = () => {
//   new Typed('#banner-typed-text', {
//     strings: ["Skills", "Full Stack Developer"],
//     typeSpeed: 50,
//     loop: true
//   });
// }

// export { loadDynamicProgramText };
