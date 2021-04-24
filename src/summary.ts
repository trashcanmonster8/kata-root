import { Driver } from './driver';
import { Output } from './output';

export class Summary {
    private drivers: Driver[] = [];

    public calculate(): Output[] {
        const result: Output[] = [];
        this.drivers.forEach((driver: Driver) => {
            result.push({
                driver: driver.name,
                totalDistance: 0,
                averageSpeed: 0,
            });
        });
        return result;
    }

    public addDriver(driver: Driver): void {
        this.drivers.push(driver);
    }
}
