const portfolioApp = {};

portfolioApp.form = document.querySelector('.contactForm');
portfolioApp.projectImage = document.querySelectorAll('.projectImage')

portfolioApp.submitForm = () => {
  portfolioApp.form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Its Working');
  })
}

portfolioApp.showInfo = () => {
  for (let i =0; i < portfolioApp.projectImage.length; i++){
    portfolioApp.projectImage[i].addEventListener('click', function(event){
      console.log(event.target)
    })
  }
  ;
}

portfolioApp.init = () => {
  portfolioApp.submitForm();
  portfolioApp.showInfo();
}

portfolioApp.init()