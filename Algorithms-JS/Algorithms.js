//////////////////////////Algorithms (JS)//////////////////////////
//////////////Exercise 1
const printStars = (num) => {
    let star = ''
    for (let i = 0; i < num; i++) {
        star += '*'
        console.log(star)
    }
}
//printStars(20)

//////////////Exercise 2
const printStars2 = (num) => {
    let starArr = []
    let star = ''
    for (let i = 0; i < num; i++) {
        star += '*'
        starArr.unshift(star)
    }
    for (let s of starArr) {
        console.log(s)
    }
}
//printStars2(5)

//////////////Exercise 3
const printStarSeries = (num, count) => {
    for (let j = 0; j < count; j++) {
        let starArr = []
        let star = ''
        for (let i = 0; i < num; i++) {
            star += '*'
            console.log(star)
            starArr.unshift(star)
        }
        starArr.splice(0, 1)
        for (let s of starArr) {
            console.log(s)
        }
        console.log(" ")
    }
}
//printStarSeries(3, 5)


//////////////Exercise 4
const reverse = function (str) {

    let reversed = ""
    for (let i = 0; i < str.length; i++) {
        reversed += str.charAt(str.length - 1 - i)
    }
    return reversed
}
//console.log(reverse("dog")) //should return "god"
//console.log(reverse("race car")) //should return "rac ecar"


//////////////Exercise 5
const isPalindrom = function (str) {
    let reversed = reverse(str).toLowerCase().replace(/ /g, '')
    if (reversed === str.toLowerCase().replace(/ /g, '')) {
        return true
    }
    else { return false }
}
//console.log(isPalindrom('Taco Cat')) // should return true






/////////////////////////////////////////////////
//////////////Extension 1
const printInLoop = words => {
    words.forEach(w => console.log(w))
    return printInLoop(words)
}

const arr = ["down", "the", "rabbit", "hole"]
//printInLoop(arr) should print the array continually as long as the terminal running.

/////////////////////////////////////////////////
//////////////Extension 2
const findMin = array => {
    let n = array[0]
    for (let a of array){
        if(a<n){
         n = a
        }
    }
    return n
} 
// console.log(findMin([3, 4, 2, 1178, 244, 59, 10, 244, 718, 144]))

let calculateDistance = (pointA, pointB) => {
    let xSquared = ((pointA.x - pointB.x) * (pointA.x - pointB.x))
    let ySquared = ((pointA.y - pointB.y) * (pointA.y - pointB.y))
    let dSquared  = (xSquared + ySquared)// Math.sqrt(((yDistance * yDistance) + (xDistance * xDistance)))
    let distance = Math.sqrt(dSquared)
    return distance
}

const findClosest = (points, point) => {
    let newArr = [] //Includes new key = distance
    let distances = []
    for (let p of points) {
        let d = calculateDistance(point, p)
        p.d = d
        newArr.push(p)
        distances.push(d)
    }
    let max = findMin(distances)
    return newArr.find(p => p.d === max)
}

let pizzaLocations = [
    { x: 6, y: 12 },
    { x: 3, y: 1 },
    { x: 9, y: 0 },
    { x: 4, y: 10 }
]

let homeLocation = { x: 4, y: 2 }


console.log(findClosest(pizzaLocations, homeLocation)) // should return {x: 3, y: 1}

