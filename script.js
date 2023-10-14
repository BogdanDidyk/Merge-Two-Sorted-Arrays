function getRandomInteger(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntegerArray(length, min, max) {
    return Array.from({length}, () => getRandomInteger(min, max));
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

    const restItemsArr1 = arr1.slice(ind1);
    const restItemsArr2 = arr2.slice(ind2); 

    return result.concat(restItemsArr1).concat(restItemsArr2);
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

const arr1 = getRandomIntegerArray(7).sort((a, b) => a - b);
const arr2 = getRandomIntegerArray(5, -3, 7).sort((a, b) => a - b);
console.log("arr1 =", arr1);
console.log("arr2 =", arr2);
console.log("");

const res1 = mergeTwoSortedArrays1(arr1, arr2);
const res2 = mergeTwoSortedArrays2(arr1, arr2);
console.log("result1 =", res1);
console.log("result2 =", res2);