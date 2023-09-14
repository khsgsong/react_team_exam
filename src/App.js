import { Route, Routes } from "react-router-dom";
import Main from "./common/Main";
import Member from "./common/Member";
import Infp from "./mbti/JaeWookComponent/Infp";

function App() {
  return (
    <div className="wrap">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/member" element={<Member />}></Route>
        {/* 임시재욱MBTI이동 */}
        <Route path="/infp" element={<Infp></Infp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
