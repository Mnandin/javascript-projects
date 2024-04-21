let slideIndex = 1
let slideInterval;

function pagination(n) {
    clearInterval(slideInterval)
    showSlides(slideIndex = n)
}

$(".pagination div").on('click', function(){
    pagination($(this).index() + 1)
})

function showSlides(n) {
    let slides = $(".slide")
    let dots = $(".paginationLine")

    if(n > slides.length){ slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for( let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }

    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].classList.add('active')

    slideInterval = setInterval(function () {
        nextSlides(1)
    }, 4000)
}

function nextSlides(n){
    clearInterval(slideInterval)
    showSlides(slideIndex += n)
}

$(document).on('DOMContentLoaded', () => {

    showSlides(slideIndex);

    $('#slideshow-container').on('mouseenter', function(){
        clearInterval(slideInterval)
    })

    $('#slideshow-container').on('mouseleave', function(){
        slideInterval = setInterval(function () {
            nextSlides(1)
        }, 4000)
    })

    $("#leftBtn").on('click', () => leftBtn(1))
    $("#rightBtn").on('click', () => rightBtn(1))


    function leftBtn(n) {
        clearInterval(slideInterval)
        showSlides(slideIndex -= n)
    }

    function rightBtn(n) {
        clearInterval(slideInterval)
        showSlides(slideIndex += n)
    }

})