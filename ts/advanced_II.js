"use strict";
// ------------------ function overloads ---------------- 88.video
var _a;
function addF(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addF(5, "-xy"); // 1, typescript nem tudja, hogy mindíg stringet fogunk vissza kapni ezért kell külön az as string 
if (typeof result === 'string') {
    const sREs = result.split('-'); //1, Szükséges a konvertálás mert nem tudja a string műveleteket elvégezni
    console.log(sREs);
    //2, itt jön képbe a fn overload    
}
if (typeof result === 'number') {
    console.log(result);
}
//---------------------- optional chaining ------------------------
const FethedUserData = {
    id: '0',
    name: 'dev#Bacso',
    job: {
        title: 'Frontend developer',
        description: 'Thinking and doing design'
    }
};
console.log((_a = FethedUserData === null || FethedUserData === void 0 ? void 0 : FethedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//----------------------- nullish coalescing ---------------------------------
const input = undefined;
const Stored = input !== null && input !== void 0 ? input : 'DEFAULT'; //  ha input null vagy undefinied -> 'DEFAULT', ha nem akkor az input értéke
console.log(Stored);
//------------------------------------------------- GENERICS & GENERICS TYPE -------------------------------------
//94. VIDEO
