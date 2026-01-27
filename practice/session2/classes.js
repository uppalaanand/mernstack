//To create a class
class Person {
    //props(properties)
    pid;
    #age;    // # -> treats as a private in JS
    static name = "and";    // static -> keyword is used to declare static variables
    //to declare constructor
    constructor(pid, age) {
        this.pid = pid;
        this.#age = age; 
    }
    //methods
    getPersonData() {
        console.log(this.pid, this.age);
    }
}

//To create an object to Person class
let p1 = new Person(20, 30);
p1.getPersonData();

