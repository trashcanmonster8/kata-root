import { Driver } from './driver';
import { DriverSummary } from './driverSummary';
import { Output } from './output';
import { Trip } from './trip';

export class Summary {
    private summaries: DriverSummary[] = [];

    public calculate(): Output[] {
        const result: Output[] = [];
        this.summaries.forEach((summary: DriverSummary) => {
            result.push(summary.summarize());
        });
        return result;
    }

    public addDriver(driver: Driver): void {
        this.summaries.push(new DriverSummary(driver, []));
    }

    public addTrip(trip: Trip): void {
        this.summaries[0].addTrip(trip);
    }
}
