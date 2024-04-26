// object literalls

const newsym= Symbol("seefat")
const myobj={

    name:"seefat",
    email:"seefat@google.com",
    rollno:57,
    "location":"aurangabad",
     [newsym]:"seefat",
}

// 2 access method   --> . & []

console.log(myobj.name)
console.log(myobj["email"])
// we basically use [ ] 
console.log(myobj["location"]) 

// { case of symbol } imp Q) why we use [] to acess symbol

console.log(myobj[newsym])


myobj.name="syed"
console.log(myobj.name)
Object.freeze(myobj)
myobj.name="haq"
console.log(myobj.name)


myobj.greet=function(){

console.log("hello seefat");
}
console.log(myobj.greet)
    
    




