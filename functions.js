function sum(x, y) {
    return x + y
}

function capatalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
    return string.split("").reverse().join("");
}

class Calculator {
    value
    constructor(value) {
        this.value = value
    }

    add(num) {
        return this.value + num
    }

    subtract(num) {
        return this.value - num
    }

    multiply(num) {
        return this.value * num
    }

    divide(num) {
        return this.value / num
    }
}

function cipher(string, shift) {
    //let strArr = string.split('')
    return string.slice(shift) + string.slice(0, shift)
}

function analyzeArray(arr) {
    
    const avg = (arr) => {
        let sum = 0
        for (let i=0; i < arr.length; i++) {
            sum += arr[i]
        }

        return sum/(arr.length)
    }
    const min = (arr) => {
        let min = arr[0]
        for (let i=0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        return min
    }
    const max = (arr) => {
        let max = arr[0]
        for (let i=0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        return max
    }

    const object = {
        average: avg(arr),
        min: min(arr),
        max: max(arr),
        'length': arr.length
    }
    
    return object
}

export {
    sum,
    capatalize,
    reverse,
    Calculator,
    cipher,
    analyzeArray
}