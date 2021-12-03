const toggleButton = document.getElementById('button-menu');
const navWrapper = document.getElementById('nav');
var WrapperRemove = 0;


toggleButton.addEventListener('click',() => {
  navWrapper.classList.toggle('show');
  if (WrapperRemove == 1 ) {
    navWrapper.remove();
  }
});

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close');
  WrapperRemove = 1;
});

navWrapper.addEventListener('click',e => {
    if(e.target.id === 'nav') {
      navWrapper.classList.remove('show');
      toggleButton.classList.remove('close');
    }
});
