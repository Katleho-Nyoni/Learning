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

interface Gender {
    Sex: boolean;
    Chromosomes: LastPair;
}

type LastPair = "XX" | "XY"; // or = string