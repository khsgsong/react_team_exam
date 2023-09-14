import { Routes, Route } from "react-router-dom";
import "./member1.css";
import Member1SideMenu from "../mbti/sgsong/Member1SideMenu";
import Member1Intro from "../mbti/sgsong/Member1Intro";
import Member1Board from "../mbti/sgsong/Member1Board";
import Member1Chemi from "../mbti/sgsong/Member1Chemi";
import { useEffect } from "react";

const Member1 = () => {
  useEffect(() => {
    document.querySelectorAll(".member1-side-menu a")[0].click();
  }, []);
  return (
    <div className="member1-all-wrap">
      <h2>세상의 소금형 ISTJ</h2>
      <hr></hr>
      <div className="member1-content-wrap">
        <Member1SideMenu />
        <div className="member1-content">
          <Routes>
            <Route path="introduce" element={<Member1Intro />}></Route>
            <Route path="board" element={<Member1Board />}></Route>
            <Route path="chemistry" element={<Member1Chemi />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Member1;
