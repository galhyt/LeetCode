/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

var subarraysWithKDistinct = function(A, K) {
    if (K == 0) return 0;

    var res = 0;
    var n = 0;
    var dic = {};
    var tailIndx = 0;

    do {
        for (var i = tailIndx ; i < A.length ; i++) {
            var num = A[i];
            if (dic[num] == null) {
                n++;
                dic[num] = 1;
            }
            else {
                dic[num]++;
            }
            
            if (n == K) {
                res++;
            }
            else {
                if (n > K) i=removeTailAndHeads(i);
            }
        }

        i--;
        i=removeTailAndHeads(i);
    } while (tailIndx < A.length);

    function removeTailAndHeads(i) {
        // remove tail
        if (removeEl(dic, A[tailIndx])) n--;
        tailIndx++;
        
        // remove heads                
        while (n >= K) {
            if (removeEl(dic, A[i])) n--;
            i--;
        }
        if (n > 0) {
            if (removeEl(dic, A[i])) n--;
            i--;
        }

        return i;
    }

    return res;
};

var removeEl = function(dic, el) {
    dic[el]--;
    if (dic[el] == 0) {
        delete dic[el];
        return true;
    }

    return false;
}

module.exports = subarraysWithKDistinct;