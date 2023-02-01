import { Outlet } from "@remix-run/react";
import { Types } from "../index";
import { Repository } from "./Repository";

type RepositoriesProps = {
  user: Types.User;
  repos: Types.Repositories.Repo[];
};

export function Repositories({ user, repos }: RepositoriesProps) {
  return (
    <section className="bg-black text-white">
      <article>
        <h1>{user.login}</h1>
        <blockquote>{user.bio}</blockquote>
        <img src={user.avatar_url} alt={user.login} width="150" />
        <pre>Projects: {repos.length}</pre>
      </article>

      <section className="flex">
        <div className="flex-1">
          {repos.map((repo) => (
            <Repository repo={repo} key={repo.id} />
          ))}
        </div>
        <div className="flex-1">
          <h3>Details</h3>
          <Outlet />
        </div>
      </section>
    </section>
  );
}
