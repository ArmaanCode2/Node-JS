const os = require('os');


setInterval(()=>{
    const mem = os.freemem();
    console.log((mem / 1024 / 1024 / 1024).toFixed(2));
},1000)