export const addObserver = () => {
  const callback = (entries,ob) => {
    console.log(mainContent);
    if (entries[0].intersectionRatio > 0.85) {
      socialMediaLinks.style.bottom = '0px';
      socialMediaLinks.style.opacity = '0.9';
      mainContent.style.opacity = '0.5';
    } else {
      socialMediaLinks.style.bottom = '-100px';
      socialMediaLinks.style.opacity = '0';
      mainContent.style.opacity = '1';
    }
  }
  const socialMediaLinks = document.querySelector('.social-media-links-container');
  const mainContent = document.querySelector('.main-content');

  const baseLine = document.querySelector('.base-line')
  const observer = new IntersectionObserver(callback,{
    root: null,
    rootMargin: '0px',
    threshold: [0.8,0.9]
  })

  observer.observe(baseLine);
}
