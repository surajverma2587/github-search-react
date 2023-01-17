import { Jumbotron } from "./components/Jumbotron";
import { GitHubSearch } from "./containers/GitHubSearch";

export const App = () => {
  return (
    <div className="container">
      <Jumbotron />
      <GitHubSearch />
    </div>
  );
};
