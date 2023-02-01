export type User = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
};

export namespace Repositories {
  export type Repo = {
    id: string;
    full_name: string;
    stargazers_count: string;
    html_url: string;
    name: string;
  };

  export type LoaderData = {
    user: User;
    repos: Repo[];
  };
}

export namespace Commits {
  export type ApiResponse = {
    sha: string;
    commit: {
      message: string;
    };
    html_url: string;
  };

  export type Commit = {
    sha: string;
    message: string;
    html_url: string;
  };

  export type LoaderData = {
    commits: Commit[];
    user: User;
  };
}
