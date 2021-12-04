import "./App.css";
import { formatText } from "@my-project/library";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{formatText("hinodi text from library")}</p>
      </header>
    </div>
  );
}

export default App;
