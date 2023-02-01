import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Repositories, GithubAPI, Types } from "../features/github/index";

export async function loader({ params }: LoaderArgs) {
  const { username } = params;

  return {
    user: await GithubAPI.getGithubUser(username),
    repos: await GithubAPI.getUserRepos(username),
  };
}

export default function () {
  const { user, repos } = useLoaderData<Types.Repositories.LoaderData>();
  return <Repositories user={user} repos={repos} />;
}
