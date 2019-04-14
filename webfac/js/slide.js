/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //revenir à la premeire apres avoir atteint la derniére
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) { //le temps que la premiere image est la les autres sont invisibles (pour ne pas qu'ils apparaissent en meme temps)
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}*/
/*le probléme c que l'image avait un temps de  fade qui etait petit au temps du geste du user pour appuyer sur le btn et changer l'image*/
/*puis avec l'automatique l'image aussi disparaissait vite car le temps de son apparition<temps du changement 
c pk j'ai augmenté son temps d'apparition dans .fade*/ 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}