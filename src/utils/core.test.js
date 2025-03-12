import { describe, it, expect } from 'vitest';
import { romanNumeralGenerator } from './core';

describe('romanNumeralGenerator', () => {
	it('should convert 1 to I', () => {
		expect(romanNumeralGenerator(1)).toBe('I');
	});

	it('should convert 4 to IV', () => {
		expect(romanNumeralGenerator(4)).toBe('IV');
	});

	it('should convert 5 to V', () => {
		expect(romanNumeralGenerator(5)).toBe('V');
	});

	it('should convert 9 to IX', () => {
		expect(romanNumeralGenerator(9)).toBe('IX');
	});

	it('should convert 10 to X', () => {
		expect(romanNumeralGenerator(10)).toBe('X');
	});

	it('should convert 40 to XL', () => {
		expect(romanNumeralGenerator(40)).toBe('XL');
	});

	it('should convert 90 to XC', () => {
		expect(romanNumeralGenerator(90)).toBe('XC');
	});

	it('should convert 100 to C', () => {
		expect(romanNumeralGenerator(100)).toBe('C');
	});

	it('should convert 400 to CD', () => {
		expect(romanNumeralGenerator(400)).toBe('CD');
	});

	it('should convert 500 to D', () => {
		expect(romanNumeralGenerator(500)).toBe('D');
	});

	it('should convert 900 to CM', () => {
		expect(romanNumeralGenerator(900)).toBe('CM');
	});

	it('should convert 1000 to M', () => {
		expect(romanNumeralGenerator(1000)).toBe('M');
	});

	it('should return undefined for 0', () => {
		expect(romanNumeralGenerator(0)).toBeUndefined;
	});

	it('should return undefined for -1', () => {
		expect(romanNumeralGenerator(-1)).toBeUndefined;
	});

	it('should return undefined for 4000', () => {
		expect(romanNumeralGenerator(4000)).toBeUndefined;
	});

	it('should return undefined for NaN', () => {
		expect(romanNumeralGenerator('123')).toBeUndefined;
	});

	it('should return undefined for a string', () => {
		expect(romanNumeralGenerator('ABC')).toBeUndefined;
	});
});
