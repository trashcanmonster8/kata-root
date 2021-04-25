import { strictEqual, deepStrictEqual } from 'assert';
import { Driver } from '../src/driver';
import { DriverSummary } from '../src/driverSummary';
import { Trip } from '../src/trip';

describe(DriverSummary.name, () => {
    const driver: Driver = new Driver('fred');
    it('#driverName', () => {
        strictEqual(new DriverSummary(new Driver('tom'), []).driver, 'Tom');
    });
    describe('#averageSpeed', () => {
        it('no travel', () => {
            const summary: DriverSummary = new DriverSummary(new Driver('whatever'), []);
            strictEqual(summary.averageSpeed, 0);
        });
        it('single trip', () => {
            const trips: Trip[] = [new Trip(driver, '12:01', '13:16', 42.0)];
            const summary: DriverSummary = new DriverSummary(driver, trips);
            strictEqual(summary.averageSpeed, 34);
        });
        it('two trips', () => {
            const trips: Trip[] = [new Trip(driver, '06:12', '06:32', 21.8), new Trip(driver, '07:15', '07:45', 17.3)];
            const summary: DriverSummary = new DriverSummary(driver, trips);
            strictEqual(summary.averageSpeed, 47);
        });
    });
    describe('#totalDistance', () => {
        it('single trip', () => {
            const trips: Trip[] = [new Trip(driver, '12:01', '13:16', 42.0)];
            const summary: DriverSummary = new DriverSummary(driver, trips);
            strictEqual(summary.totalDistance, 42);
        });
        it('two trips', () => {
            const trips: Trip[] = [new Trip(driver, '06:12', '06:32', 21.8), new Trip(driver, '07:15', '07:45', 17.3)];
            const summary: DriverSummary = new DriverSummary(driver, trips);
            strictEqual(summary.totalDistance, 39);
        });
    });
    it('#addTrip', () => {
        const trips: Trip[] = [new Trip(driver, '06:12', '06:32', 21.8)];
        const summary: DriverSummary = new DriverSummary(driver, trips);
        summary.addTrip(new Trip(driver, '07:15', '07:45', 17.3));
        strictEqual(summary.totalDistance, 39);
    });
    describe('#summarize', () => {
        const trips: Trip[] = [new Trip(driver, '06:12', '06:32', 21.8), new Trip(driver, '07:15', '07:45', 17.3)];
        const summary: DriverSummary = new DriverSummary(driver, trips);
        it('outputs all data', () => {
            deepStrictEqual(summary.summarize(), {
                driver: 'Fred',
                totalDistance: 39,
                averageSpeed: 47,
            });
        });
        it('discards trips under 5 mph', () => {
            summary.addTrip(new Trip(driver, '6:00', '7:00', 4));
            deepStrictEqual(summary.summarize(), {
                driver: 'Fred',
                totalDistance: 39,
                averageSpeed: 47,
            });
        });
        it('discards trips over 100 mph', () => {
            summary.addTrip(new Trip(driver, '6:00', '7:00', 104));
            deepStrictEqual(summary.summarize(), {
                driver: 'Fred',
                totalDistance: 39,
                averageSpeed: 47,
            });
        });
    });
});
