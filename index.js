    function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === 'AC') {
        display.value = '';
    } else if (value === 'C') {
        display.value = display.value.slice(0, -1);
    } else if (value === '=') {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}




