!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=document.querySelector("#canvas"),l=r.getContext("2d"),a=document.querySelector("#arraySize"),o=document.querySelector("#stepsQuantity"),u=document.querySelector("#delay"),i=document.querySelector("#start"),c=document.querySelector("#arraySizeLabel"),s=document.querySelector("#timeSpent"),d=document.querySelector("#stepNumber"),f=(e,t,n,r,a,o)=>{new Promise((n,u)=>{setTimeout(()=>((e,t,n,r,a)=>{l.clearRect(0,0,canvas.width,canvas.height),d.innerHTML="Step number:"+e;for(let e=0;e<r;e++)l.beginPath(),l.rect(e,canvas.height,1,-t[e]),l.fillStyle=n&&n.includes(e)?e===n[0]?"blue":"orange":"red",l.fill(),a()})(r,e,t,a,n),.5*o)}).then(()=>{setTimeout(()=>((e,t,n)=>{l.clearRect(0,0,canvas.width,canvas.height);for(let r=0;r<t;r++)l.beginPath(),l.rect(r,canvas.height,1,-e[r]),l.fillStyle=n&&n.includes(r)?r===n[0]?"orange":"blue":"red",l.fill()})(e,a,n),.5*o)})};i.addEventListener("click",()=>{a.disables=!0;const e=(e=>{const t=Array(e).fill().map(t=>Math.floor(Math.random()*e)).map(e=>0===e?e+1:e);let n,r=[],l=0;const a=new Date;let o;do{n=!1;for(let e=0;e<t.length;e++)if(t[e]>t[e+1]){let a=t[e];t[e]=t[e+1],t[e+1]=a,l++,r=[...r,[...t]],n=!0}}while(n);return o=new Date-a,{stepsAmount:l,steps:r,arrLength:e,calculationTime:o}})(+a.value),{arrLength:t,stepsAmount:n,steps:l,calculationTime:i}=e;r.width=t,r.height=t,o.innerHTML="Total steps:"+n,s.innerHTML="Calculation time, ms: "+i;for(let e=0;e<n;e++){const r=l[e];let a=e+1;const o=l[e-1],i=l[e+1],c=e!==n-1?r.map((e,t)=>e===i[t]?null:t).filter(e=>null!==e):null,s=0!==e?r.map((e,t)=>e===o[t]?null:t).filter(e=>null!==e):null;setTimeout(()=>f(r,s,c,a,t,+u.value),e*+u.value)}}),a.addEventListener("change",e=>c.innerHTML="Array size: "+e.target.value),u.addEventListener("change",e=>delayLabel.innerHTML="Delay, ms: "+e.target.value)}]);