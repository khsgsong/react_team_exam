import "./member2.css";
import { Routes, Route } from "react-router-dom";
import Member2Tab from "./Member2Tab";
import Member2Me from "./Member2Me";
import Member2Int from "./Member2Int";
import Member2Board from "./Member2Board";
import Member2Match from "./Member2Match";

const Member2 = () => {
  return (
    <>
      <Member2Tab />
      <div className="content">
        <Routes>
          <Route path="me" element={<Member2Me />}></Route>
          <Route path="int" element={<Member2Int />}></Route>
          <Route path="board" element={<Member2Board />}></Route>
          <Route path="match" element={<Member2Match />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Member2;
