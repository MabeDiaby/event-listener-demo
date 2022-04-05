/*
 * DOTS: Level One
 *
 */

const firstDot = document.querySelector("span");
let score = document.getElementsByClassName("js-score");
let background = document.querySelector(".level-arena")
const winner = document.getElementsByClassName('level-winner');
let pointColor = document.getElementsByClassName("dot");
var counter = 0;

background.addEventListener('click', () =>{
    counter -= 10
    score[0].innerHTML = counter
})
firstDot.addEventListener('click', () => {
        counter += 20;
        score[0].innerHTML = counter;
    if (counter > 100){
        document.querySelector(".level-winner").style.display = "block"
        document.querySelector(".level-winner").style.opacity = "100%"
    }
})