import { useState } from "react";

export const SearchForm = ({ setUrl }) => {
  const [searchMode, setSearchMode] = useState("organisation");
  const [organisation, setOrganisation] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const handleClickButtonGroup = (event) => {
    setSearchMode(event.target.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      (searchMode === "organisation" && !organisation) ||
      (searchMode === "username" && !username)
    ) {
      setError(true);
    }

    if (searchMode === "organisation" && organisation) {
      setError(false);
      setUrl(`https://api.github.com/orgs/${organisation}/repos`);
    }

    if (searchMode === "username" && username) {
      setError(false);
      setUrl(`https://api.github.com/users/${username}/repos`);
    }
  };

  const handleOnChange = (event) => {
    if (searchMode === "organisation") {
      setOrganisation(event.target.value);
    } else {
      setUsername(event.target.value);
    }
  };

  return (
    <section className="search-form mb-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-center">
          <div className="btn-group" role="group">
            <button
              type="button"
              name="organisation"
              onClick={handleClickButtonGroup}
              className={`btn btn-light ${
                searchMode === "organisation" ? "active" : ""
              }`}
            >
              Search by organisation
            </button>
            <button
              type="button"
              name="username"
              onClick={handleClickButtonGroup}
              className={`btn btn-light ${
                searchMode === "username" ? "active" : ""
              }`}
            >
              Search by username
            </button>
          </div>
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            onChange={handleOnChange}
            placeholder={`Enter ${searchMode}`}
            value={searchMode === "organisation" ? organisation : username}
          />
          {error && (
            <div className="form-text text-danger">
              Please enter a valid {searchMode}
            </div>
          )}
        </div>

        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-success">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};
