(function() {
    function makeSlideshow(slides) {
        const delay = parseInt(slides.dataset.delay)
        const transition = parseInt(slides.dataset.transition)

        // const slides = document.getElementById(slidesId)
        const slidesInner = slides.querySelector('.slides-inner')
        const images = slidesInner.querySelectorAll('img')

        const nextButton = slides.querySelector('.ms-next-button')
        const prevButton = slides.querySelector('.ms-prev-button')

        if (nextButton !== null) {
            nextButton.addEventListener('click', function(e) {
                e.preventDefault()
                nextSlide()
            })
        }

        if (prevButton !== null) {
            prevButton.addEventListener('click', function(e) {
                e.preventDefault()
                 prevSlide()
            })
        }

        // set up indicators
        const indicatorContainer = slides.querySelector('.ms-slide-indicators')
        if (indicatorContainer !== null) {
            for (let i = 0; i < images.length; i += 1) {
                const li = document.createElement('li') // <li></li>
                indicatorContainer.appendChild(li)
            }
        }

        slidesInner.style.transition = `${transition}ms`


        function nextSlide() {
            index += 1
            if(index === images.length) {
                index = 0
            }
            showSlide()
        }

        function prevSlide() {
            index -= 1
            if(index < 0) {
                index = images.length - 1
            }
            showSlide()
        }

        function showSlide() {
            slidesInner.style.transform = `translate3d(${index * -slidesWidth}px, 0, 0)`
        }

    } //end makeSlideshow

    const slideshows = document.querySelectorAll('.ms-slideshow')
    for(let i=0; i < slideshows.length; i += 1) {
        makeSlideshow(slideshows[i]);
    }
})()
