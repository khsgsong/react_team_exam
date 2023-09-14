import "./enfp.css";
import { Route, Routes } from "react-router-dom";

const EnfpMain = () => {
  return (
    <div className="enfp-all-wrap">
      <h2>ENFP</h2>
      <div className="enfp-content-wrap">
        <div className="enfp-contnent">
          <Routes>
            <Route path="enfpzone" element={}></Route>
            <Route path="enfplover" element={}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default EnfpMain;
