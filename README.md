# Roman Numeral Converter App

This is a simple React app that converts numbers into Roman numerals. Users can input a number, and the app will display the corresponding Roman numeral in real-time.

## Table of Contents

1. [Features](#features)
2. [How to Run the App](#how-to-run-the-app)
3. [How to Test the App](#how-to-test-the-app)
4. [Logic Behind the App](#logic-behind-the-app)
5. [Dependencies](#dependencies)

## Features

- Converts numbers between 1 and 3999 into Roman numerals.
- Validates user input to ensure only valid numbers are processed.
- Displays error messages for invalid inputs (e.g., letters, symbols, or numbers outside the valid range).
- Built with **React** and **Joy-UI (MUI)** for a clean and responsive user interface.

## How to Run the App

### Prerequisites

- Node.js
- npm

### Steps

1. **Clone the Repository**:

   ```
   git clone https://github.com/your-username/roman-numeral-converter.git
   cd roman-numeral-converter
   npm run dev
   ```

2. **Install dependencies**:

```
npm install
```

3. **Run the App**:

```
npm start
```

This should start the development server, and you can access the app at `http://localhost:5173`.

4. **Use the App**:

- Enter a number between 1 and 3999 in the input field.
- The corresponding Roman numeral will be displayed below.

## How to Test the App

### Run Unit Tests

This app uses **Vitest** for unit testing. To run the tests, use the following command:

```
npm test
```

### Test Cases

The following test cases are covered:

#### Valid Inputs

- `1` → `"I"`

- `5` → `"V"`

- `10` → `"X"`

- `50` → `"L"`

- `100` → `"C"`

- `500` → `"D"`

- `1000` → `"M"`

- `3999` → `"MMMCMXCIX"`

#### Invalid Inputs

- `0` → Error message: `"Number must be between 1 and 3999"`

- `4000` → Error message: `"Number must be between 1 and 3999"`

- `-1` → Error message: `"Number must be between 1 and 3999"`

- `"abc"` → Error message: `"No letters - No symbols ...Just numbers!"`

## Logic Behind the App

### Roman Numeral Conversion

The app uses a lookup table (`romanLookUp`) to map numbers to their corresponding Roman numeral symbols. The logic is as follows:

1.  **Lookup Table**:

    ```
    const romanLookUp = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
    };
    ```

2.  **Conversion Algorithm**:

    - The input number is validated to ensure it is between 1 and 3999.

    - The app iterates through the lookup table in descending order.

    - For each value in the table, it subtracts the value from the input number and appends the corresponding Roman numeral symbol to the result until the number is reduced to 0.

### Input Validation

- The app ensures that the input is a valid number between 1 and 3999.

- If the input is invalid (e.g., letters, symbols, or numbers outside the range), an error message is displayed.

## Dependencies

This app uses the following dependencies:

- **React**: A JavaScript library for building user interfaces.

- **Joy-UI (MUI)**: A popular React UI framework for styling and components.

- **Vitest**: A testing framework for unit tests.
