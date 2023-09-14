import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>5조 멤버들의 MBTI를 알려드립니다!</p>
        <Link to="/member">Let's Go!</Link>
        <div>
          <Link to="/infp">재욱 MBIT로 임시이동</Link>
        </div>
      </header>
    </div>
  );
};

export default Main;
