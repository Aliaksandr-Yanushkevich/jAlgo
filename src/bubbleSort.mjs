export const bubbleSort = (randomArr) => {
    let steps = [];
    let swapped;
    const start = new Date();
    let calculationTime;
    do {
        swapped = false;
        for (let i = 0; i < randomArr.length; i++) {
            if (randomArr[i] > randomArr[i + 1]) {
                let tmp = randomArr[i];
                randomArr[i] = randomArr[i + 1];
                randomArr[i + 1] = tmp;
                steps = [...steps, [...randomArr]]
                swapped = true;
            }
        }
    } while (swapped);
    calculationTime = new Date() - start;
    return { stepsAmount: steps.length, steps, arrLength: randomArr.length , calculationTime};
};
