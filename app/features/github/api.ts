import invariant from "tiny-invariant";
import { pick } from "remeda";
import { Types } from "./index";

const config = {
  headers: {
    accept: "application.vnd.github.v3+json",
    Authorization: "token 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",
  },
};

export async function getGithubUser(username?: string) {
  invariant(username, "Please provide a username as a string");

  const response = await fetch(
    `https://api.github.com/users/${username}`,
    config
  );

  return pick(await response.json(), [
    "login",
    "avatar_url",
    "html_url",
    "bio",
  ]);
}

export async function getUserRepos(username?: string) {
  invariant(username, "Please provide a username as a string");

  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    config
  );

  return (await response.json()).map((repo: Types.Repositories.Repo) =>
    pick(repo, ["id", "full_name", "stargazers_count", "html_url", "name"])
  );
}

export async function getCommits(
  username?: string,
  reponame?: string
): Promise<Types.Commits.Commit[]> {
  invariant(username, "Please provide a username as a string");
  invariant(reponame, "Please provide a reponame as a string");

  const response = await fetch(
    `https://api.github.com/repos/${username}/${reponame}/commits`,
    config
  );

  return (await response.json()).map((commit: Types.Commits.ApiResponse) => ({
    sha: commit.sha,
    message: commit.commit.message,
    html_url: commit.html_url,
  }));
}
