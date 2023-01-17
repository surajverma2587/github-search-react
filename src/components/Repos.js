import { Repo } from "./Repo";

export const Repos = ({ repos }) => {
  if (repos.length === 0) {
    return (
      <div className="alert alert-primary" role="alert">
        No repositories found!!
      </div>
    );
  }

  return (
    <div className="repos-container">
      {repos.map((repo) => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </div>
  );
};
