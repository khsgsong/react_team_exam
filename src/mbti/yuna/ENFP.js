import "./enfp.css";
import { Route, Routes } from "react-router-dom";

const EnfpMain = () => {
  return (
    <div className="enfp-all-wrap">
      <h2>ENFP</h2>
      <div className="enfp-content-wrap">
        <div className="enfp-contnent">
          <Routes>
            <Route path="enfpzone" element={}>ENFP모여라</Route>
            <Route path="enfplover" element={}>ENFP궁합확인</Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};
