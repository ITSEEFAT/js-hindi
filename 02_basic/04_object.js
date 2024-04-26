// singleton object
const singltonobj= new Object()
console.log(singltonobj)

// non singleton object
const myobj= {

    name:"seefat",
    username: {
        firstNAme:{
            lastname:{
           finalname: "syed",
            }
        }

    }
}

console.log(myobj.username.firstNAme.lastname.finalname)

// merging two object
const obj1={ a:32,b:34,c:54,}
const obj2={e:3,f:5,g:6,}
const obj3={obj1,obj2}
console.log(obj3)


// using spread method
const obj4={...obj1,...obj2}
console.log(obj4)
// some function of objects
console.log(Object.keys(obj4))
console.log(Object.values(obj4))
console.log(Object.entries(obj4))

// check whter the property or key present or not
console.log(obj4.hasOwnProperty('s'))
console.log(obj4.hasOwnProperty('a'))


// OBJECT DE STRUCTURE or aisa method jise hum easily object ki values print kr sake

const car={

    name:"swift",
    owner:"madhav",
    carNo:"20940530",

}

//  old method()--->console.log(car.name)

const {name}= car
console.log(name)
// or
const {owner: a}=car
console.log(a)


