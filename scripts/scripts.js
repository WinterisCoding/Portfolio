const portfolioApp = {};

portfolioApp.form = document.querySelector('.contactForm');

portfolioApp.submitForm = () => {
  portfolioApp.form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Its Working');
  })
}

portfolioApp.init = () => {
  portfolioApp.submitForm();
}

portfolioApp.init()