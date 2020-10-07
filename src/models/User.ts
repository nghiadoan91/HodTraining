export class User {
    id: number = 0;
    name: string = "";
    nationality: string = "";
    age: number = 0;
    weight: number | null = 0;

    constructor(id: number = 0, name: string = "", nationality: string = "", age: number = 0, weight: number | null = null) {
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.weight = weight;
    }

    nextYearAge(): number {
        return this.age + 1;
    }
}