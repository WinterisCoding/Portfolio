const portfolioApp = {};

portfolioApp.form = document.querySelector('.contactForm');
portfolioApp.projectImage = document.querySelectorAll('.projectImage')
portfolioApp.closeButton = document.querySelectorAll('.fa-times')

portfolioApp.submitForm = () => {
  portfolioApp.form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Its Working');
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
  portfolioApp.submitForm();
  portfolioApp.showInfo();
  portfolioApp.closeInfo();
}

portfolioApp.init()