(function($){
    'use strict';
// code start

/* =-=-=-=-=-=-=-=-
    mobile-menu
=-=-=-=-=-=-=-=-=-=*/
$('.mobile-menu-icon').on('click',function(){
    $('.mobile-menu').slideToggle();
});

$('.fa-times').on('click',function(){
    $('.mobile-menu').slideToggle();
});


/* =-=-=-=-=-=-=-=-
   veerRecentWork
=-=-=-=-=-=-=-=-=-=*/
$('.veerRecentWork-buttons button').on('click',function(){
    $('.veerRecentWork-buttons button').removeClass('active');
    $(this).addClass('active');
});






/* =-=-=-=-=-=-=-=-
    wow js
=-=-=-=-=-=-=-=-=-=*/
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated ', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();


/* =-=-=-=-=-=-=-=-
    isotope
=-=-=-=-=-=-=-=-=-=*/
$(document).ready(function ($) {
    setTimeout(function(){ 
              // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    var $grid = $('.grid').isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-item'
      }
    });
         }, 1000);
    });

/* =-=-=-=-=-=-=-=-
    owl carousel
=-=-=-=-=-=-=-=-=-=*/
$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel();
 
});
$(".owl-carousel").owlCarousel({
 
  //Basic Speeds
  slideSpeed : 200,
  paginationSpeed : 800,

  //Autoplay
  autoPlay : true,
  goToFirst : true,
  goToFirstSpeed : 500,

  // Navigation
  navigation : true,
  navigationText : ['<span><i class="fa-solid fa-angle-left"></i></span>','<span><i class="fa-solid fa-angle-right"></i></span>'],
  pagination : true,
  paginationNumbers: true,

  // Responsive
  responsive: true,
  items : 3,
  itemsDesktop : [1199,3],
  itemsDesktopSmall : [980,2],
  itemsTablet: [768,1],
  itemsMobile : [479,1]
});







}) (jQuery);


// venobox js
new VenoBox();




var time = 10;

setInterval( function() {
  var loader = document.getElementById('loader');

  time -= 1;
  if(time<0){
    loader.style.display = 'none';

    return;
  }
  console.log(time)
}, 1000);

    