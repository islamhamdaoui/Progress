let currentSlide = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slider .slide').length;

    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 400}px)`;

    const buttons = document.querySelectorAll('.buttons button');
    const indicator = document.querySelector('.button-indicator');
    const selectedButton = buttons[index];
    const buttonPosition = selectedButton.offsetLeft;

    indicator.style.transform = `translateX(${buttonPosition}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const indicator = document.createElement('div');
    indicator.classList.add('button-indicator');
    document.querySelector('.buttons').appendChild(indicator);

    const firstButton = document.querySelector('.buttons button');
    indicator.style.transform = `translateX(${firstButton.offsetLeft}px)`;

    const flipCard = document.getElementById('flipCard');
    flipCard.addEventListener('click', () => {
        flipCard.classList.toggle('flip');
    });
});
