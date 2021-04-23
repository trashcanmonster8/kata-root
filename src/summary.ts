import { Driver } from './driver';
import { Trip } from './trip';

export class Summary {
    constructor(private driver: Driver, private trips: Trip[]) {}

    get averageSpeed(): number {
        let totalMiles = 0;
        let totalTime = 0;
        this.trips.forEach((trip: Trip) => {
            totalMiles += trip.mileage;
            totalTime += trip.duration;
        });
        return totalMiles / totalTime;
    }
}
