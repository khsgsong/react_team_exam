import { Link } from "react-router-dom";
import "./member1SideMenu.css";

const Member1SideMenu = () => {
  const activeMenu = (e) => {
    const menu = document.querySelectorAll(".member1-side-menu a");
    menu.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="member1-side-menu">
      <ul>
        <li>
          <Link to="introduce" onClick={activeMenu}>
            ISTJ 소개
          </Link>
        </li>
        <li>
          <Link to="board" onClick={activeMenu}>
            ISTJ 모여라
          </Link>
        </li>
        <li>
          <Link to="chemistry" onClick={activeMenu}>
            ISTJ와 최고 케미는?
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Member1SideMenu;
