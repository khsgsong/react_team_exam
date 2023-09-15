import "./member2Tab.css";
import { Link } from "react-router-dom";

const Member2Tab = () => {
  const activeMenu = (e) => {
    const menus = document.querySelectorAll(".tab a");
    menus.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <div className="tab">
      <ul>
        <li>
          <Link to="me" onClick={activeMenu}>
            나
          </Link>
        </li>
        <li>
          <Link to="int" onClick={activeMenu}>
            INTJ 소개
          </Link>
        </li>
        <li>
          <Link to="board" onClick={activeMenu}>
            INTJ 여기 모여라!
          </Link>
        </li>
        <li>
          <Link to="match" onClick={activeMenu}>
            다른 MBTI와의 궁합은?
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Member2Tab;
