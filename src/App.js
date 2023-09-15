import { Route, Routes } from "react-router-dom";
import Main from "./common/Main";
import Member from "./common/Member";
import Member1 from "./Member/Member1";
import Member2 from "./Member/Member2";
import Member3 from "./Member/Member3";
import Member4 from "./Member/Member4";
import Member5 from "./Member/Member5";

function App() {
  return (
    <div className="wrap">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/member" element={<Member />}></Route>
        <Route path="/member/1/*" element={<Member1 />}></Route>

        <Route path="/member/2/*" element={<Member2 />}></Route>
        <Route path="/member/3/*" element={<Member3 />}></Route>

        <Route path="/member/4/*" element={<Member4 />}></Route>
        <Route path="/member/5/*" element={<Member5 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
