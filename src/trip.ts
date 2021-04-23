import { Driver } from './driver';

export class Trip {
    private startTime: number;
    private endTime: number;
    constructor(
        private driveValue: Driver,
        startTimeValue: string,
        endTimeValue: string,
        private mileageValue: number,
    ) {
        this.startTime = this.parseTimetoMinutes(startTimeValue);
        this.endTime = this.parseTimetoMinutes(endTimeValue);
    }

    get mileage(): number {
        return this.mileageValue;
    }

    get driver(): string {
        return this.driveValue.name;
    }

    get duration(): number {
        return (this.endTime - this.startTime) / 60;
    }

    private parseTimetoMinutes(time: string): number {
        const timeComponents = time.split(':');
        const hourComponents = parseInt(timeComponents[0]);
        const minuteComponents = parseInt(timeComponents[1]);
        return hourComponents * 60 + minuteComponents;
    }
}
