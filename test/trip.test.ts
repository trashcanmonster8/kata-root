import { strictEqual } from 'assert';
import { Trip } from '../src/trip';

describe(Trip.name, () => {
    it('#mileage', () => {
        const mileage = 12.3;
        const trip: Trip = new Trip(mileage);
        strictEqual(trip.mileage, mileage);
    });
});
