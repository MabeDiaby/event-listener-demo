/*
 * DOTS: Level Three
 *
 */
const threeDots = document.querySelectorAll("span");
let score = document.getElementsByClassName("score js-score"); 
var counter = 0;
let background = document.querySelector(".level-arena");
background.addEventListener('click', () => {
    counter -= 10;
    score[0].innerHTML = counter;
})
threeDots.forEach(dots => {
    dots.addEventListener('click',() => {
        if(background){
            counter += 20;
            score[0].innerHTML = counter; 
            if(counter > 100){
                document.querySelector(".level-winner").style.display = "block"
                document.querySelector(".level-winner").style.opacity = "100%"
            }
        }
    })
})
