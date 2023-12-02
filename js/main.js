
let element; let startButton; let text; let buttonSound; let Scoretimer
let score; let sec = 1;
(function (window, document, undefined) {

    // code that should be taken care of right away

    window.onload = init;

    function init() {
        element = document.getElementById('mainTitle');
        startButton = document.getElementById('start');
        text = document.getElementById("tuto");
        buttonSound = document.getElementById('my-audio');
        ambientSound = document.getElementById("ambient-audio");
        score = document.getElementById("score")
    }

})(window, document, undefined);

function playMusic() {
    buttonSound.play();
}
function startGame() {

    if (startButton.textContent === "start") {

        isPlaying = true;
        timer();
        element.style.display = 'none';
        startButton.style.display = 'none';
        ambientSound.play()
    } if (startButton.textContent === "restart") {

        location.reload();
    }

}

function reload() {
    element.style.display = '';
    startButton.style.display = '';
    score.style.display = 'block';
    score.textContent += sec - 1
    element.textContent = "You loose"
    element.setAttribute('data-text', 'Sorry');
    startButton.textContent = "restart"
    clearInterval(Scoretimer)
}
function timer() {


    Scoretimer = setInterval(function () {

        document.getElementById('changeTime').innerHTML = '' + sec;
        sec++;


    }, 1000);


}
