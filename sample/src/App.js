import './App.css';

function App() {
  let name = 'Daniel';
  const mapper = [
    'mexico',
    'usa',
    'spain'
  ];

  return (
    // React Fragment
    <>
      <h1>hello</h1>
      <p>{name !== '' ? name : 'who are you?'}!</p>
      <label htmlFor="name">Name</label>
      <input id="name" className="input"></input>
      <ul>
        {
          mapper.map(
            // arrow inline function means a RETURN
            (mp, index) => (
              // we need to add index for good practices (element, index = key)
              <li key={index}>{mp}</li>
            )
          )
        }
      </ul>
    </>
  );
}

export default App;
