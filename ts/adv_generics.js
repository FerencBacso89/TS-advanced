"use strict";
// generic type jobb típus biztonságot adnak a kódunknak
const names = ['max', 'manu', 12]; // array típus ami kapcsolódik egy másik típushoz(string/number)
// //Create generic functions
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'DevBacso' }, { age: 34 }));
const mergeObj = merge({ name: 'DevBacso' }, { age: 34 });
// Ebben az esetben nem tudok az objektum paraméterére hivatkozni=> mergeObj.name
// TS nem tudja azt, hogy ez egy object => merge<T> a T (lehet más egybetűs karakter is) típusa már látható lesz
// a függvényen belül.
//type constrains típus kényszerítés <T extends object, U extends object>
// ezzel garantáljuk, hogy tényleg 2 oject típusú paramétertkapunk ebben az esetben
// de használhatunk egyedi létrehozott típust vagy beépített típust vagy alap típust mint pl:union,...
function mergeType(objT, objU) {
    return Object.assign(objT, objU);
}
const mergeTobj = mergeType({ name: 'flyingGoose' }, { age: 34 });
const mergeTobj2 = mergeType({ name: 'flyingGoose', brand: ['yes'] }, { age: 34 });
console.log(mergeTobj2.age);
//ezután ki kell terjeszteni a T-t Lengthy-re így nem fog hibát adni
//Továbbá a kimenet formátumát egy tuple tipussal adjuk meg
function countAndPrint(element) {
    let describe = 'Got no value';
    if (element.length === 1) {
        describe = 'Got 1 Character';
    }
    else if (element.length > 1) {
        describe = 'Got ' + element.length + ' Characters';
    }
    return [element, describe];
}
console.log(countAndPrint("HI, This is me DEVBACSO!"));
//Constrain "keyof"
//U extends keyof T azaz aT típushoz tartozó key
function extractConvt(obj, key) {
    return obj[key];
}
//az object elem után megadjuk a key paramétert amivel azonosítjuk az object-et
console.log(extractConvt({ id: 1, nickname: 'DEVBACSO' }, "id"));
//Generic Class 98-99-100.video
//az egyszerű class-t generic class-á alakítjuk mert biztosak akarunk lenni abban, hogy az adatok egységesek lesznek
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
//DataStorage -ot felhasználva tudunk csk számot csak stringet stb tárolni
const textStore = new DataStorage();
textStore.addItem('DEV');
textStore.addItem('DevBacso');
textStore.removeItem('DEV');
console.log(textStore.getItems());
//Az object referancia típus így annál nem fog működni az előző megoldás
//ki kell terjeszteni T típust  ezt az osztály elején kell megadni így az object típus nem lesz elfogadható
//mert jóval specifikusabb lesz így 
