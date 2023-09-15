import { useState } from "react";

const AddFrm = (props) => {
  const addTodo = props.addTodo;
  const [todoTitle, setTodoTitle] = useState("");
  const regist = () => {
    if (todoTitle !== "") {
      addTodo(todoTitle);

      setTodoTitle("");
    }
  };
  const changeTitle = (e) => {
    // e.currentTarget : 해당 이벤트를 발생시킨 엘리먼트
    const inputValue = e.currentTarget.value;
    setTodoTitle(inputValue);
  };
  const enterCheck = (e) => {
    if (e.keyCode === 13) {
      regist();
    }
  };
  return (
    <div className="member5-frm">
      <input
        type="text"
        className="input"
        value={todoTitle}
        onChange={changeTitle}
        onKeyUp={enterCheck}
      ></input>
      <button className="btn" onClick={regist}>
        입력
      </button>
    </div>
  );
};
export default AddFrm;
