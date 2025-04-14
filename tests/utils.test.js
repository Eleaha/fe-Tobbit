import { expect, test, describe } from 'vitest';
import { timestampToDate } from '../utils';

describe('timestampToDate', () => {
	test('function returns a string', () => {
		expect(typeof timestampToDate('2020-11-22T11:13:00.000Z')).toBe('string');
	});
	test('function returns date correctly formatted', () => {
		expect(timestampToDate('2020-11-22T11:13:00.000Z')).toBe(
			'Sun Nov 22 2020 11:13'
		);
        expect(timestampToDate('2020-09-16T17:26:00.000Z')).toBe(
					'Wed Sep 16 2020 18:26'
				);
	});
});
