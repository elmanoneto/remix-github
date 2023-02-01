import { LoaderArgs } from "@remix-run/node";
import { GithubAPI, Types } from "../../features/github/index";
import { useLoaderData } from "@remix-run/react";

export async function loader({
  params,
}: LoaderArgs): Promise<Types.Commits.LoaderData> {
  const { username, reponame } = params;

  return {
    commits: await GithubAPI.getCommits(username, reponame),
    user: await GithubAPI.getGithubUser(username),
  };
}

export default function () {
  const { commits, user } = useLoaderData<Types.Commits.LoaderData>();
  return <h3>{commits.length}</h3>;
}
