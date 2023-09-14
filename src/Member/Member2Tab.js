import "./member2Tab.css";
import { Link } from "react-router-dom";

const Member2Tab = () => {
  return (
    <>
      <div className="wrap">
        <div className="title-wrap">
          <h1 className="title">INTJ</h1>
        </div>

        <div className="tab">
          <ul>
            <li>
              <Link to="me">나</Link>
            </li>
            <li>
              <Link to="int">INTJ 소개</Link>
            </li>
            <li>
              <Link to="board">INTJ 여기 모여라!</Link>
            </li>
            <li>
              <Link to="match">다른 MBTI와의 궁합은?</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Member2Tab;
