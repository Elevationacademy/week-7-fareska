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
const reverse = function(str){
    
    let reversed =""
    for (let i=0; i<str.length; i++){
        reversed += str.charAt(str.length-1-i)
    }
    return reversed
}

//console.log(reverse("dog")) //should return "god"
//console.log(reverse("race car")) //should return "rac ecar"


//////////////Exercise 5
const isPalindrom = function(str){
    let reversed = reverse(str).toLowerCase().replace(/ /g,'') 
    if (reversed === str.toLowerCase().replace(/ /g,'')){
        return true}
    else{return false } 
    
}

//console.log(isPalindrom('Taco Cat'))
