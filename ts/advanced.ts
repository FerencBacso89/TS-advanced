//----------------------------- INTERSECTION TYPE ------------------------------------
// In comment shows the same way but I use interface inheritence
type Admin = {  //interface Admin{
    name: string;
    privilages:string[];
};
type Employee = {   //interface Employee{
    name:string;
    startWork:Date;
};

type HigherEmployee= Admin & Employee;  //interface HigherEmployee extends Admin, Employee {}

const e1 :  HigherEmployee= {
    name:'devBacso',
    privilages:['Developer'],
    startWork: new Date()

}
//------------------------------------ TYPE GUARDS ---------------------------------------------
//make new types with union type
type Combinable = string | number;
type Numeric = number| boolean;
type Universal = Combinable & Numeric;      //intersection operator: &

// typeof typeguard
function add(a:Combinable, b:Combinable){
    if (typeof a === "string" || typeof b === "string") {
        return a.toString()+b.toString();
    }
    return a+b;
}
console.log(add("Typeof type Guard:","Check the parameter type"));

// Parameter check type Guard
// create another employee
const empTG: HigherEmployee= {
    name:'DevBacso',
    privilages:['Frontend Developer'],
    startWork: new Date
}
type AdminTG = {  //interface Admin{
    name: string;
    privilages:string[];
};
type EmployeeTG = {   //interface Employee{
    name:string;
    startWork:Date;
};
 type UnknownEmp = EmployeeTG | AdminTG;
function pirntEmpInfo(empTG:UnknownEmp){
    console.log('Name: '+empTG.name);
    if ('privilages' in empTG) {        
        console.log('Privilage: '+empTG.privilages);
    }
    if ('startWork' in empTG) {        
        console.log('When started to work: '+empTG.startWork);
    }

}
pirntEmpInfo(empTG)

//Instanceof type Guard (elegant way)
class Car{
    drive() {
        console.log("Driving...")
    }
}
class Truck {
        drive() {
        console.log("Driving a Truck...")
    }
    loadCargo(amount:number){
        console.log('Loading cargo... '+amount +'$ property');
    }
}
type Vehicle = Car | Truck;

const v1= new Car();
const v2= new Truck();

function useVehicle (vehicle:Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {         // Truck js seems like a constructor function so js understand constructor fn
        vehicle.loadCargo(10000);
    }
}
useVehicle(v1);
useVehicle(v2);