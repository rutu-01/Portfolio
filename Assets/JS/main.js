
/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween:24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
});

/*=============== Contact-Submit ===============*/
function fun(){
  
  var myText = "Message Sent! Thank You For Contacting...!";
    alert (myText);

};