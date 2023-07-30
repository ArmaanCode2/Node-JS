function check(a){
    return new Promise((resolve, reject) =>{
        if(a === "hello"){
            resolve("ok");
        }else{
            reject("not matched");
        }
    })
};

check("hello").then(result =>{
    console.log(result);
}).catch(err => console.log(err))