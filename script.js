/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var slideIndex = 1;
showSlides(slideIndex);    // show first slide

// Next/previous controls
function plusSlides(n) {      // upon +arrow click show next
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {    // shows current slide
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");    // our slides have this class and fade class
  var dots = document.getElementsByClassName("dot");          // dots / link under photos
  if (n > slides.length) {slideIndex = 1}                    // click + = display circles back to start
  if (n < 1) {slideIndex = slides.length}                    // click - =  circles back to end
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";                      // set all photos to be not visible(out of flow)
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";        // note slideIndex of 1 is actually index of 0
  dots[slideIndex-1].className += " active";          // so slideIndex-1 will display current slide
} 
//////////Auto slide show - disabled

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// } 