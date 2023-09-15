import { Link } from "react-router-dom";
import "./jaeWookSideMenu.css";

const JaeWookSideMenu = () => {
  const activeMenu = (e) => {
    const menus = document.querySelectorAll(".jaeWook-side-menu a");
    menus.forEach((item) => {
      item.classList.remove("active");
    });
    // e는 이벤트를발생시킨 a태그하나
    e.currentTarget.classList.add("active");
  };

  return (
    <div className="jaeWook-side-menu">
      <ul>
        <li>
          <Link to="infpIntroduce" onClick={activeMenu}>
            INFP를 소개합니다.
          </Link>
        </li>
        <li>
          <Link to="infpAssemble" onClick={activeMenu}>
            모여라!! INFP
          </Link>
        </li>
        <li>
          <Link to="infpCombi" onClick={activeMenu}>
            잘맞는 mbti는?
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default JaeWookSideMenu;
