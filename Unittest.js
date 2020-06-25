const subarraysWithKDistinct = require("./subarraysWithKDistinct");

test([1,2,1,2,3], 2, 7)
test([2,1,1,1,2], 1, 8)
test([2,1,2,1,2],2,10)
test([2,2,1,2,2,2,1,1],2,23)

function test(A, K, e) {
    var r = subarraysWithKDistinct(A, K);
    if (r == e)
        console.log("Success!");
    else
        console.log("ERROR!");

    console.log("\tA = " + A + "\n\tK = " + K + "\n\texpected result = " + e + "\n\tactual result = " + r);
}