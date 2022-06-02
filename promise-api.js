const p1 = new Promise((resolve)=>{
    setTimeout(() => {
        console.log("async p1");
        resolve(1);
    }, 2000);
})

const p2 =new Promise((resolve)=>{
    setTimeout(() => {
        console.log("async p2");
        resolve(2);
    }, 2000);
})
//Resolve all promise
Promise.all([p1,p2]).then(result=> console.log(result)).catch(err => console.log(err))

//Race
Promise.race([p1,p2]).then(result=> console.log(result)).catch(err => console.log(err))