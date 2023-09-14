import { Link } from "react-router-dom";

const JaeWookSideMenu = () => {
  return (
    <div className="jaeWook-side-menu">
      <ul>
        <li>
          <Link to="infp">INFP를 소개합니다.</Link>
        </li>
        <li>모여라 todo</li>
        <li>잘맞는 mbti는?</li>
      </ul>
    </div>
  );
};

export default JaeWookSideMenu;
