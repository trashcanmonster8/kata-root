import { deepStrictEqual } from 'assert';
import { Driver } from '../src/driver';
import { Summary } from '../src/summary';
import { Trip } from '../src/trip';

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
            summary.addDriver(new Driver('Kumi'));
            deepStrictEqual(summary.calculate(), [
                {
                    driver: 'Kumi',
                    totalDistance: 0,
                    averageSpeed: 0,
                },
            ]);
        });
        it('#calculates a trip', () => {
            const driver: Driver = new Driver('Lauren');
            summary.addDriver(driver);
            summary.addTrip(new Trip(driver, '12:01', '13:16', 42.0));
            deepStrictEqual(summary.calculate(), [
                {
                    driver: 'Lauren',
                    totalDistance: 42,
                    averageSpeed: 34,
                },
            ]);
        });
    });
    describe('multiple drivers', () => {
        it('#calculate adds a driver', () => {
            const drivers: Driver[] = [new Driver('Lauren'), new Driver('Kumi')];
            drivers.forEach((driver: Driver) => summary.addDriver(driver));
            deepStrictEqual(summary.calculate(), [
                {
                    driver: drivers[0].name,
                    totalDistance: 0,
                    averageSpeed: 0,
                },
                {
                    driver: drivers[1].name,
                    totalDistance: 0,
                    averageSpeed: 0,
                },
            ]);
        });
    });
});
