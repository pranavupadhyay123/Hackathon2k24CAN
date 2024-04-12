document.addEventListener("DOMContentLoaded", function () {



  const modeSwitch = document.querySelector('.mode-switch');
  const appContainer = document.querySelector('.app-container');
  modeSwitch.addEventListener('click', function () {
    appContainer.classList.toggle('dark');
  });


  const messagesBtn = document.querySelector('.messages-btn');
  const messagesSection = document.querySelector('.messages-section');
  const messagesCloseBtn = document.querySelector('.messages-close');
  messagesBtn.addEventListener('click', function () {
    messagesSection.classList.toggle('show');
  });
  messagesCloseBtn.addEventListener('click', function () {
    messagesSection.classList.remove('show');
  });




  const svgPaths = document.querySelectorAll('.dust-paarticle path');


  function changeStrokeColor(color) {
    svgPaths.forEach(path => {
      path.setAttribute('stroke', color);
    });
  }


  changeStrokeColor('red');








});
