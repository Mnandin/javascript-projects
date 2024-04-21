let currentRating = 0
let dblClicked = false
let previousRating = 0

$(".rating").on('mouseout', ()=>{
    if(previousRating < 1){
        resetRating()
    } else {
        removeLit(previousRating)
    }
})

$(".rating img").on('mouseover', function(){
    litStar($(this).index() + 1)
})

$(".rating img").on('click', function(){
    rate($(this).index() + 1)
})


$(document).on('dblclick', ()=>{
    resetRating()
    $(".rating").on('mouseout', resetRating)
})

function litStar(star){
    $(".rating img").removeClass('highlight').slice(0, star).addClass('highlight')

    if(star <= 1){
        $('#ratingText').text(`1 star!`)
    } else {
        $("#ratingText").text(`${star} stars!`)
    }

    $(".rating").on('mouseout', ()=>{
        if(previousRating < 1){
            resetRating()
        } 
    })
}

function rate(star) {
    currentRating = star
    previousRating = star
    if(currentRating <= 1){
        $('#ratingText').text(`You've rated 1 star!`)
    } else {
        $("#ratingText").text(`You've rated ${star} stars!`)
    }

    $(".rating").off('mouseout', resetRating)

}

function resetRating() {
        litStar(0)
        $('#ratingText').text(`Rate Me!`)
        previousRating = 0
}

function removeLit(){
        litStar(previousRating)
        rate(previousRating)
}



