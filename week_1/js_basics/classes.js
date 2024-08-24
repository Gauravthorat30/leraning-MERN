class Animal {
    constructor(name , legs , behaviour){
        this.name = name;
        this.legs = legs;
        this.behaviour = behaviour
    }
    leg(){
        console.log(this.legs);
    }
    static myname(){
        console.log("gaurav")
    }
}

let dog = new Animal("dog" , 4 , "bhow bhow");
let cat = new Animal("cat" , 4 , "meaw meaw")

console.log(dog.name);
dog.leg();

Animal.myname();
