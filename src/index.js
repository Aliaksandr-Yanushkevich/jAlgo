import { bubbleSort } from './bubbleSort';
import { quickSort } from './quickSort';
import { createSnapshot } from './createSnapshot';
import { canvas, arraySize, stepsQuantity, delay, start, arraySizeLabel, timeSpent } from './env';

const visualize = () => {
    arraySize.disables = true;
    const sortHistory = bubbleSort(+arraySize.value);
    const { arrLength, stepsAmount, steps, calculationTime } = sortHistory;
    canvas.width = arrLength;
    canvas.height = arrLength;
    stepsQuantity.innerHTML = `Total steps:${stepsAmount}`;
    timeSpent.innerHTML = `Calculation time, ms: ${calculationTime}`
    for (let i = 0; i < stepsAmount; i++) {
        const step = steps[i];
        let numberOfStep = i + 1;
        const prevStep = steps[i - 1];
        const nextStep = steps[i + 1];
        const indexesToSwap = i !== stepsAmount - 1 ? step.map((el, index) => el === nextStep[index] ? null : index).filter(el => el !== null) : null;
        const swappedIndexes = i !== 0 ? step.map((el, index) => el === prevStep[index] ? null : index).filter(el => el !== null) : null;
        setTimeout(() => createSnapshot(step, swappedIndexes, indexesToSwap, numberOfStep, arrLength, +delay.value), i * +delay.value)
    }
};

start.addEventListener('click', visualize);
arraySize.addEventListener('change', (e) => arraySizeLabel.innerHTML = `Array size: ${e.target.value}`);
delay.addEventListener('change', (e) => delayLabel.innerHTML = `Delay, ms: ${e.target.value}`);
