import "./enfpSubMEnu.css";
import { Link } from "react-router-dom";

const enfpSubMenu = () => {
  const activeMemu = (e) => {
    const menu = document.querySelectorAll(".enfp-sub-menu a");
    menu.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="enfp-sub-menu">
      <ul>
        <li>
          <Link to="enfpzone" onClick={activeMemu}>
            ENFP모여라
          </Link>
        </li>
        <li>
          <Link to="enfplover" onClick={activeMemu}>
            ENFP궁합확인
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default enfpSubMenu;
