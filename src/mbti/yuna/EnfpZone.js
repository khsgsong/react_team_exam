import "./enfpSubMEnu.css";
import "./enfp.css";
import "./todoList.css";

import { useState } from "react";
import AddFrm from "./AddFrm";

import TodoList from "./TodoList";
import ENFPHeader from "./ENFPHeader";

function EnfpZone() {
  let todoNo = 1;
  const [todoList, setTodoList] = useState([
    {
      todoNo: todoNo++,
      todoTitle: "저도 엔프피입돠~!",

      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "친해지고싶어여!!",

      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "오늘도 전 대문자 I 라고 자기전에 느꼈어여^^*",

      isLike: 1,
    },
  ]);

  const changeLike = (todo) => {
    const changeStatus = todo.isLike === 0 ? 1 : 0;
    todo.isLike = changeStatus;
    const newArr = [...todoList];
    setTodoList(newArr);
  };

  const addTodo = (todoTitle) => {
    const todo = {
      todoNo: todoNo++,
      todoTitle: todoTitle,
      isLike: 0,
    };
    const newArr = [...todoList];
    newArr.push(todo);
    setTodoList(newArr);
  };
  const deleteTodo = (todoNo, index) => {
    const newArr = todoList.filter((todo) => {
      return todo.todoNo !== todoNo;
    });

    setTodoList(newArr);
  };

  return (
    <div className="enfp-all-wrap">
      <div className="enfp-info-wrap">
        <ENFPHeader />
        <div className="enfp-title">enfp 모여라~!</div>
        <div className="enfp-contentz">
          <AddFrm addTodo={addTodo} />
          <StarInput />
          <TodoList
            todoList={todoList}
            changeLike={changeLike}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default EnfpZone;
