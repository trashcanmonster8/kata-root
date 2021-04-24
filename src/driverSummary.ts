import { Driver } from './driver';
import { Trip } from './trip';

export class DriverSummary {
    constructor(private driver: Driver, private trips: Trip[]) {}

    get averageSpeed(): number {
        let totalMiles = 0;
        let totalTime = 0;
        this.trips.forEach((trip: Trip) => {
            totalMiles += trip.mileage;
            totalTime += trip.duration;
        });
        return Math.round(totalMiles / totalTime);
    }

    get totalDistance(): number {
        let totalMiles = 0;
        this.trips.forEach((trip: Trip) => {
            totalMiles += trip.mileage;
        });
        return Math.round(totalMiles);
    }

    get driverName(): string {
        return this.driver.name;
    }

    public addTrip(trip: Trip): void {
        this.trips.push(trip);
    }
}
