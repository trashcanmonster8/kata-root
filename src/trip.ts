export class Trip {
    constructor(private mileageValue: number) {}

    get mileage(): number {
        return this.mileageValue;
    }
}