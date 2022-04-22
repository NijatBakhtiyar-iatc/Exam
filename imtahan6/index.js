let arr = [1, 4, 7, 5, 3, 20]

function calc(arr) {
    let left = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    
    for (let i = 0; i < arr[arr.length - 1]; i++) {
        if (!arr.includes(i)) {
            left.push(i)
        }
    }

    
    console.log("kohne: ", arr)
    console.log("yeni: ",  left);
}

calc([1, 4, 7, 5, 3, 20])