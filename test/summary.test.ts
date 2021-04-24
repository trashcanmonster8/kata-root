import { deepStrictEqual } from 'assert';
import { Summary } from '../src/summary';

describe(Summary.name, () => {
    describe('no data', () => {
        it('#calculate', () => {
            deepStrictEqual(new Summary().calculate(), []);
        });
    });
});
