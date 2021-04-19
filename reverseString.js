// reverseStr(str){
//     let r = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         r += str.charAt(i);
//     }
//     return r;
// }


// using this approach we reduce the number of times we run the program against array by half
let reverseString = function (s) {
    let arr = s.split(''), left = 0, right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        ++left;
        --right;
    }
    return arr.join('');
};

reverseString("India");