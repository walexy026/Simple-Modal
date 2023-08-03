'use strict';
// declared the variables
let openModal = document.querySelectorAll('.open-Modal')
let modal = document.querySelector('.modal')
let btnClose = document.querySelector('.btn-close')
let overlay =document.querySelector('.overlay')
// creating a function for the displayModal
let displayModal = function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
// looping through the array to get each button
for(let i = 0; i < openModal.length; i++){
openModal[i].addEventListener('click', displayModal )
}
// create a function for the hideModal which is reusable
let hideModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnClose.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal)

document.addEventListener('keydown', function(e){
// console.log(e)
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
hideModal()
    // e.key === hideModal()
    // console.log("i pressed it")
})