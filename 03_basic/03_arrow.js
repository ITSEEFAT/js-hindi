// this -key word 
// it refers to current context


const city={
 
    name: "buxar",
    population: 32443254,
    car: function numofcar(){
        console.log(`${this.name} city has having ${this.population} population and has 200 cars`)

    }
}
city.car()

// not applicable in function



//  now -- ARROW FUNCTION 

const arrowFUname= () =>{
    user="syed"
    return console.log(user)
}
arrowFUname()
// if you use curly braces then u need to write retun key word imp.....  explicit type

// AND if you use paranthesis then u need not to write return key word    .......implicit type



// for ex/

const sumof2=(num1,num2) =>(

console.log(num1+num2)     //no need to write retun key      
)

sumof2(32,8)



