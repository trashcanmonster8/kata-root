import { Driver } from '../src/driver';
import { strictEqual } from 'assert';

describe(Driver.name, () => {
    it('#name', () => {
        const driver = new Driver('test');
        strictEqual(driver.name, 'test');
    });
});
