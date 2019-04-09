// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
      var bannerHeight  = $('.carousel').height();     
      $(window).on('scroll', {
              previousTop: 0
          },
          function() {
              var currentTop = $(window).scrollTop(),
                  $catalog = $('.side-catalog');
                  $about_author = $('.short-about');

              //check if user is scrolling up by mouse or keyborad
              this.previousTop = currentTop;

              //adjust the appearance of side-catalog
              $catalog.show()
              if (currentTop > (bannerHeight + 41)) {
                  $catalog.addClass('fixed')
              } else {
                  $catalog.removeClass('fixed')
              }
              $about_author.show()
              if (currentTop > (bannerHeight + 61)) {
                  $about_author.addClass('fixed')
              } else {
                  $about_author.removeClass('fixed')
              }
              
          });
  }
});