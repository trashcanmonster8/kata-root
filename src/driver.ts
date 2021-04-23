export class Driver {
    public static parse(command: string): Driver {
        const name: string = command.split(' ')[1];
        return new Driver(name);
    }

    private nameValue: string;

    constructor(name: string) {
        this.nameValue = name[0].toUpperCase() + name.substr(1).toLocaleLowerCase();
    }

    get name(): string {
        return this.nameValue;
    }
}
