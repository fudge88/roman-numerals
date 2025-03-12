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

// sort object into descending order
const getDescendingOrder = Object.keys(romanLookUp).sort((a, b) => b - a);

// create a function to convert the number to a roman numeral
export const romanNumeralGenerator = (num) => {
	//  validate the number to be between 1 - 3999 and to be a number type
	if (num < 1 || num > 3999 || typeof num !== 'number') {
		console.log('Invalid number');
		return;
	}

	console.log('Sorted values:', getDescendingOrder);

	// convert the number to a roman numeral
	const result = romanLookUp[num];
	console.log('Converted roman numeral:', result);

	return result;
};

romanNumeralGenerator(10);
