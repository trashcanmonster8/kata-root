import { strictEqual } from 'assert';
import { Driver } from '../src/driver';
import { Trip } from '../src/trip';

describe(Trip.name, () => {
    const mileage = 12.3;
    const driver = 'frank';
    let trip: Trip;
    before(() => {
        trip = new Trip(new Driver(driver), mileage);
    });
    it('#mileage', () => {
        strictEqual(trip.mileage, mileage);
    });
    it('#driver', () => {
        strictEqual(trip.driver, driver);
    });
});
