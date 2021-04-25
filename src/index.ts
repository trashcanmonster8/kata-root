#!/user/bin/env node

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Driver } from './driver';
import { Output } from './output';
import { Parser } from './parser';
import { Summary } from './summary';
import { Trip } from './trip';

const file: string = resolve(process.cwd(), process.argv[2]);
const parser: Parser = new Parser(
    readFileSync(file)
        .toString()
        .split(/\r\n|\n/),
);
const summary: Summary = new Summary();
parser.drivers.forEach((driver: Driver) => summary.addDriver(driver));
parser.trips.forEach((trip: Trip) => summary.addTrip(trip));
summary.calculate().forEach((output: Output) => {
    let printLine = `${output.driver}: ${output.totalDistance} miles`;
    if (output.totalDistance > 0) {
        printLine += ` @ ${output.averageSpeed} mph`;
    }
    console.log(printLine);
});
