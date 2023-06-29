const projects = document.querySelector('.projects')
const slides = Array.from(projects.children)
const moveSize = slides[0].getBoundingClientRect().width;
const nextButton = document.querySelector('.button--right')
const prevButton = document.querySelector('.button--left')
const dotsNav= document.querySelector('.dot-holder')
const dots= Array.from(dotsNav.children)

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

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide-dot')
    targetDot.classList.add('current-slide-dot')
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0 ) {
        prevButton.classList.add('is-hidden')
        nextButton.classList.remove('is-hidden')
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden')
        nextButton.classList.add('is-hidden')
    } else {
        prevButton.classList.remove('is-hidden')
        nextButton.classList.remove('is-hidden')
    }
}
nextButton.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = document.querySelector('.current-slide-dot')
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    moveToSlide(projects, currentSlide, nextSlide)
    updateDots(currentDot, nextDot)
    hideShowArrows(slides, prevButton, nextButton, nextIndex)
})

//move on prev click
prevButton.addEventListener('click', e => {
    const currentSlide = document.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = document.querySelector('.current-slide-dot')
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    moveToSlide(projects, currentSlide, prevSlide)
    updateDots(currentDot,prevDot)
    hideShowArrows(slides, prevButton, nextButton, prevIndex)
})

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = document.querySelector('.current-slide')
    const currentDot = document.querySelector('.current-slide-dot')
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex]

    moveToSlide(projects, currentSlide, targetSlide)
    updateDots(currentDot,targetDot)
    hideShowArrows(slides, prevButton, nextButton, targetIndex)
})