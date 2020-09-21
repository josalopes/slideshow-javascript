let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;


// Aqui para ocupar toda a largura da tela
// document.querySelector('.slider--width').style.width = 
//   `calc(100vw * ${totalSlides})`;

// Usado para tamanho fixo
let sliderWidth = document.querySelector('.slider').clientWidth;

// Aqui para tamanho fixo
document.querySelector('.slider--width').style.width = 
`${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width =
`${sliderWidth}px`;
// Fim do tamanho fixo

document.querySelector('.slider--controls').style.height = 
  `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  updateMargin();
}

function goNext() {
  currentSlide++;
  
  if (currentSlide > (totalSlides - 1)) {
    currentSlide = 0;
  }

  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth;

  // let newMargin = currentSlide * document.body.clientWidth;
  let newMargin = currentSlide * sliderItemWidth;
  document.querySelector('.slider--width').style.marginLeft = 
    `-${newMargin}px`;
}

// setInterval(goNext, 4000);
