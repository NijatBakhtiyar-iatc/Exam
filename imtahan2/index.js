let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
let letterArr = [];
let numArray = []
for (let i = 0; i < arr.length; i++){
    if ((typeof arr[i]) == "string") {
        letterArr.push(arr[i])
    } else {
        numArray.push(arr[i])
    }
}


console.log(numArray.concat(letterArr));