function getRandomSortedArray(length, min = 0, max = 9) {
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return arr.sort((a, b) => a - b);
}

function mergeTwoSortedArrays1(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;
    const result = [];
    let ind1 = 0;
    let ind2 = 0;

    while (ind1 != len1 && ind2 != len2) {
        if (arr1[ind1] <= arr2[ind2]) {
            result.push(arr1[ind1]);
            ind1++;
        }
        else {
            result.push(arr2[ind2]);
            ind2++;
        }
    }

    if (ind1 == len1) {
        for (ind2; ind2 < len2; ind2++) {
            result.push(arr2[ind2]);
        }
    }
    
    if (ind2 == len2) {
        for (ind1; ind1 < len1; ind1++) {
            result.push(arr1[ind1]);
        }
    }

    return result;
}

function mergeTwoSortedArrays2(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;

    for (let i = 0; i < len1; i++) {
        if (arr1[i] > arr2[0]) {
            const temp = arr1[i];
            arr1[i] = arr2[0];
            arr2[0] = temp;
            
            const firstItem = arr2[0];
            let k = 1;
            while (k < len2 && arr2[k] < firstItem) {
                arr2[k - 1] = arr2[k];
                k++;
            }
            arr2[k - 1] = firstItem;
        }
    }

    return arr1.concat(arr2);
}

const arr1 = getRandomSortedArray(7);
const arr2 = getRandomSortedArray(5, -3, 7);
console.log("arr1 =", arr1);
console.log("arr2 =", arr2);
console.log("");

const res1 = mergeTwoSortedArrays1(arr1, arr2);
const res2 = mergeTwoSortedArrays2(arr1, arr2);
console.log("result1 =", res1);
console.log("result2 =", res2);