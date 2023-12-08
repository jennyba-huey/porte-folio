const menu = document.querySelector('.menu');
const menuButton = document.getElementById('menu-button'); // Remplacez 'menu-button' par l'ID de votre bouton/menu

menuButton.addEventListener('click', () => {
  menu.classList.toggle('open');
});

const slide = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    slide.forEach(item => {
        item.style.display = 'none';
    });

    // Faire appraitre et bloquer l'image?
    slide[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slide.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    showSlide(currentIndex);
}

// Première Image pour l'ouverture du Site
showSlide(currentIndex);
document.querySelector('.nextBtn').addEventListener('click', nextSlide);
document.querySelector('.prevBtn').addEventListener('click', previousSlide);
// Auto slide change example (uncomment to enable)
// setInterval(nextSlide, 3000);


// Auto slide change example (uncomment to enable)
// setInterval(nextSlide, 3000);

