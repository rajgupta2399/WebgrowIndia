
new Swiper("#swiper-2", {
  direction: 'horizontal',
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  slidesPerView: 1,
  centeredSlides: true,
  reverse: false, 
  spaceBetween: 10,
  lazyLoading: true,
  slidesPerView: 1.5,
  loop: true,
  keyboard: {
      enabled: true,
  },
});


// webgrow work swiper

new Swiper("#swiper-3", {
  direction: 'horizontal',
  autoplay: {
      delay: 10000,
      disableOnInteraction: false,
  },
  slidesPerView: 1,
  centeredSlides: false,
  reverse: false, 
  spaceBetween: 20,
  lazyLoading: true,
  reverse:true,
  // slidesPerView: 2,

  loop: true,
  keyboard: {
      enabled: true,
  },
  breakpoints: {
    500:{
      slidesPerView: 1
    },
    768:{
      slidesPerView:1
    },
    1024:{
      slidesPerView:2
    },
    1440:{
      slidesPerView:2
    },
    2560:{
      slidesPerView:3
    },
  }
});



// review banner 
new Swiper("#swiper-1", {
  direction: 'horizontal',
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  centeredSlides: false,
  spaceBetween: 10,
  lazyLoading: true,
  // slidesPerView: 4,
  loop: true,
  keyboard: {
      enabled: true,
  },
  breakpoints: {
    425:{
      slidesPerView: 2

    },
    768: {
        slidesPerView: 3
    },
    1400: {
        slidesPerView: 4
    }
}
});



// testimonial

const swiper = new Swiper(".mySwiper",{
  slidesPerView:3,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  spaceBetween:30,
  loop:true,
  pagination:{
    el:".swiper-pagination",
    clickable:true,
  },
  breakpoints:{
    320:{
      slidesPerView:1,
    },
    400:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3,
    },
    1440:{
      slidesPerView:3,
    },
    2560:{
      slidesPerView:4,
    }

  },
})


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});