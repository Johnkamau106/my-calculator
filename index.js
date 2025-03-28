let history = [];


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
    historyItem.appendChild(createEditButton());
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
function createEditButton() {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        const li = this.parentElement;
        const expression = li.getAttribute('data-expression');
        const result = li.getAttribute('data-result');
        
        editHistoryItem(li, expression, result);
    };
    return editButton;
}

function editHistoryItem(li, expression, result) {
    // Prompt the user to edit the expression and result
    const newExpression = prompt('Edit the expression:', expression);
    const newResult = prompt('Edit the result:', result);

    if (newExpression && newResult) {
        // Update the history item and the display
        li.textContent = `${newExpression} = ${newResult}`;
        li.setAttribute('data-expression', newExpression);
        li.setAttribute('data-result', newResult);

        // Re-add the buttons
        li.appendChild(createDeleteButton());
        li.appendChild(createEditButton());

        
        history = history.map(item => 
            item.expression === expression && item.result === result
                ? { expression: newExpression, result: newResult }
                : item
        );
    }
}

function deleteFromHistory(expression, result) {
    // Update the history array to remove the item
    history = history.filter(item => item.expression !== expression || item.result !== result);
}



function addToHistory(expression, result) {
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.textContent = `${expression} = ${result}`;
    historyItem.setAttribute('data-expression', expression);
    historyItem.setAttribute('data-result', result);
    historyItem.appendChild(createDeleteButton());
    historyItem.appendChild(createEditButton()); // Add Edit button to the history item
    historyList.appendChild(historyItem);
    history.push({ expression, result });
}





async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const resultElement = document.getElementById('conversion-result');

    // Validate the input amount
    if (isNaN(amount) || amount <= 0) {
        resultElement.innerHTML = 'Please enter a valid amount.';
        return;
    }

    try {
        // Fetch exchange rates from the JSON file
        const response = await fetch('https://johnkamau106.github.io/calculator-api/currencies.json');
        const data = await response.json();

        // Check if the selected currencies exist in the data
        if (data[fromCurrency] && data[fromCurrency][toCurrency]) {
            const fromRate = 1; // Base rate for the "from" currency
            const toRate = data[fromCurrency][toCurrency]; // Get the specific conversion rate

            // Calculate the converted amount by multiplying the amount by the conversion rate.
            const convertedAmount = (amount * toRate / fromRate).toFixed(2);
            resultElement.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else { //handles the case where the conversion rate is not available for the selected currencies.
            resultElement.innerHTML = 'Conversion rate not available for selected currencies.';
        }
    } catch (error) {
        //If the rates are not available, it shows an error message saying "Conversion rate not available."
        resultElement.innerHTML = 'Error fetching exchange rates. Please check your connection.';
        console.error('Error:', error);
    }
}