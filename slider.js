let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  
  // Ocultar todas las imágenes
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Incrementar el índice de la imagen actual
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  
  // Mostrar la imagen actual
  slides[slideIndex - 1].style.display = "block";
  
  // Cambiar la imagen cada 2 segundos
  setTimeout(showSlides, 5000);
}