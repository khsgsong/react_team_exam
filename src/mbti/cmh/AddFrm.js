import { useState } from "react";
import "./addFrm.css";

const AddFrm = (props) => {
  const addBoard = props.addBoard;
  const [boardTitle, setBoardTitle] = useState("");

  const regist = () => {
    if (boardTitle !== "") {
      addBoard(boardTitle);
      setBoardTitle("");
    }
  };

  const changeTitle = (e) => {
    const inputValue = e.currentTarget.value;
    setBoardTitle(inputValue);
  };

  const enterCheck = (e) => {
    if (e.keyCode === 13) {
      regist();
    }
  };

  return (
    <div className="board-frm">
      <input
        type="text"
        className="input"
        value={boardTitle}
        onChange={changeTitle}
        onKeyUp={enterCheck}
      ></input>
      <button className="btn" onClick={regist}>
        등록하기
      </button>
    </div>
  );
};

export default AddFrm;
