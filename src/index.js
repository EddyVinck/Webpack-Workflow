import _ from 'lodash';
import '../css/main.scss';
import { keyValue as externalVariable } from './external.js';
import * as fullimport from './fullexport.js'; // fullimport is imported as an object
import { Helper } from './helper.js';

let log = console.log;
log(externalVariable); // imported from the external file
log(fullimport.introduceMe(fullimport.myName));

let component = () => {
    var element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());

let fn = () => {
    const list = ['banana', 'apple', 'orange'];
    let ul = document.getElementById("basket");
    let li = document.createElement("li");

    li.appendChild(document.createTextNode("Test 1"));
    ul.appendChild(li);
};

// fn();

let addFruitToBasket = () => {
    const fruits = ['banana', 'apple', 'orange'];
    let ul = document.getElementById("basket");

    for (let [index, fruit] of fruits.entries()) {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(`${index + 1}. ${fruit}`));
      ul.appendChild(li);
    }
};

addFruitToBasket();

let numbers = [0, 1, 2, 3, 4, 5];
let [a, b, c, ...d] = numbers;

// swapping variables easily
let ten = 10;
let twenty = 20;
[ten, twenty] = [twenty, ten];
log(ten);

// creating variables fast with destructuring
let [x, y] = ["x", "y"];
log(x, y);

// basic class
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        log(`Hello! My name is ${this.name}`);
    }
}
let person = new Person("Barrie");
log(Person);
log(person);
person.greet();

class TalentedPerson extends Person {
    constructor(name, age = 18){
        super(name); // takes the constructor from the class that this class extends
        this._age = age;
    }
    get age(){
        return this._age*2;
    }
    set age(newAge){
        newAge >= 0 ? this._age = newAge : console.log(`${this.name} Can't have an age of ${newAge}`);
    }
    tellAge() {
        log(`I am ${this.age}`);
    };
    greet(){
         log(`Hello! My name is ${this.name} and I am ${this.age}`);
    }
    greetTwice(){
        super.greet(); // takes parent class' function
        this.greet(); // takes this class' function
    }
}

let Eddy = new TalentedPerson("Eddy", 21);
Eddy.greetTwice();
Eddy.tellAge();
console.log(Eddy.age);
Eddy.age = 22;
Eddy.age = -5;

// Helper is not an object, it is a class.
// Making a static method allows usage without instantiating an object derived
// from a class.
Helper.logTwice("Hello webserver!");


