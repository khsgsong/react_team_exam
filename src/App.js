import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>팀프로젝트 테스트</p>
        <Link
          className="App-link"
          to="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn react
        </Link>
        <a className="App-link" href="https://reactjs.org">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
