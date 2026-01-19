interface Contact {
    ID: number;
    name: string;
    email: string;
    birthDate?: Date;
}

interface Employee extends Contact {
    position: string;
    salary: number;
}

let contact1: Contact = {
    ID: 1,
    name: "John Doe",
    email: "johndoe@email.com"
}

enum PhysicalAttributes {
    breasts = "boobs",
    maleGenital = "D",
    femaleGenital = "P"
}

interface Gender {
    Sex: boolean;
    Chromosomes: LastPair;
    proof: PhysicalAttributes.breasts;
}

type LastPair = "XX" | "XY"; // or = stringIndexed