// generic type jobb típus biztonságot adnak a kódunknak
const names: Array<string | number> = ['max','manu',12];    // array típus ami kapcsolódik egy másik típushoz(string/number)

// //Create generic functions
function merge (objA:object, objB:object){
    return Object.assign(objA, objB);
}
console.log(merge({name:'DevBacso'},{age:34}));
const mergeObj = merge({name:'DevBacso'},{age:34});
// Ebben az esetben nem tudok az objektum paraméterére hivatkozni=> mergeObj.name
// TS nem tudja azt, hogy ez egy object => merge<T> a T (lehet más egybetűs karakter is) típusa már látható lesz
// a függvényen belül.
//type constrains típus kényszerítés <T extends object, U extends object>
// ezzel garantáljuk, hogy tényleg 2 oject típusú paramétertkapunk ebben az esetben
// de használhatunk egyedi létrehozott típust vagy beépített típust vagy alap típust mint pl:union,...
function mergeType <T extends object, U extends object>(objT:T, objU:U) {
    return Object.assign( objT, objU);
}
const mergeTobj= mergeType({name:'flyingGoose'}, {age:34});
const mergeTobj2= mergeType({name:'flyingGoose', brand:['yes']}, {age:34});

console.log(mergeTobj2.brand);