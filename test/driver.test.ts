import { Driver } from '../src/driver';
import { strictEqual } from 'assert';

describe(Driver.name, () => {
    it('#name', () => {
        const driver = new Driver('test');
        strictEqual(driver.name, 'Test');
    });
    it('#parse', () => {
        const name = 'phil';
        const driver: Driver = new Driver(name);
        const parseDriver: Driver = Driver.parse('Driver ' + name);
        strictEqual(driver.name, parseDriver.name);
    });
});
