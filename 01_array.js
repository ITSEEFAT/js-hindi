//array basic02

const arr=[1,23,4,65,6]
console.log(arr)
console.log(arr[2])
// console.log(arr.indexof(23))
//if indexnot found then return -1


arr.push("45")
console.log(arr) //new element at end

arr.push("23")
console.log(arr)
arr.pop()
console.log(arr)
//delete the last element


//new element at the begning
arr.unshift("12")
console.log(arr)
arr.unshift("3")
console.log(arr)
arr.shift()
console.log(arr)

// slice vs splice

const newarr=[1,3,4,6,7,5,9,2]
console.log("slice:", newarr.slice(1,3))
console.log("A",newarr)
//it will print  value at index 1,2 but not 3  .....original aray will remain same


let arr2= newarr.splice(1,3);  //it will print value at index 1,2,3 ......orignall array will remove that part

cosnsole.log("splice:",arr2);
console.log("B:",newarr);
