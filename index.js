
let recognition = new webkitSpeechRecognition();

function onResult(event) {
    const transcript = event.results[0][0].transcript;
    const targetWord = transcript.split(' ')[0];
    document.body.style.backgroundColor = targetWord;
}

function onClick() {
    recognition.onresult = onResult;
    recognition.start();
}

// function stopRecognition() {
//     recognition.stop();
// }