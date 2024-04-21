const body = document.body;
const box = document.querySelector('.box')
const fileInput = document.querySelector('#fileInput')
const imageContainer = document.querySelector('#imageContainer')
const buttons = document.querySelectorAll('.buttons i')
const buttonContainer = document.querySelector('.buttons')

body.addEventListener('dragenter', handleDragEnter);
body.addEventListener('dragleave', handleDragLeave);
body.addEventListener('dragover', handleDragOver);
body.addEventListener('drop', handleDrop);

box.addEventListener('click', function(){
    fileInput.click()
})

fileInput.addEventListener('change', fileInputChange)

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.classList.contains('bi-zoom-in')){
            zoomIn()
        } else if(button.classList.contains('bi-zoom-out')){
            zoomOut()
        } else if(button.classList.contains('bi-arrow-counterclockwise')){
            rotateLeft()
        } else if(button.classList.contains('bi-arrow-clockwise')){
            rotateRight()
        } else if(button.classList.contains('bi-trash-fill')){
            refresh()
        }
    })
})

function handleDragEnter(e) {
    e.preventDefault();
    body.classList.add('dragOver');
}

function handleDragLeave(e) {
    e.preventDefault();
    body.classList.remove('dragOver');
}

function handleDragOver(e) {
    e.preventDefault();
    body.classList.add('dragOver');
}

function handleDrop(e) {
    e.preventDefault();
    body.classList.remove('dragOver');

    const file = e.dataTransfer.files[0]

    if(file){
        const reader = new FileReader()
        reader.onload = function(e){
            const imageURL = e.target.result
            imageContainer.innerHTML = `<img width="100%" height="100%" src="${imageURL}" alt="">`
            imageContainer.classList.remove('d-none')
            buttonContainer.classList.remove('d-none')
            box.classList.add('d-none')
        }
        reader.readAsDataURL(file)
    }
}

function fileInputChange(e){
    const file = e.target.files[0]
    if(file){
        const reader = new FileReader()
        reader.onload = function(e){
            const imageURL = e.target.result
            imageContainer.innerHTML = `<img width="100%" height="100%" src="${imageURL}" alt="">`
            imageContainer.classList.remove('d-none')
            buttonContainer.classList.remove('d-none')
            box.classList.add('d-none')
        }
        reader.readAsDataURL(file)
    }
}

let currentRotation = 0
let currentScale = 1

function zoomIn(){
    currentScale += 0.1
    applyTransform()
}

function zoomOut(){
    currentScale -= 0.1
    applyTransform()

}

function rotateLeft(){
    currentRotation -= 15
    applyTransform()
}

function rotateRight(){
    currentRotation += 15
    applyTransform()
}

function refresh(){
    location.reload()
}

function applyTransform(){
    const image = document.querySelector('#imageContainer img')
    image.style.transform = `rotate(${currentRotation}deg) scale(${currentScale}) `
}