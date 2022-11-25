import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ padding: "25px" }}>
      <h1>Theory</h1>
      <hr />
      <h2>
        <a href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_blank" rel="noreferrer">Memo</a>
      </h2>
      <ul>
        <li>
          Se encarga de memorizan un componente
        </li>
        <li>Lo vuelve a memorizar al momento de que SUS <b>props</b> cambian</li>
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
      <h2>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usecallback"
          target="_blank" rel="noreferrer">useCallback</a>
      </h2>
      <ul>
        <li>
          Memoriza una función, para no volverla a definir en cada render.
        </li>
        <li>Úsalo siempre que se pase una función como <b>prop</b> a un componente memorizado.</li>
        <li>Úsalo siempre que se pase una función como parámetro de un efecto.</li>
      </ul>
      <hr />
      <h2>
        <a href="https://es.reactjs.org/docs/react-api.html#reactmemo"
          target="_blank" rel="noreferrer">useMemo</a>
      </h2>
      <ul>
        <li>
          Memorizar un valor calculado, es decir, el resultado de una función.
        </li>
        <li>Genera propiedades computadas.</li>
        <li>Úsalo en procesos pesados.</li>
      </ul>
      <hr />
      <Counter />
    </div>
  );
}

export default App;
