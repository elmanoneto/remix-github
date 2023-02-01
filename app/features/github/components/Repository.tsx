import { Link, Outlet } from "@remix-run/react";
import { Types } from "../index";
import { LoaderArgs } from "@remix-run/node";

type RepositoryProps = {
  repo: Types.Repositories.Repo;
};

export function Repository({ repo }: RepositoryProps) {
  return (
    <section className="mt-4 flex">
      <div className="flex-1">
        <Link to={repo.name}>
          <pre>{repo.full_name}</pre>
          <pre>{repo.stargazers_count}</pre>
        </Link>
        <hr />
      </div>
    </section>
  );
}
