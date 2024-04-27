// how return works in function
function addtwonumber(a,b){

    console.log("sum of two number:",a+b)
}
// addtwonumber  this is only reference not do anything
addtwonumber(3,4)
let result= addtwonumber(3,4)
//console.log(result) it will print undefined bcz fun returns nothing
function mulTwoNo(a,b){

    return a*b
}

value=mulTwoNo(3,5)
console.log(value)


function islogedin(username){
if(username==undefined)
{console.log("username not found")

return
}
//else
 return `${username}is logged in sucessfully`
}
console.log(islogedin("seefatul"))

// some return case in function

function valuepass(...num){

    return console.log(num)
}
// array mei value aayi hai
valuepass(200,300,4,43,500,77,87,5454,34) 

// return in object 
const user1={

username: "seefatul",
value: 340
}

function cart(anyobject){
    return console.log(`${anyobject.username} has bought for the cart value of rs ${anyobject.value}`)



}
cart(user1)
// we can also directly pass object to a function too
cart({
    username:"vidyansh",
    value:5569,
})


// return in array using function.

const myarray=[3,4,45,65,32,54]

// function to return value at 2nd index
function value_at2ndindex(anyarray){

    return anyarray[2]

}
console.log(value_at2ndindex(myarray))