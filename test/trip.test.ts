import { strictEqual } from "assert";
import { Driver } from "../src/driver";
import { Trip } from "../src/trip";

describe(Trip.name, () => {
    it("has mileage", () => {
        const driver: Driver = new Driver("name");
        const startTime: Date = new Date();
        const endTime: Date = new Date();
        const mileage: number = 12.3;
        const trip: Trip = new Trip(mileage);
        strictEqual(trip.mileage, mileage);
    });
});