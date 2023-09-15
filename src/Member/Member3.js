import { useEffect } from "react";
import EnfpSubMenu from "../mbti/yuna/ENFPSubMenu";
import EnfpLover from "../mbti/yuna/EnfpLover";
import EnfpZone from "../mbti/yuna/EnfpZone";
import IamEnfp from "../mbti/yuna/IamEnfp";
import "../mbti/yuna/enfp.css";
import { Route, Routes } from "react-router-dom";
const activeMemu = (e) => {
  const menus = document.querySelectorAll(".enfp-info-title");
  e.currentTarget.classList.add("remove");
};
const EnfpMain = () => {
  // useEffect(() => {
  //   document.querySelectorAll(".enfp-sub-menu a")[0].click();
  // }, []);
  return (
    <div className="enfp-all-wrap">
      <div className="enfp-contnent">
        <EnfpSubMenu />
        <div className="enfp-info-wrap">
          <div className="enfp-info-title">
            <h1>도파민 추구 안절부절 유나봇</h1>
            <h2>ENFP</h2>
            <img src="/img/member3.png"></img>
          </div>
        </div>
        <Routes>
          <Route
            path="iamenfp"
            element={<IamEnfp />}
            onClick={activeMemu}
          ></Route>
          <Route
            path="enfpzone"
            element={<EnfpZone />}
            onClick={activeMemu}
          ></Route>
          <Route
            path="enfplover"
            element={<EnfpLover />}
            onClick={activeMemu}
          ></Route>
        </Routes>
      </div>
      {/* <div className="enfp-info-wrap">
          <div className="enfp-info-title">
            <h1>도파민 추구 안절부절 유나봇</h1>
            <h2>ENFP</h2>
            <img src="/img/member3.png"></img>
          </div>
        </div> */}
    </div>
  );
};
export default EnfpMain;
