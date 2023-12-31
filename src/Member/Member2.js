import "./member2.css";
import { Routes, Route } from "react-router-dom";
import Member2Tab from "./Member2Tab";
import Member2Me from "./Member2Me";
import Member2Int from "./Member2Int";
import Member2Board from "./Member2Board";
import Member2Match from "./Member2Match";
import Member2Header from "./Member2Header";
import { useEffect } from "react";

const Member2 = () => {
  useEffect(() => {
    document.querySelectorAll(".tab a")[0].click();
  }, []);
  return (
    <>
      <Member2Header />
      <Member2Tab />
      <Routes>
        <Route path="me" element={<Member2Me />}></Route>
        <Route path="int" element={<Member2Int />}></Route>
        <Route path="board" element={<Member2Board />}></Route>
        <Route path="match" element={<Member2Match />}></Route>
      </Routes>
    </>
  );
};

export default Member2;
