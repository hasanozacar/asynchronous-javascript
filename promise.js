console.log("Before");
getUser(1).then((user) =>
  getRepositories(user.gitHubUsername).then((repos) =>
    getCommits(repos[0])
      .then((commits) => {
        console.log("Commits", commits);
      })
      .catch((err) => console.log("err"))
  )
);
console.log("After");

async function displayCommits(params) {
   try {
    const user = await getUser(1);
    const repo = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repo[0]);
    console.log(commits);
   } catch (error) {
       console.log("Error",error);
   } 

}

console.log("Before Asyn-Await");
displayCommits();
console.log("After Asyn-Await");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      reject(new Error("Could not get commits") );
    }, 2000);
  });
}
