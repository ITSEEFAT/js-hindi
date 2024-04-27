// if

const isuserlogedin = true
if(isuserlogedin){
console.log("yes")
}


//  <,>,<=,>=,==,

// ===   when type is different

if( 2==="2"){

    console.log("executed")
}

else{
    console.log(
    "not executed"
    )
}

if(isuserlogedin&& 2==2&& 56==56){
    console.log("run")


}

// switch statements



// you can also use string here   (const phoneage="april").....case "jan":
const phoneage= 4

switch(phoneage){

    case 1:
        console.log("phone is bought in jan 2023");
        break;

    case 2:
        console.log("phone is bought in FEB 2023");
        break;

    case 3:
        console.log("phone is bought in MARCH 2023");
        break;

    case 4:
        console.log("phone is bought in APRIL 2023");
        break;

    case 5:
        console.log("phone is bought in MAY 2023");
        break;
}


// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values
// "0",false," ",[],{},function(){}


// NAYA OPERATOR H
// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1= undefined ?? 143 ?? 32
console.log(val1)


// ternary operator
const icecream= 95
icecream<=60 ? console.log("icecream is made up of water") : console.log("made up of milk")