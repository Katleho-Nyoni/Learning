interface Constact {
    ID: number;
    name: string;
    email: string;
    birthDate?: Date;
}

let contact1: Constact = {
    ID: 1,
    name: "John Doe",
    email: "johndoe@email.com"
}