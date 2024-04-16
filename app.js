


var numbers = (number) => {
    var sum = 0
    for (num of number){
        if (num > 0) {
            sum+=num
        }
    }
    return sum / number.length
}

console.log(numbers( [2, -78, 45,4,-7,-6,-10, 26, 30, 8]))





var square = (numbers) => {
    var sum = 0
    for (number of numbers) {
        if (number % 2 === 0) {
            sum += number * number
        }
    }
    return sum
}
console.log(square([1,2,3,4,5,6,7,8,9]))


//3
var findWords = (words) => {
    result = []
    for (let word of words) {
        if (word.toLowerCase().includes('t') || word.toLowerCase().includes('a'))

            result.push(word)

    }
    return result
}
console.log(findWords(["Apple",'frontend', 'apple', 'text', 'course', 'test']))