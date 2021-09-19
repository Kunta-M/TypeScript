class User {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greeting (): string{
        return `Hello. My name is ${this.name}`;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get age(): number {
        return this._age;
    }
    set age(value: number) {
        if(value > 0) {
            this._age = value;
        }
    }
}

function foo(a:User){

}

let user = new User('vasya', 33)
foo(user)

// class User {
//     name: string;
//     age: number;
//     greeting (): string{
//         return `Hello. My name is ${this.name}`;
//     }
// }
//
// function foo (a: User) {
// }
//
// let user = new User();
// user.name = 'vasya';
// user.age = 33;
// foo(user);
// // foo({name:'petro', age:24})
//
interface IUser {
    name: string;
    age: number;
    greeting?(a: string): string;
}

function bar (b: IUser) {
}

bar({name: 'Mary', age: 33, greeting: (a: string): string => {
    return 'Hello'
    }
})

class X implements IUser {
    ownXProp1: string;
    ownXProp2: number;
    age: number;
    name: string;
}

let x = new X();
let iUsers:IUser[] = [
    x,
    {name: 'Mary', age: 33, greeting: (a: string): string => {return 'Hello'}}
]

bar(new X());

