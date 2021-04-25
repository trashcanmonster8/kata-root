import { strictEqual } from 'assert';
import { Parser } from '../src/parser';

describe(Parser.name, () => {
    it('registers a driver', () => {
        strictEqual(new Parser(['Driver Dan']).drivers.length, 1);
    });
    it('registers a trip', () => {
        strictEqual(new Parser(['Trip Dan 07:15 07:45 17.3']).trips.length, 1);
    });
    it('takes in a list of commands', () => {
        const parser: Parser = new Parser(['Driver Dan', 'Trip 1:11 2:01 15']);
        strictEqual(parser.trips.length, 1);
        strictEqual(parser.drivers.length, 1);
    });
});
