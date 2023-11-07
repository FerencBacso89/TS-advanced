"use strict";
const e1 = {
    name: 'devBacso',
    privilages: ['Developer'],
    startWork: new Date()
};
// typeof typeguard
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add("Typeof type Guard:", "Check the parameter type"));
// Parameter check type Guard
// create another employee
const empTG = {
    name: 'DevBacso',
    privilages: ['Frontend Developer'],
    startWork: new Date
};
function pirntEmpInfo(empTG) {
    console.log('Name: ' + empTG.name);
    if ('privilages' in empTG) {
        console.log('Privilage: ' + empTG.privilages);
    }
    if ('startWork' in empTG) {
        console.log('When started to work: ' + empTG.startWork);
    }
}
pirntEmpInfo(empTG);
//Instanceof type Guard (elegant way)
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a Truck...");
    }
    loadCargo(amount) {
        console.log('Loading cargo... ' + amount + '$ property');
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { // The 'Truck' in JavaScript appears to be a constructor function, which is why JavaScript can understand the constructor function.
        vehicle.loadCargo(10000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case ('bird'):
            speed = animal.flySpeed;
            break;
        case ('horse'):
            speed = animal.runSpeed;
            break;
    }
    console.log(`Moving speed: ${speed} km/h`);
}
moveAnimal({ type: 'bird', flySpeed: 25 });
//------------------------------------------- TYPE CASTING ---------------------------------------
//v1
const Inp = document.getElementById('castInput');
//v2
const InpV2 = document.getElementById('castInput');
console.log(Inp);
if (Inp) {
    Inp.value = 'Hello Word!';
}
