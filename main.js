// Boolean logic 
let firstame = "Jhon";
let Jhonage = 18;

if(Jhonage > 18) {
    console.log(firstame + " is a man");
} else {
    console.log(firstame + " is a teenager");
};

firstame = "Mark";
let age = 20;

if(age < 13) {
    console.log(firstame + " is a boy");
} else if(age >= 13 && age < 20) {
    console.log(firstame + " is a teenager");
} else if(age >= 20 && age < 30) {
    console.log(firstame + " is a young man");
} else {
    console.log(firstame + " is a man");
};


// The Ternary Operator and switch statments

let name = "Abed";
let AbedAge = 21;

// ternary operator

AbedAge >= 21 ? console.log(name + " drinks beer")
: console.log(name + " drinks juice");

let drink = AbedAge >= 21 ? "beer" : "juice" ;
console.log(drink);

// if (AbedAge >= 21) {
//     console.log(name + " drinks beer");
// } else {
//     console.log(name + " drinks juice")
// };


// switch statment

let job = "teacher";

switch (job) {
    case "teacher":
    case "instractur":
        console.log(name + " techers kids how to code");
        break;
    case "driver":
        console.log(name + " drives an unper in New Jersey");
        break;
    case "designer":
        console.log(name + " designs beautiful website");
        break;
    default:
        console.log( name + " dose somthing else");
};

age = 21;

switch (true) {
    case age < 13:
        console.log(name + " is a boy");
    break;
    case age >= 13 && age < 20:
        console.log(name + " is a teenager");
        break;
    case age >= 20 && age < 30:
        console.log( name + " is a young man");
        break;
        default:
            console.log( name + " is a man");
};


// if(age < 13) {
//     console.log(firstame + " is a boy");
// } else if(age >= 13 && age < 20) {
//     console.log(firstame + " is a teenager");
// } else if(age >= 20 && age < 30) {
//     console.log(firstame + " is a young man");
// } else {
//     console.log(firstame + " is a man");
// }


// ************************
// Truthy and Falsy values and equality operators

// falsy values: undefind, null, 0, "", NaN
// truthy values: not falsy values

let height;
height = 23;

if ( height || height === 0) {
    console.log("variable is defined");
} else {
    console.log("variable has not beed defined");
};


// Equality operators
if ( height == "23") {
    console.log(" the == operators does type coercion!");
};