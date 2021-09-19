// import {Post} from "./Post";
//
// let post1: Post = {}

interface IGeo {
    lat: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: IAddress;
    company: ICompany;
}

let user: IUser = {
    id: 1,
    name: 'Leanne Graham',
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    address: {street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874",
        geo: {lat: "-37.3159", lng: "81.1496"}},
    company: {name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness"}
}