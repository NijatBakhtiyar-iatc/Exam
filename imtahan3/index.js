
function m(array) {
    let newArray = [];

    for (let i = 0; i <= array.length - 1; i++) {
        let arr = [];

        for (let j = array.length - 1; j >= 0; j--) {
            
            arr.push(array[j][i]);
        }
        
        newArray.push(arr);
    }

    console.log(newArray);
};

m([[0, 1, 2], [3, 4, 5], [6, 7, 8],])
