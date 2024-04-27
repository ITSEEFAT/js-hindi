// scope of variable within the curly braces

function calling(){


const username="seefat"

function url(){

    const website="seefat.com"
    console.log(username);

}
url()
//  console.log(website); (error deega kyunki uska scope andar tak hi hai) 
}
// calling()
// url()
calling()



// two way of declaring a function and there differences

addone(3)

function addone(num){

    return console.log(num+1)
}
addone(4)

// addtwo(6) not allowed here to call before declaration
const addtwo= function(num){
return console.log(num+2)
}
addtwo(6)