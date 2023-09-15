import { useState } from "react";
import "./addFrm.css";
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
    const inputValue = e.currentTarget.value;

    setTodoTitle(inputValue);
  };
  const enterCheck = (e) => {
    if (e.keyCode === 13) {
      regist();
    }
  };
  return (
    <div className="todo-frm">
      <input
        type="text"
        placeholder="당신의 엔프피 모먼트를 알려주세여:)"
        className="input"
        value={todoTitle}
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
