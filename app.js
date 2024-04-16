//2
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
        if (word.includes('t' && word.includes('a')))
            result.push(word)
        return result
    }
}
console.log(findWords(['frontend', 'apple', 'text', 'course', 'test']))