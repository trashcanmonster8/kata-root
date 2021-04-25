import { strictEqual } from 'assert';
import { Parser } from '../src/parser';

describe(Parser.name, () => {
    it('registers drivers', () => {
        strictEqual(new Parser('Driver Dan').drivers.length, 1);
    });
    it('registers trips', () => {
        strictEqual(new Parser('Trip Dan 07:15 07:45 17.3').trips.length, 1);
    });
});
