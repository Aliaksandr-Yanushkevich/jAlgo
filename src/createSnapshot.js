import { prevFrame } from './prevFrame';
import { nextFrame } from './nextFrame';

export const createSnapshot = (step, swappedIndexes, indexesToSwap, numberOfStep, arrLength, delay) => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => prevFrame(numberOfStep, step, swappedIndexes, arrLength, resolve), 0.5 * delay)

    })
    p.then(() => {
        setTimeout(() => nextFrame(step, arrLength, indexesToSwap), 0.5 * delay)
    })
}