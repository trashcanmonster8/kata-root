import { strictEqual } from 'assert';
import { Driver } from '../src/driver';
import { Trip } from '../src/trip';

describe(Trip.name, () => {
    const mileage = 12.3;
    const driver: Driver = new Driver('frank');
    let trip: Trip;
    before(() => {
        trip = new Trip(driver, mileage);
    });
    it('#mileage', () => {
        strictEqual(trip.mileage, mileage);
    });
    it('#driver', () => {
        strictEqual(trip.driver, driver.name);
    });
});
