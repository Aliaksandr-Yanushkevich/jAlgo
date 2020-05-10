import { ctx } from './env';
export const nextFrame = (step, lastStep, pivot, arrLength, indexesToSwap) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw frame with elements to swap
    for (let i = 0; i < arrLength; i++) {
        ctx.beginPath();
        ctx.rect(i, canvas.height, 1, - step[i]);
        if (pivot && i === pivot && !lastStep) {
            ctx.fillStyle = 'black';
        }
        else if (indexesToSwap) { 
            ctx.fillStyle = !indexesToSwap.includes(i) ? 'red' : i === indexesToSwap[0] ? 'orange' : 'blue'; 
        }
        else { 
            ctx.fillStyle = 'red'; 
        }
        ctx.fill();
    }
}