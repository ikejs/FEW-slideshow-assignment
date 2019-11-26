(function() {
    function makeSlideshow(slides) {
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
        const indicators = []
        if (indicatorContainer !== null) {
            for (let i = 0; i < images.length; i += 1) {
                const li = document.createElement('li') // <li></li>
                indicatorContainer.appendChild(li)
                indicators.push(li)
            }
            indicators[0].style.backgroundColor = 'rgba(255,255,255,1.0)'
        }

        // set up timer
        const delay = parseInt(slides.dataset.delay)
        const transition = parseInt(slides.dataset.transition)
        slidesInner.style.transition = `${transition}ms`

        const slidesWidth = slides.clientWidth

        let index = 0

        let interval = setInterval(nextSlide, delay)


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
            indicators.forEach(function(el, i) {
                if(i === index) {
                    el.style.backgroundColor = 'rgba(255,255,255,1.0)'
                } else {
                    el.style.backgroundColor = 'rgba(255,255,255,0.5)'
                }
            })
        }

    } //end makeSlideshow

    const slideshows = document.querySelectorAll('.ms-slideshow')
    for(let i=0; i < slideshows.length; i += 1) {
        makeSlideshow(slideshows[i]);
    }
})()



// indicators.forEach(function(el, i) {
//     if (i === index) {
//         el.style.backgroundColor = 'rgba(255,255,255,1.0)'
//     } else {
//         el.style.backgroundColor = 'rgba(255,255,255,0.5)'
//     }
// })
