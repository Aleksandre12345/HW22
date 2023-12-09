const burgerline = document.getElementById('burger')
const wholeburger = document.querySelector('.burgermenu1')
const xcklick = document.querySelector('.x')


burgerline.addEventListener('click' , function(){
    wholeburger.classList.toggle('active')
    wholeburger.classList.remove('active1')
})

xcklick.addEventListener('click' , function(){
    wholeburger.classList.toggle('active1')
    wholeburger.classList.remove('active')
})

// arrow java

const Maintxt = document.querySelectorAll('.greytxt')
const boxes = document.querySelectorAll('.greybox')
const arrow = document.querySelectorAll('.arrowimg')


for(let i = 0; i < Maintxt.length; i++){
    arrow[i].addEventListener('click',() =>{
        boxes[i].classList.toggle('act')
        arrow[i].classList.toggle('turn')
        for(let j = 0; j < Maintxt.length; j++){
            if(j !== i){
                boxes[j].classList.remove('act')
            }
        }
    })
}