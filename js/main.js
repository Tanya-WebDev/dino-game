const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

let score = 0;
let levelNumber = document.getElementById('levelNumber');

const gameOver = document.getElementById('gameOver');
const victory = document.getElementById('victory');

const reloadBtn = document.getElementById('reloadBtn');

function dinoJump() {

     if (dino.classList != 'animateDino') {
         dino.classList.add('animateDino');
     }

     let audioJump = document.createElement('audio');
     audioJump.setAttribute("autoplay", "true");
     audioJump.innerHTML = "<source src=\"audio/jump.wav\" type=\"audio/wav\">";
     document.body.appendChild(audioJump);

     setTimeout(function () {
         dino.classList.remove('animateDino');
     }, 2000);

}

setInterval(function () {

    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft <= 14 && cactusLeft >= 0) {

        score++;

        document.getElementById('score').innerHTML = Math.floor(score / 10);
        var userScore = document.getElementById('score').innerHTML;

    }

    if (userScore == 3) {

        cactus.classList.remove('animateCactus');
        cactus.classList.add('animateCactus2Level');

        levelNumber.innerHTML = 2;

    }

    if (userScore == 6) {

        cactus.classList.remove('animateCactus2Level');
        cactus.classList.add('animateCactus3Level');

        levelNumber.innerHTML = 3;

    }

    if (userScore == 10) {

        cactus.style.animation = "none";

        victory.style.display = "block";
        reloadBtn.style.display = "block";

        let audioVictory = document.createElement('audio');
        audioVictory.setAttribute("autoplay", "true");
        audioVictory.innerHTML = "<source src=\"audio/victory.wav\" type=\"audio/wav\">";
        document.body.appendChild(audioVictory);

    }

    if (cactusLeft < 45 && cactusLeft > 0 && dinoTop >= 51) {

        cactus.style.animation = "none";

        gameOver.style.display = "block";

        reloadBtn.style.display = "block";

        let audioGameOver = document.createElement('audio');
        audioGameOver.setAttribute("autoplay", "true");
        audioGameOver.innerHTML = "<source src=\"audio/game-over.wav\" type=\"audio/wav\">"
        document.body.appendChild(audioGameOver);

    }

},10);