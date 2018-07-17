function max (numbers){
    let i = 0
    let maxNum = numbers[0]
    while(i <=numbers.length){
        if (maxNum < numbers[i]){
            maxNum = numbers[i]
        }
    i++
    }
         console.log(maxNum)
}

function min(numbers){
    let i = 0
    let minNum = numbers[0]
    while(i <=numbers.length){
        if (minNum > numbers[i]){
            minNum = numbers[i]
            
        }
        i++
    }
         console.log(minNum)
}

const array = [1,2,3,4,5,6]

max(array)

min(array)