// merge array

 const hero =["selmon","sharukh","amitabh"]
const cars=["alto","nexon","shift","scorpio"]

//  hero.push(cars)
console.log(hero)
// array ke andar array

// using concat we can avoide it
// hero.concat(cars)  not to be performed
// console.log(hero)
const merged=hero.concat(cars)
console.log(merged)


// other industrial way of merging through spreading
const newarr=[1,2,4,5,6,7,8,9]
const otherarr=[12,34,56,78,76]
const mergedarr=[...newarr,...otherarr]
console.log(mergedarr)

//to generate array element by using .from
console.log(Array.isArray("9"))
console.log(Array.from("seefatul"))

let score1=33;
let score2=54;
let score3=98;
console.log(Array.of(score1,score3))



