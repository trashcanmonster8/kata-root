import { Driver } from './driver';

export class Trip {
    constructor(private driveValue: Driver, private mileageValue: number) {}

    get mileage(): number {
        return this.mileageValue;
    }

    get driver(): string {
        return this.driveValue.name;
    }
}
