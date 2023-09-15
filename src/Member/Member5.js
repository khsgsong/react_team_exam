import { Route, Routes } from "react-router-dom";
import Member5Mbti from "../mbti/jeongah/Member5Mbti";
import Member5Board from "../mbti/jeongah/Member5Board";
import Member5Mate from "../mbti/jeongah/Member5Mate";
import Member5SideMenu from "../mbti/jeongah/Member5sideMenu";
import { useEffect } from "react";
import "./member5.css";

const Member5 = () => {
  useEffect(() => {
    document.querySelectorAll(".member5-side-menu a")[0].click();
  }, []);
  return (
    <div className="member5-all-wrap">
      <h2>한정아 입니다</h2>
      <hr></hr>
      <div className="member5-content-wrap">
        <Member5SideMenu />
        <div className="member5-content">
          <Routes>
            <Route path="jMbti" element={<Member5Mbti />}></Route>
            <Route path="jBoard" element={<Member5Board />}></Route>
            <Route path="jMate" element={<Member5Mate />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Member5;
