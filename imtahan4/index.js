let first = "finder"
let second = "friend"
let count = 0

first = first.toLowerCase()
second = second.toLowerCase()

if (first.length == second.length) {
    for (let i = 0; i < first.length; i++) {
        if (second.includes(first[i])) {
            count++
        }
    }
    if (count == first.length) {
        console.log("true");
    }
    else {
        console.log("false");
    }
} else {
    console.log("false");
}
