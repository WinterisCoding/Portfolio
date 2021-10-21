const portfolioApp = {};

portfolioApp.form = document.querySelector('.contactForm');
portfolioApp.projectImage = document.querySelectorAll('.projectImage')
portfolioApp.closeButton = document.querySelectorAll('.fa-times')
portfolioApp.closeMenu = document.querySelector('.menuClose')
portfolioApp.openMenu = document.getElementById('menu_label')

portfolioApp.menuButton = () => {
  portfolioApp.openMenu.addEventListener('click', () => {
    console.log('its wirjk')
  })
  portfolioApp.closeMenu.addEventListener('click', () => {
    document.getElementById('menu_checkbox').checked = false;
  })
}

portfolioApp.showInfo = () => {
  for (let i =0; i < portfolioApp.projectImage.length; i++){
    portfolioApp.projectImage[i].addEventListener('click', function(event){
      const project = event.target.parentNode;
      const overlay = project.childNodes[1];
      overlay.classList.add('active');
    });
  }
}

portfolioApp.closeInfo = () => {
  for (let i = 0; i < portfolioApp.closeButton.length; i++){
    portfolioApp.closeButton[i].addEventListener('click', function(event){
      const project = event.target.parentNode;
      project.classList.remove('active');
    });
  }
}

portfolioApp.init = () => {
  portfolioApp.showInfo();
  portfolioApp.closeInfo();
  portfolioApp.menuButton();
  AOS.init();
}

portfolioApp.init()