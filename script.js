const data = [
    {
    name: "Elemer",
    age: 12,
    pets: ["Mirci", "Sushi", "Bella"],
    mostRecentPurchase: {
        price: 15000,
        color: "black"
    }
},
{
    name: "Janka",
    age: 20,
    pets: ["Max", "Luna", "Charlie"],
    mostRecentPurchase: {
        price: 17500,
        color: "red"
    }
},
{
    name: "Bela",
    age: 50,
    pets: ["Rocky", "Lucy", "Buddy"],
    mostRecentPurchase: {
        price: 30000,
        color: "purple"
    }
},
{
    name: "Tomi",
    age: 34,
    pets: ["Teddy", "Ruby", "Jack"],
    mostRecentPurchase: {
        price: 15000,
        color: "brown"
    }
},
{
    name: "Erika",
    age: 60,
    pets: ["Oreo", "Coco", "Duke"],
    mostRecentPurchase: {
        price: 22000,
        color: "pink"
    }
},
{
    name: "Andras",
    age: 28,
    pets: ["Milo", "Lily", "Bear"],
    mostRecentPurchase: {
        price: 24500,
        color: "orange"
    }
},
{
    name: "Kata",
    age: 41,
    pets: ["Oscar", "Daisy", "Jasper"],
    mostRecentPurchase: {
        price: 29800,
        color: "green"
    }
},
{
    name: "Botond",
    age: 32,
    pets: ["Pepper", "Toby", "Olive"],
    mostRecentPurchase: {
        price: 16900,
        color: "yellow"
    }
},
{
    name: "Timea",
    age: 19,
    pets: ["Rusty", "Mocha", "Pippin"],
    mostRecentPurchase: {
        price: 20000,
        color: "blue"
    }
},
{
    name: "Tunde",
    age: 64,
    pets: ["Kiki", "Leo", "Luna"],
    mostRecentPurchase: {
        price: 24890,
        color: "white"
    }
}
]

//console log att elemnts of the array

for (let i = 0; i < data.length; i++) {
    if(data[i].age >= 60 && data[i].mostRecentPurchase.price >= 20000){
    //console.log(data[i])
    }
}

function addTwoNumbers(number1, number2) {
    let result = number1 + number2

    return result
}

addTwoNumbers(1, 2)

/* function concatArray(array) {
    let result = ""

    array.forEach((str) => {
       result += str
    })
    return result
} */

const arrayofStrings = ["kismacska", "javascript", "codecool"]
const concatWordsArray = concatArray(arrayofStrings)
//console.log(concatWordsArray)

function concatArray(array) {
    let result = array.join("")

    return result
}

function getOldPeople(arrayofPeople, minimumAge) {
    let result = []
    arrayofPeople.map((person) => {
        if(person.age >= minimumAge){
          result.push(person)
        }
    }) 
    return result
}

const oldPeople = getOldPeople(data, 50)
//console.log(oldPeople)

function getRichPeople(arrayofPeople, minimValue) {
    let result = arrayofPeople.filter((person) => person.mostRecentPurchase.price > minimValue)
    return result
}

const richPeople = getRichPeople(data, 50)
//console.log(richPeople)


/* function goodRecomendation(arrayofPeople, newOffer) {
    let result = []
    for(let i = 0; i < arrayofPeople.length; i++) {
        if(arrayofPeople[i].mostRecentPurchase.color === newOffer.color && arrayofPeople[i].mostRecentPurchase.price > newOffer.price) {
            result.push(arrayofPeople[i].name)
        }
    }
    return result
} */

//const goodOfferFor = goodRecomendation(data, newOffer1)
//console.log(goodOfferFor)

function goodRecomendationFilter(arrayofPeople, newOffer) {
    let result = []
    result = arrayofPeople.filter((person) => person.mostRecentPurchase.color === newOffer.color && person.mostRecentPurchase.price > newOffer.price)
    return result
}

const newOffer1 = {
    color: "black",
    price: 8000
}

const goodOfferFor2 = goodRecomendationFilter(data, newOffer1)
console.log(goodOfferFor2)