let mydate= new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(typeof mydate)


let newdate= new Date(2024,0,23)
console.log(newdate.toDateString())
// in india we use below format 13-02-2005
let otherdate= new Date("01-13-2005")
// console.log(otherdate.toDateString())



let timestamp = Date.now()
console.log(Math.floor(timestamp/1000))


console.log(newdate.getDate())
console.log(newdate.getHours())
// ctrl +space for vs suggetion

console.log(newdate.toLocaleDateString('default',{

weekday: "long"
}

))