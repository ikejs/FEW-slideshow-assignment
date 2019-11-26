(function() {
    function makeSlideshow(slides) {
        // const slides = document.getElementById(slidesId)
        const slidesInner = slides.querySelector('.slides-inner') // block scope: makeSlideshow()
        const images = slidesInner.querySelectorAll('img') // block scope: makeSlideshow()

        const delay = parseInt(slides.dataset.delay) // block scope: makeSlideshow()
        const transition = parseInt(slides.dataset.transition) // block scope: makeSlideshow()
        slidesInner.style.transition = `${transition}ms`


        const slidesWidth = slides.clientWidth // block scope: makeSlideshow()
        let index = 0 // block scope: makeSlideshow()

        setInterval(function() {
            index += 1 // block scope: function()
            if(index === images.length) {
                index = 0 // block scope: function()
            }

            slidesInner.style.transform = `translate3d(${index * -slidesWidth}px, 0, 0)`

        }, delay)
    } //end makeSlideshow

    const slideshows = document.querySelectorAll('.ms-slideshow') // block scope:  (function() { }))
    for(let i=0; i < slideshows.length; i += 1) {
        makeSlideshow(slideshows[i]);
    }
})()