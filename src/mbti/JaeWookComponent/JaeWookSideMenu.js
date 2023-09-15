import { Link } from "react-router-dom";
import "./jaeWookSideMenu.css";

const JaeWookSideMenu = () => {
  return (
    <div className="jaeWook-side-menu">
      <ul>
        <li>
          <Link to="infpIntroduce">INFP를 소개합니다.</Link>
        </li>
        <li>
          <Link to="infpAssemble">모여라!! INFP</Link>
        </li>
        <li>
          <Link to="infpCombi">잘맞는 mbti는?</Link>
        </li>
      </ul>
    </div>
  );
};

export default JaeWookSideMenu;
