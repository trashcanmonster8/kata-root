import { strictEqual } from 'assert';
import { Driver } from '../src/driver';
import { Trip } from '../src/trip';

describe(Trip.name, () => {
    const mileage = 12.3;
    const driver: Driver = new Driver('frank');
    const startTime = '07:15';
    const endTime = '08:45';
    let trip: Trip;
    before(() => {
        trip = new Trip(driver, startTime, endTime, mileage);
    });
    it('#mileage', () => {
        strictEqual(trip.mileage, mileage);
    });
    it('#driver', () => {
        strictEqual(trip.driver, driver.name);
    });
    it('#duration', () => {
        strictEqual(trip.duration, 1.5);
    });
    it('#parse', () => {
        const data: string[] = ['Trip', driver.name, startTime, endTime, mileage.toString()];
        const trip: Trip = Trip.parse(data.join(' '));
        strictEqual(trip.mileage, mileage);
    });
});
