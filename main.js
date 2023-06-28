const projects = document.querySelector('.projects')
const slides = Array.from(projects.children)
const moveSize = slides[0].getBoundingClientRect().width;
const nextButton = document.querySelector('.button--right')
const prevButton = document.querySelector('.button--left')

//set slide position
const setSlidePositions = (slide, index) => {
    slide.style.left = moveSize * index + 'px';
}
slides.forEach(setSlidePositions)

//move on next click
const moveToSlide = (projects, currentSlide, targetSlide) => {
    projects.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
nextButton.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(projects, currentSlide, nextSlide)
})

//move on prev click
prevButton.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(projects, currentSlide, prevSlide)
})