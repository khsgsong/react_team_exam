import { Link } from "react-router-dom";
import "./member5sideMenu.css";

const Member5sideMenu = () => {
  const activeMenu = (e) => {
    const menus = document.querySelectorAll(".member5-side-menu a");
    menus.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="member5-side-menu">
      <ul>
        <li>
          <Link to="jMbti" onClick={activeMenu}>
            ESFP 소개
          </Link>
        </li>
        <li>
          <Link to="jBoard" onClick={activeMenu}>
            ESFP 모여라
          </Link>
        </li>
        <li>
          <Link to="jMate" onClick={activeMenu}>
            ESFP와 최고의 케미는?
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Member5sideMenu;
