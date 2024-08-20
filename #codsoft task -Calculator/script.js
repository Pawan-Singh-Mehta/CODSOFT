function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += character;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Replace any invalid characters with empty strings
        const sanitizedInput = display.value.replace(/[^0-9+\-*/().]/g, '');
        display.value = eval(sanitizedInput);
    } catch (error) {
        display.value = 'Error';
    }
}

// Allow keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ('0123456789+-*/.'.includes(key)) {
        appendCharacter(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
