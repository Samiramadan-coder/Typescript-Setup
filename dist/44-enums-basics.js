"use strict";
var GitRepo;
(function (GitRepo) {
    GitRepo[GitRepo["NotCommited"] = 0] = "NotCommited";
    GitRepo[GitRepo["Commited"] = 7] = "Commited";
})(GitRepo || (GitRepo = {}));
function isRepoCommited(repo) {
    return repo === null || repo === 7;
}
let gitCommit = isRepoCommited(7);
console.log(gitCommit);
