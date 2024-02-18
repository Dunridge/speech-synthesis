let recognition = new webkitSpeechRecognition();

function onControlBGResult(event) {
    const transcript = event.results[0][0].transcript;
    const targetWord = transcript.split(" ")[0];
    document.body.style.backgroundColor = targetWord;
}

function onControlBGClick() {
    recognition.onresult = onControlBGResult;
    recognition.start();
}

// ---

function onMoveDivResult(event) {
    const transcript = event.results[0][0].transcript;
    const targetWord = transcript.split(" ")[0];
    const targetDiv = document.getElementsByClassName("target-div")[0];


    const moveDict = {
        right: 100,
        left: -100,
        top: -100,
        down: 100,
    };
    debugger;
    if (targetWord === "right" || targetWord === "left") {
        const currentLeft = parseInt(targetDiv.style.left) || 0;
        const newLeft = currentLeft + moveDict[targetWord];
        targetDiv.style.left = newLeft + "px";
        debugger;
    }

    if (targetWord === "top" || targetWord === "down") {
        const currentTop = parseInt(targetDiv.style.top) || 0;
        const newTop = currentTop + moveDict[targetWord];
        targetDiv.style.top = newTop + "px";
        debugger;
    }
}

function onMoveDivClick() {
    recognition.onresult = onMoveDivResult;
    recognition.start();
}
