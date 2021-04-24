import { Driver } from './driver';
import { Output } from './output';
import { Trip } from './trip';

export class DriverSummary implements Output {
    constructor(private driverObj: Driver, private trips: Trip[]) {}

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

    get driver(): string {
        return this.driverObj.name;
    }

    public addTrip(trip: Trip): void {
        this.trips.push(trip);
    }

    public summarize(): Output {
        return {
            driver: this.driver,
            totalDistance: this.totalDistance,
            averageSpeed: this.averageSpeed,
        };
    }
}
