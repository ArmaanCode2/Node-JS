async function getname(code){
    const url = "https://jsonmock.hackerrank.com/api/countries?page=1";
    return new Promise((resolve, reject) => {
    fetch(url).then(res => res.json()).then(result => {
        let output;
        for (let i = 0; i < result.data.length; i++) {  
                if(result.data[i].alpha2Code === code){
                    output = result.data[i].name;
                }
            }
            resolve(output);
        }).catch(err => {
            reject(err);
        });
    });
};

getname("AX").then(results => console.log(results));