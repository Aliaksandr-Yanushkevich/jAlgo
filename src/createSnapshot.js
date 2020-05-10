import { prevFrame } from './prevFrame';
import { nextFrame } from './nextFrame';

export const createSnapshot = (step, lastStep, pivot, swappedIndexes, indexesToSwap, numberOfStep, arrLength, delay) => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => prevFrame(numberOfStep, step, pivot, swappedIndexes, arrLength, resolve), 0.5 * delay)

    })
    p.then(() => {
        setTimeout(() => nextFrame(step, lastStep, pivot, arrLength, indexesToSwap), 0.5 * delay)
    })
}