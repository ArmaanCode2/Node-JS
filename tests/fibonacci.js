const ps = require('prompt-sync');
const prompt = ps();
let arr = [0,1];

const num = prompt("please enter how many numbers you insert: ");

const data = ()=>{
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
}

for (let i = 0; i < (num - 2); i++) {
    data();
}
console.log(arr);

// setInterval(data,2000);
// setInterval(()=>console.log(arr),5000);