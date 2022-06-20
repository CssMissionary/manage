//Carousel Function
const buttonOne = document.querySelector('.btn1');
const buttonTwo = document.querySelector('.btn2');
const buttonThree = document.querySelector('.btn3');
const buttonFour = document.querySelector('.btn4');

const firstPage = document.querySelector('.comment1__container');
const secondPage = document.querySelector('.comment2__container');
const thridPage = document.querySelector('.comment3__container');
const fourthPage = document.querySelector('.comment4__container');


buttonOne.addEventListener('click', () => {
    firstPage.classList.add('open')
    secondPage.classList.remove('open')
    thridPage.classList.remove('open')
    fourthPage.classList.remove('open')

    buttonOne.classList.add('active')
    buttonTwo.classList.remove('active')
    buttonThree.classList.remove('active')
    buttonFour.classList.remove('active')
});
buttonTwo.addEventListener('click', () => {
    firstPage.classList.remove('open')
    firstPage.classList.add('closed')

    secondPage.classList.add('open')
    thridPage.classList.remove('open')
    fourthPage.classList.remove('open')
    
    buttonOne.classList.remove('active')
    buttonTwo.classList.add('active')
    buttonThree.classList.remove('active')
    buttonFour.classList.remove('active')
});
buttonThree.addEventListener('click', () => {
    firstPage.classList.remove('open')
    firstPage.classList.add('closed')

    secondPage.classList.remove('open')
    thridPage.classList.add('open')
    fourthPage.classList.remove('open')

    buttonOne.classList.remove('active')
    buttonTwo.classList.remove('active')
    buttonThree.classList.add('active')
    buttonFour.classList.remove('active')
});
buttonFour.addEventListener('click', () => {
    firstPage.classList.remove('open')
    firstPage.classList.add('closed')

    secondPage.classList.remove('open')
    thridPage.classList.remove('open')
    fourthPage.classList.add('open')

    buttonOne.classList.remove('active')
    buttonTwo.classList.remove('active')
    buttonThree.classList.remove('active')
    buttonFour.classList.add('active')
});

//Modal Function 

const triggerBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.shut');
const modalContainer = document.querySelector('.modal-container');

triggerBtn.addEventListener('click', () =>{
    modalContainer.classList.add('open2');
    triggerBtn.classList.add('closed');
});

closeBtn.addEventListener('click', () => {
    modalContainer.classList.add('closed');
    modalContainer.classList.remove('open2');
    triggerBtn.classList.remove('closed');
});