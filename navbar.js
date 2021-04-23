/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

window.onload = function(e){
  var mainNav = document.getElementsByClassName('hidden_menu');
  var navBarToggle = document.getElementById('toggle');

  navBarToggle.addEventListener('click', function () {
    
    for (i = 0; i < mainNav.length; i++) {
      mainNav[i].classList.toggle('active');
  }
    });

}