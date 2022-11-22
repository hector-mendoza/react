import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ padding: "25px" }}>
      <h1>Memo</h1>
      <hr />
      <h2>
        <a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbXVxRENNNFJ1bS04Z2Z4Wk9iQy0xRkRibWVUZ3xBQ3Jtc0tsZ2pZVFk0SDhqaFdxRTBKWHFsODFXb3pBRmlrVDFYdmZuR0pJUFhYMHV3QnNreE1VU2tKNnJXVEc5bHQ3VnVFblV3Vzc2ejNYRTRHZHJ0OW53cjJ5cUQ0WGxnMTcxOWQzQ2NuVXIwX0R0Qm5IXzdJWQ&q=https%3A%2F%2Fes.reactjs.org%2Fdocs%2Freact-api.html%23reactmemo&v=d8MaIRB8HfQ"
          target="_blank" rel="noreferrer">Docs</a>
      </h2>
      <ul>
        <li>
          Se encarga de memorizan un componente
        </li>
        <li>Lo vuelve a memorizar al momento de que sus <b>props</b> cambian</li>
        <li>Evita re-renderizados</li>
        <li>Hay que evitarlo en la medida de lo posible, podría ser más costosa la tarea de memorización que el re-renderizado del componente</li>
        <li>
          Usarlo cuando:
          <ul>
            <li>
              Tenemos muchos elementos renderizados en una lista
            </li>
            <li>
              Llamamos datos de APIs
            </li>
            <li>
              Un componente se vuelve muy pesado
            </li>
            <li>
              Salen alertas de rendimiento en la consola
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <Counter />
    </div>
  );
}

export default App;
