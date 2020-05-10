export function quickSortWrapper(items) {
    let steps = [];
    let stepsAmount = 0
    const start = new Date();
    return quickSort(items);

    function swap(items, firstIndex, secondIndex, pivot) {
        stepsAmount++;
        const temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
        steps = [...steps, { pivot, step: [...items] }];
        // console.log(steps);
    }

    function partition(items, left, right) {
        let pivot = items[Math.floor((right + left) / 2)],
            i = left,
            j = right;
        // console.log(pivot);
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j, pivot);
                i++;
                j--;
            }
        }
        return i;
    }

    function quickSort(items, left, right) {
        let index;

        if (items.length > 1) {
            left = typeof left != "number" ? 0 : left;
            right = typeof right != "number" ? items.length - 1 : right;
            index = partition(items, left, right);
            if (left < index - 1) {
                quickSort(items, left, index - 1);
            }
            if (index < right) {
                quickSort(items, index, right);
            }
        }
        const calculationTime = new Date() - start;
        return { stepsAmount, steps, arrLength: items.length, calculationTime };
    }
}



// first call
// var result = quickSort([9,36,7,4,22, -4, -1]);
// console.log(result)