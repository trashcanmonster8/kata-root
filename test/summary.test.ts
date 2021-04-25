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
        const drivers: Driver[] = [new Driver('Lauren'), new Driver('Kumi')];
        beforeEach(() => {
            drivers.forEach((driver: Driver) => summary.addDriver(driver));
        });
        it('#calculate adds a driver', () => {
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
        it('#calcuate one trip', () => {
            summary.addTrip(new Trip(drivers[0], '12:01', '13:16', 42.0));
            deepStrictEqual(summary.calculate(), [
                {
                    driver: drivers[0].name,
                    totalDistance: 42,
                    averageSpeed: 34,
                },
                {
                    driver: drivers[1].name,
                    totalDistance: 0,
                    averageSpeed: 0,
                },
            ]);
        });
        it('#calculate multiple trips and sorts by total distance', () => {
            const newDriver: Driver = new Driver('dan');
            summary.addDriver(newDriver);
            summary.addTrip(new Trip(newDriver, '07:15', '07:45', 17.3));
            summary.addTrip(new Trip(newDriver, '06:12', '06:32', 21.8));
            summary.addTrip(new Trip(drivers[0], '12:01', '13:16', 42.0));
            deepStrictEqual(summary.calculate(), [
                {
                    driver: drivers[0].name,
                    totalDistance: 42,
                    averageSpeed: 34,
                },
                {
                    driver: newDriver.name,
                    totalDistance: 39,
                    averageSpeed: 47,
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
