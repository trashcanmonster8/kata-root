import { deepStrictEqual } from 'assert';
import { Driver } from '../src/driver';
import { Summary } from '../src/summary';

describe(Summary.name, () => {
    let summary: Summary;
    beforeEach(() => {
        summary = new Summary();
    });
    describe('no data', () => {
        it('#calculate', () => {
            deepStrictEqual(summary.calculate(), []);
        });
    });
    describe('one driver', () => {
        it('#calculate', () => {
            summary.addDriver(new Driver('Lauren'));
            deepStrictEqual(summary.calculate(), [
                {
                    driver: 'Lauren',
                    totalDistance: 0,
                    averageSpeed: 0,
                },
            ]);
        });
    });
});
