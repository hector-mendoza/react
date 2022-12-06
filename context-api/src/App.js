import MyPageContext from "./components/MyPageContext";

function App() {
  return (
    <div style={{ padding: "25px" }}>
      <h1>Context API</h1>
      <h3>
        <a target="_blank" href="https://es.reactjs.org/docs/context.html" rel="noreferrer">Documentation</a>
      </h3>
      <hr />
      <MyPageContext />
    </div>
  );
}

export default App;