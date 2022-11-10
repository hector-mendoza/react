import BasicConcepts from "./components/BasicConcepts";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

// TODO: Create documentation
function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a href="https://v5.reactrouter.com/web/guides/quick-start" rel="noreferrer" target="_blank">Docs</a>
      {/* <hr />
      <CrudApi />
      <hr />
      <BasicConcepts /> */}
      <hr />
      <SongSearch />
    </div>
  );
}

export default App;
