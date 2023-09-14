import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="App">
      <h1>
        <span>5</span>
        <span>조</span>
        <span>멤</span>
        <span>버</span>
        <span>들</span>
        <span>의</span>
        <span>M</span>
        <span>B</span>
        <span>T</span>
        <span>I</span>
        <span>를</span>
        <span>알</span>
        <span>려</span>
        <span>드</span>
        <span>립</span>
        <span>니</span>
        <span>다!</span>
      </h1>
      <div>
        <Link to="/member">Let's Go!</Link>
      </div>
    </div>
  );
};

export default Main;
