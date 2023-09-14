import { Route, Routes } from "react-router-dom";
import Main from "./common/Main";
import Member from "./common/Member";

function App() {
  return (
    <div className="wrap">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/member/*" element={<Member />}></Route>
      </Routes>
    </div>
  );
}

export default App;
