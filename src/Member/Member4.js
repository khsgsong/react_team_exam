import { Route, Routes } from "react-router-dom";
import JaeWookSideMenu from "../mbti/JaeWookComponent/JaeWookSideMenu";
import "./member4.css";
import InfpIntroduce from "../mbti/JaeWookComponent/InfpIntroduce";
import InfpAssemble from "../mbti/JaeWookComponent/InfpAssemble";
import InfpAddFrm from "../mbti/JaeWookComponent/InfpAddFrm";
import InfpList from "../mbti/JaeWookComponent/InfpList";
import InfpCombi from "../mbti/JaeWookComponent/InfpCombi";

const Main = () => {
  return (
    <div className="content">
      <div className="jaeWook-content-wrap">
        <h1>INFP</h1>
        <hr></hr>
        <JaeWookSideMenu></JaeWookSideMenu>
        <div className="jaeWook-content">
          <Routes>
            <Route
              path="infpIntroduce"
              element={<InfpIntroduce></InfpIntroduce>}
            ></Route>
            <Route path="infpAssemble" element={<InfpAssemble />}></Route>
            <Route path="infpAddFrm" element={<InfpAddFrm />}></Route>
            <Route path="infpList" element={<InfpList />}></Route>
            <Route path="infpCombi" element={<InfpCombi />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Main;
