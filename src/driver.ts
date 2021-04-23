export class Driver {
    private nameValue: string;

    constructor(name: string) {
        this.nameValue = name[0].toUpperCase() + name.substr(1).toLocaleLowerCase();
    }

    get name(): string {
        return this.nameValue;
    }
}
