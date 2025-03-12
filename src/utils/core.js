import { romanLookUp } from './constants.js';

// sort object into descending order
const getDescendingOrder = Object.keys(romanLookUp).sort((a, b) => b - a);

// create a function to convert the number to a roman numeral
export const romanNumeralGenerator = (num) => {
	//  validate
	if (num < 1 || num > 3999 || typeof num !== 'number') {
		console.log('Invalid number');
		return;
	}
	let result = '';
	// iterate through the sorted array
	for (let i = 0; i < getDescendingOrder.length; i++) {
		const currentValue = getDescendingOrder[i];
		const romanNumeral = romanLookUp[currentValue];

		// add the symbol to the result and subtract the value from number
		while (num >= currentValue) {
			result += romanNumeral;
			num -= currentValue;
		}
	}
	return result;
};

romanNumeralGenerator(1640);
