export const Repo = ({ repo }) => {
  return (
    <div className="card repo-card">
      <img
        src={repo.owner.avatar_url}
        className="card-img-top"
        alt={repo.name}
      />
      <div className="card-body">
        <h5 className="card-title">{repo.name}</h5>
        <p className="card-text">{repo.description}</p>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};
