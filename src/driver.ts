export class Driver {
    constructor(private nameValue: string) {}

    get name(): string {
        return this.nameValue;
    }
}
