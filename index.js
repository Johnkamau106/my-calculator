let history = [];

const exchangeRates = {
    "USD": {
        "EUR": 0.85,
        "GBP": 0.75
    },
    "EUR": {
        "USD": 1.18,
        "GBP": 0.88
    },
    "GBP": {
        "USD": 1.33,
        "EUR": 1.14
    }
};

    
    function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (value === 'AC') {
        display.value = '';
    } else if (value === 'C') {
        display.value = display.value.slice(0, -1);
    } else if (value === '=') {
        try {
            const result = eval(display.value);  
            addToHistory(display.value, result);  
            display.value = result;
        } catch (e) {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}

function addToHistory(expression, result) {
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.textContent = `${expression} = ${result}`;
    historyItem.setAttribute('data-expression', expression);
    historyItem.setAttribute('data-result', result);
    historyItem.appendChild(createDeleteButton());
    historyList.appendChild(historyItem);
    history.push({ expression, result });
}
function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        const li = this.parentElement;
        const expression = li.getAttribute('data-expression');
        const result = li.getAttribute('data-result');
        deleteFromHistory(expression, result);
        li.remove();
    };
    return deleteButton;
}
function deleteFromHistory(expression, result) {
    history = history.filter(item => item.expression !== expression || item.result !== result);
}



function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const resultElement = document.getElementById('conversion-result');

   
    if (isNaN(amount) || amount <= 0) {
        resultElement.innerHTML = 'Please enter a valid amount.';
        return;
    }

    
    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const rate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        resultElement.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        resultElement.innerHTML = 'Conversion rate not available for selected currencies.';
    }
}