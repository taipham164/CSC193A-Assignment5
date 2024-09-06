// JavaScript code for handling events

// Function to make text bigger
function makeTextBigger() {
    var textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

// Function to handle text styles based on radio button selection
function handleRadioButtonChange() {
    var textArea = document.getElementById("textArea");
    var fancy = document.getElementById("fancy");
    var boring = document.getElementById("boring");

    // Show alert when radio button changes
    alert(`Radio button changed: ${fancy.checked ? 'FancyShmancy' : boring.checked ? 'BoringBetty' : ''}`);

    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boring.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to convert text to uppercase and add "-Moo"
function mooText() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    var sentences = text.split(". ");
    
    sentences = sentences.map(sentence => {
        if (sentence.trim()) {
            return sentence.toUpperCase() + "-Moo";
        }
        return sentence;
    });

    textArea.value = sentences.join(". ");
}

// Event listeners
document.getElementById("biggerButton").onclick = makeTextBigger;
document.getElementById("fancy").onchange = handleRadioButtonChange;
document.getElementById("boring").onchange = handleRadioButtonChange;
document.getElementById("mooButton").onclick = mooText;
