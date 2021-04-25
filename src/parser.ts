import { Driver } from './driver';
import { Trip } from './trip';

export class Parser {
    public readonly drivers: Driver[] = [];
    public readonly trips: Trip[] = [];
    constructor(command: string) {
        if (command.split(' ')[0].startsWith('Driver')) {
            this.drivers.push(Driver.parse(command));
        } else if (command.split(' ')[0].startsWith('Trip')) {
            this.trips.push(Trip.parse(command));
        }
    }
}
