class Client <T> {
    id: T;
    login: string;
}

let client1: Client<number> = {id: 1234, login: 'abcd'};
let client2: Client<string> = {id: '1234af', login:'efg'}