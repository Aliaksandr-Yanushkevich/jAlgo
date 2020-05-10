import { bubbleSort } from './bubbleSort';
import { quickSortWrapper } from './quickSort';
import { createSnapshot } from './createSnapshot';
import { canvas, arraySize, stepsQuantity, delay, start, arraySizeLabel, timeSpent, bubble } from './env';

const visualize = () => {
    const arrayLength = +arraySize.value;
    const randomArr = Array(arrayLength).fill().map(el => Math.floor(Math.random() * arrayLength)).map(el => el === 0 ? el + 1 : el);
    const sortHistory = bubble.checked ? bubbleSort(randomArr) : quickSortWrapper(randomArr);
    const { arrLength, stepsAmount, steps, calculationTime } = sortHistory;
    canvas.width = arrLength;
    canvas.height = arrLength;
    stepsQuantity.innerHTML = `Total steps:${stepsAmount}`;
    timeSpent.innerHTML = `Calculation time, ms: ${calculationTime}`
    for (let i = 0; i < stepsAmount; i++) {
        if (!Array.isArray(steps[0])) {
            const step = steps[i].step;
            const lastStep = i+1 === stepsAmount;
            const pivot = steps[i].pivot;
            let numberOfStep = i + 1;
            const prevStep = i > 0 ? steps[i - 1].step : null;
            const nextStep = i !== stepsAmount - 1 ? steps[i + 1].step : null;
            const indexesToSwap = i !== stepsAmount - 1 ? step.map((el, index) => el === nextStep[index] ? null : index).filter(el => el !== null) : null;
            const swappedIndexes = i > 0 ? step.map((el, index) => el === prevStep[index] ? null : index).filter(el => el !== null) : null;
            setTimeout(() => createSnapshot(step, lastStep, pivot, swappedIndexes, indexesToSwap, numberOfStep, arrLength, +delay.value), i * +delay.value)
        } else {
            const step = steps[i];
            const lastStep = i+1 === stepsAmount;
            const pivot = null;
            let numberOfStep = i + 1;
            const prevStep = i > 0 ? steps[i - 1] : null;
            const nextStep =  steps[i + 1];
            const indexesToSwap = i !== stepsAmount - 1 ? step.map((el, index) => el === nextStep[index] ? null : index).filter(el => el !== null) : null;
            const swappedIndexes = i > 0 ? step.map((el, index) => el === prevStep[index] ? null : index).filter(el => el !== null) : null;
            setTimeout(() => createSnapshot(step, lastStep, pivot, swappedIndexes, indexesToSwap, numberOfStep, arrLength, +delay.value), i * +delay.value)
        }

        // setTimeout(() => createSnapshot(step, swappedIndexes, indexesToSwap, numberOfStep, arrLength, +delay.value), i * +delay.value)
    }
};

start.addEventListener('click', visualize);
arraySize.addEventListener('change', (e) => arraySizeLabel.innerHTML = `Array size: ${e.target.value}`);
delay.addEventListener('change', (e) => delayLabel.innerHTML = `Delay, ms: ${e.target.value}`);
