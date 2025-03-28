# Currency Converter & Calculator

This is a simple app that lets you do basic math calculations and convert currencies using live exchange rates.

## Features

- **Simple Calculator**: Do basic math like addition, subtraction, multiplication, and division.
- **Currency Converter**: Convert amounts from one currency to another using up-to-date exchange rates.
- **History**: Keep track of your calculations and see past results. You can also delete old ones.

## How It Works

### 1. **Calculator (appendToDisplay)**

- When you press a button on the calculator, the number or symbol shows up on the screen.
- If you press `AC`, it clears everything.
- If you press `C`, it removes the last character.
- If you press `=`, it calculates the result of the expression you’ve entered (like `2 + 3`), shows the result, and saves it in the history list.

### 2. **Adding History (addToHistory)**

- After you press `=`, the calculation gets saved in the history section.
- The history shows the math expression and the result.
- Each history item also has a `Delete` button, so you can remove old calculations if you want.

### 3. **Deleting from History (deleteFromHistory)**

- If you press `Delete` next to a history item, it gets removed from both the screen and the memory.

### 4. **Currency Conversion (convertCurrency)**

- You can convert money from one currency to another. Just type an amount, pick the currency you have (like USD), and pick the currency you want to convert to (like EUR).
- The app will grab the current exchange rates from the internet and give you the converted amount.
- If something goes wrong (like an invalid amount or a problem with the internet connection), it will show an error message.

### 5. **How It Handles API Requests**

- The app uses the **ExchangeRate-API** to get the live exchange rates for currencies. 
- Every time you convert money, it sends a request to get the latest rates.

## How to Use It

1. **For Calculator**:
   - Type in numbers and math symbols to create a math expression.
   - Press `=` to calculate the result.
   - Press `AC` to clear everything.
   - Press `C` to delete the last character.
   - All your calculations will show up below, and you can delete any of them when you want.

2. **For Currency Conversion**:
   - Type how much money you want to convert.
   - Pick the currency you're converting from and the one you're converting to.
   - Press the "Convert" button, and it will show you the converted amount.
   - If the exchange rate isn't available or there's a mistake, it will tell you.

## Example Use

1. Type `2 + 3` in the calculator.
2. Press `=`, and you'll get `5` as the result.
3. That calculation will be saved in the history.
4. To convert 100 USD to EUR, type `100` in the "Amount" field, choose `USD` as the "From" currency, and `EUR` as the "To" currency.
5. Press "Convert," and it will show you the result (like `100 USD = 85 EUR`).

## Notes

- The app uses the **ExchangeRate-API** for getting live currency rates. If the internet isn’t working or the API has an issue, it will show an error.
- The calculator uses a basic method to evaluate math expressions, so be careful with complicated inputs.
- You can easily add more currencies or update how it works if needed!





