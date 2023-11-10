// ------------------ function overloads ---------------- 88.video

// 3, fn overload-ok létrehozása
function addF(a:number, b:number):number
function addF(a:number, b:string):string
function addF(a:string, b:number):string
function addF(a:string, b:string):string

function addF(a:Combinable, b:Combinable)
{
    if (typeof a === "string" || typeof b === "string") {
        return a.toString()+b.toString();
    }
    return a+b;
}
const result = addF(5,"-xy") // 1, typescript nem tudja, hogy mindíg stringet fogunk vissza kapni ezért kell külön az as string 
if (typeof result === 'string') {
   const sREs=result.split('-');  //1, Szükséges a konvertálás mert nem tudja a string műveleteket elvégezni
    console.log(sREs);
    //2, itt jön képbe a fn overload    
}
if (typeof result === 'number') {    
    console.log(result);
}


//---------------------- optional chaining ------------------------
const FethedUserData={
    id:'0',
    name:'dev#Bacso',
    job:{ //{} object
        title:'Frontend developer',
        description:'Thinking and doing design'
    }  
};
console.log(FethedUserData?.job?.title);

//----------------------- nullish coalescing ---------------------------------
const input:any = null; 
const Stored = input ?? 'DEFAULT'; //  ha input null vagy undefinied -> 'DEFAULT', ha nem akkor az input értéke
console.log(Stored);

//------------------------------------------------- GENERICS & GENERICS TYPE -------------------------------------
//94. VIDEO