import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";
import CounterApp from "./CounterApp";

function App() {
  return (
    <div className="App">
      {/*<FirstApp
        title="Hola Soy Hugo"
        subTitle="Soy el subtitulo de este componente"
  />*/}
      <CounterApp value={100} />
    </div>
  );
}

export default App;
