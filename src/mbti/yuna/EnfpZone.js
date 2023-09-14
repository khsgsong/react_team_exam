import "./enfpSubMEnu.css";
import "./enfp.css";
import "./todoList.css";

import { useState } from "react";
import AddFrm from "./AddFrm";

import TodoList from "./TodoList";

function EnfpZone() {
  let todoNo = 1;
  const [todoList, setTodoList] = useState([
    {
      todoNo: todoNo++,
      todoTitle: "javascript 복습하기",
      isDone: 1,
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "react 복습하기",
      isDone: 0,
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "이력서 쓰기",
      isDone: 0,
      isLike: 1,
    },
  ]);

  const changeLike = (todo) => {
    const changeStatus = todo.isLike === 0 ? 1 : 0;
    todo.isLike = changeStatus;
    const newArr = [...todoList];
    setTodoList(newArr);
  };
  const todoDone = (todo) => {
    todo.isDone = 1;
    setTodoList([...todoList]);
  };
  const addTodo = (todoTitle) => {
    const todo = {
      todoNo: todoNo++,
      todoTitle: todoTitle,
      isDone: 0,
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
    <div className="wrap">
      <AddFrm addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        changeLike={changeLike}
        todoDone={todoDone}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default EnfpZone;
