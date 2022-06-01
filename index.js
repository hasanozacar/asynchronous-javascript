//Callbacks Hell
console.log('Before');
getUser(1, (user) => {
  getRepo(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  })
});
console.log('After');


//Callbacks
//Promises
//Async/await

function getUser(id,callback) {
    setTimeout(() => {
        console.log("Reading a user from a database ...");
        callback({id,gitUserName:"ozacar"})
        }, 2000);
}

function getRepo(id,callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
      }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      callback(['commit']);
    }, 2000);
  }
