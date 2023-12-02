
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

window.addEventListener('mousemove', function (e) {
    [1, .9, .8, .5, .1].forEach(function (i) {
        var j = (1 - i) * 50;
        var elem = document.createElement('div');
        var size = Math.ceil(Math.random() * 10 * i) + 'px';
        elem.style.position = 'fixed';
        elem.style.top = e.pageY + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.width = size;
        elem.style.height = size;
        elem.style.background = 'hsla(' +
            Math.round(Math.random() * 360) + ', ' +
            '100%, ' +
            '50%, ' +
            i + ')';
        elem.style.borderRadius = size;
        elem.style.pointerEvents = 'none';
        document.body.appendChild(elem);
        window.setTimeout(function () {
            document.body.removeChild(elem);
        }, Math.round(Math.random() * i * 500));
    });
}, false);

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

function startShakeEffect() {
    const element = document.getElementById('elementToShake');
    element.classList.add('shake');

    // Remove the 'shake' class after the animation ends
    element.addEventListener('animationend', () => {
        element.classList.remove('shake');
    });
}

function reload() {
    startShakeEffect();
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

        document.getElementById('changeTime').innerHTML = ':' + sec;
        sec++;


    }, 1000);


}
