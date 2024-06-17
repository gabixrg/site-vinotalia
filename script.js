window.onload = function() {
  document.getElementById('age-verification').style.display = 'flex';
  document.getElementById('main-content').style.display = 'none';
};

document.getElementById('yes-button').addEventListener('click', function() {
  document.getElementById('age-verification').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});

document.getElementById('no-button').addEventListener('click', function() {
  alert('Você deve ter mais de 18 anos para acessar este site.');
  window.location.href = 'https://www.google.com'; 
});


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slides img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots");
  
    let currentSlide = 0;
    let slideInterval;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
      updateDots(index);
    }
  
    function updateDots(index) {
      dotsContainer.innerHTML = "";
      slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === index) {
          dot.classList.add("active");
        }
        dotsContainer.appendChild(dot);
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    prevButton.addEventListener("click", function() {
      clearInterval(slideInterval);
      prevSlide();
    });
    nextButton.addEventListener("click", function() {
      clearInterval(slideInterval);
      nextSlide();
    });
  
    showSlide(currentSlide);
  
    slideInterval = setInterval(nextSlide, 7000); 
  });
  
  function increaseQuantity(id) {
    let input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(id) {
    let input = document.getElementById(id);
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

function addToCart(id) {
    let quantity = document.getElementById(id).value;
    if (quantity > 0) {
        alert('Adicionado ao carrinho: ' + id.replace('_', ' ') + ' - Quantidade: ' + quantity);
    } else {
        alert('Por favor, selecione uma quantidade maior que zero.');
    }
}

function abreMenu()
	{
		document.getElementById("menu-lateral").style.width = "60%";
    document.getElementById("menu-lateral").style.height = "50%";
		document.getElementById("corpo").style.marginLeft = "1%";
	}
	
	function fechaMenu()
	{
		document.getElementById("menu-lateral").style.width = "0%";
    document.getElementById("menu-lateral").style.height = "0%";
		document.getElementById("corpo").style.marginLeft= "0%";
	}
