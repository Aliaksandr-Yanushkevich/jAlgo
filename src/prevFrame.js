import { ctx } from './env';
const stepNumber = document.querySelector('#stepNumber');

export const prevFrame = (numberOfStep, step, pivot, swappedIndexes, arrLength, resolve) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stepNumber.innerHTML = `Step number:${numberOfStep}`
    // draw frame with swapped elements
    for (let i = 0; i < arrLength; i++) {
        ctx.beginPath();
        ctx.rect(i, canvas.height, 1, - step[i]);
        if (pivot && i === pivot) {
            ctx.fillStyle = 'black';
        }
        else if (swappedIndexes) {
            ctx.fillStyle = !swappedIndexes.includes(i) ? 'red' : i === swappedIndexes[0] ? 'blue' : 'orange';
        }
        else {
            ctx.fillStyle = 'red';
        }
        ctx.fill();
        resolve()
    }
}