export const bubbleSort = (i) => {
    const randomArr = Array(i).fill().map(el => Math.floor(Math.random() * i)).map(el => el === 0 ? el + 1 : el);
    let steps = [];
    let swapped;
    let stepsAmount = 0;
    const start = new Date();
    let calculationTime;
    do {
        swapped = false;
        for (let i = 0; i < randomArr.length; i++) {
            if (randomArr[i] > randomArr[i + 1]) {
                let tmp = randomArr[i];
                randomArr[i] = randomArr[i + 1];
                randomArr[i + 1] = tmp;
                stepsAmount++;
                steps = [...steps, [...randomArr]]
                swapped = true;
            }
        }
    } while (swapped);
    calculationTime = new Date() - start;
    return { stepsAmount, steps, arrLength: i , calculationTime};
};
