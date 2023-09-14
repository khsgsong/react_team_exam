import { Route, Routes } from "react-router-dom";
import JaeWookSideMenu from "../mbti/JaeWookComponent/JaeWookSideMenu";
import "./member4.css";
import Infp from "../mbti/JaeWookComponent/Infp";

const Main = () => {
  return (
    <div className="content">
      <h1>임시제목 재욱</h1>
      <JaeWookSideMenu></JaeWookSideMenu>
      <div className="jaeWook-content">
        <Routes>
          <Route path="infp" element={<Infp></Infp>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
