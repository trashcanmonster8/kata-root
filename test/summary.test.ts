import { strictEqual } from 'assert';
import { Driver } from '../src/driver';
import { Summary } from '../src/summary';
import { Trip } from '../src/trip';

describe(Summary.name, () => {
    const driver: Driver = new Driver('fred');
    describe('#averageSpeed', () => {
        it('single trip', () => {
            const trips: Trip[] = [new Trip(driver, '12:01', '13:16', 42.0)];
            const summary: Summary = new Summary(driver, trips);
            strictEqual(summary.averageSpeed, 34);
        });
        it('two trips', () => {
            const trips: Trip[] = [new Trip(driver, '06:12', '06:32', 21.8), new Trip(driver, '07:15', '07:45', 17.3)];
            const summary: Summary = new Summary(driver, trips);
            strictEqual(summary.averageSpeed, 47);
        });
    });
    describe('#totalDistance', () => {
        it('single trip', () => {
            const trips: Trip[] = [new Trip(driver, '12:01', '13:16', 42.0)];
            const summary: Summary = new Summary(driver, trips);
            strictEqual(summary.totalDistance, 42);
        });
        it('two trips', () => {
            const trips: Trip[] = [new Trip(driver, '06:12', '06:32', 21.8), new Trip(driver, '07:15', '07:45', 17.3)];
            const summary: Summary = new Summary(driver, trips);
            strictEqual(summary.totalDistance, 39);
        });
    });
});
