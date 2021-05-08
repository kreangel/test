const slider = $(".products").bxSlider({
    pager: false,
    controls: false,
  });
  
  $(".poducts-slider__arrows--direction--prev").click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
  })
  
  $(".poducts-slider__arrows--direction--next").click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
})