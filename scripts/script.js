(function($) {
  'use strict';

  var divId;
  $('.nav-link, .navbar-brand').click(function() {
    divId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(divId).offset().top - 135
    }, 100);
  });

  $('#navMenu').click(function() {
    $('.navbar-collapse').collapse('hide');
  })
})(jQuery);

// Scrolling behavior without jQuery
// 
// const navButtons = document.getElementsByClassName('nav-link');
// const l = navButtons.length;
// const navMenu = document.getElementById('navMenu')

// for(let i = 0; i < l; i++) {
//   const navItem = navButtons.item(i);
//   const id = navItem.hash.replace('#', '');
//   const newPosition = document
//     .getElementById(id)
//     .getBoundingClientRect()
//     .top - 135;

//   navItem.addEventListener('click', (e) => {
//     e.preventDefault()
//     window.scroll({ top: newPosition, behavior: 'smooth' })

//     navMenu.classList.toggle('show')
//   })
// }