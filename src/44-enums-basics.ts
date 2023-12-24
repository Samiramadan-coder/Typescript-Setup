const enum GitRepo {
  NotCommited,
  Commited = 5 + 2,
}

function isRepoCommited(repo: GitRepo): boolean {
  return repo === null || repo === GitRepo.Commited;
}

let gitCommit = isRepoCommited(GitRepo.Commited);

console.log(gitCommit);
