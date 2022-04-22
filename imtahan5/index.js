function calc(array, deyer) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) == deyer) {
                console.log(array[i], "    ", array[j], "    ", deyer)
                result.push(`birinci: ${array[i]}`, `ikinci ${array[j]}`, `deyer ${deyer}`)
            }
        }
    }

    return result
}
console.log(calc([1, 4, 6, 3, 8], 7));