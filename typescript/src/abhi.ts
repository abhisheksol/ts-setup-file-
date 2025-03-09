console.log("hello world");
// array

let arr: number[]

function data(data: (string | number)[]) {
    return data
}


// console.log(data(["sd", 2]));


const enum day {
    sunday ="holiday",
    monday =1,
    tuesday,
    wednesday, 
    thursday,
    friday,
    saturday
}


console.log(day.friday);


// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"
// newUser.push(true) // This will not throw a TypeScript error but can break tuple behavior