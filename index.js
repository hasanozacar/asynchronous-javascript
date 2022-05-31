console.log("Before");
getUser(1,(user)=>{
console.log(user);
getRepo(user.gitUserName,(repos)=>console.log(repos))
})
console.log("After");

//Callbacks
//Promises
//Async/await

function getUser(id,callback) {
    setTimeout(() => {
        console.log("Reading a user from a database ...");
        callback({id,gitUserName:"ozacar"})
        }, 2000);
    return 1
}

function getRepo(id,callback) {
    setTimeout(() => {
        console.log("Reading a user from a database ...");
        callback(["repo1","repo2","repo3"])
        }, 2000);
    return 1
}