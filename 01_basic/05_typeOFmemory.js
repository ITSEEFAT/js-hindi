// Discussing heap and stack memory

// stack is basically used by primitive data types /


// stack(primitive) heap(non primitive)


// working:    1.call by value-->stack organisation or used by primitive datatypes

 let a="seefat"

//  primitive mei value bas copy hoti h value            //   |         |
let b=a                                                  //   |    b    |
b="hitesh"                                               //   |----a----|
console.log(a)



        //    2.call by reference--->heap organization or used by non primitive like object 

        // example  issme refrence hota hai actuall mei change hota hai 

        let obj1={
            name:"seefat",
          
        }
        let obj2=obj1
        obj2.name="ARUN"


        console.log(obj1)
