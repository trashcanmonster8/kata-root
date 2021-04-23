import { strictEqual } from 'assert';
import { Driver } from '../src/driver';
import { Summary } from '../src/summary';
import { Trip } from '../src/trip';

describe(Summary.name, () => {
    it('#averageSpeed', () => {
        const driver: Driver = new Driver('fred');
        const trips: Trip[] = [new Trip(driver, '1:00', '2:00', 50), new Trip(driver, '2:15', '2:45', 40)];
        const summary: Summary = new Summary(driver, trips);
        strictEqual(summary.averageSpeed, 60);
    });
});
