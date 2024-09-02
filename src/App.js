import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";
import CounterApp from "./CounterApp";

function App() {
  return (
    <div className="App">
      <CounterApp value={20} />
    </div>
  );
}

export default App;
