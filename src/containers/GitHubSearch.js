import { useEffect, useState } from "react";
import axios from "axios";

import { Repos } from "../components/Repos";
import { SearchForm } from "../components/SearchForm";

export const GitHubSearch = () => {
  const [url, setUrl] = useState();
  const [repos, setRepos] = useState();

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        const { data } = await axios.get(url);

        setRepos(data);
      };

      fetchData();
    }
  }, [url]);

  return (
    <section>
      <SearchForm setUrl={setUrl} />
      {repos && <Repos repos={repos} />}
    </section>
  );
};
