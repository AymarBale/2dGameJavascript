
let element; let startButton; let text
(function (window, document, undefined) {

    // code that should be taken care of right away

    window.onload = init;

    function init() {
        element = document.getElementById('mainTitle');
        startButton = document.getElementById('start');
        text = document.getElementById("tuto");
    }

})(window, document, undefined);

function startGame() {
    if (startButton.textContent === "start") {
        isPlaying = true;
        element.style.display = 'none';
        startButton.style.display = 'none';
    } if (startButton.textContent === "restart") {
        location.reload();
    }

}

function reload() {
    element.style.display = '';
    startButton.style.display = '';
    element.textContent = "You loose"
    element.setAttribute('data-text', 'Sorry');
    startButton.textContent = "restart"
}
