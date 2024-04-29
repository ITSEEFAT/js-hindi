

// printing table upto 10

// for( let i=1;i<=10;i++){

//     console.log(`table of ${i}`)
//     for( let j=1;j<=10;j++){
//         console.log(i +" multiply "+j+"="+ i*j)

// }}


// imp key word : 1) continue 2) break
const arr=[1,23,45,65,34,56,34]
for(let index=0;index<=arr.length; index++){
    const element= arr[index]
    if(element==65){
        console.log("65 is detected")
        breake;
    }
console.log(`array element is:${element}`)
}
