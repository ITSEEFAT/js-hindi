const arr=[2,57,76,67,75]

//  for of loop
// for (const ittration of object)


for(const num of arr){

    console.log(num)
}

// maps

const map = new Map()

map.set(`IN`,"INDIA")
map.set(`USA`,"united states of america")
// console.log(map)


// apply for of loop in map

for(const [key,value] of map){
    console.log(key + " and " +value)
}


//  we can not use for of loop in object



const car ={
    name:"farari",
    color:"red"
}
// for(const a of car){
//     console.log(a)



//  we use for in loop
for(const key in car){
    console.log(key,car[key])
}


// MOST IMPORTANT FOR EACH LOPP

const ar=[34,45,23,56,34,243,534]
ar.forEach(function (num){
    console.log(num)
})

const cars=["punto","nano","alto"]
cars.forEach( (value)=>{
    console.log(value)

})