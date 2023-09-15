import { useState } from "react";
import Member5boardFrm from "./member5BoardFrm";
import Member5boardList from "./Member5BoardList";
import "./member5board.css";

function App() {
  let todoNo = 1;
  const [todoList, setTodoList] = useState([
    {
      todoNo: todoNo++,
      todoTitle: "javascript 복습하기",
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "react 복습하기",
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "이력서 복습하기",
      isLike: 1,
    },
  ]);

  const changeLike = (todo) => {
    const changeStatus = todo.isLike === 0 ? 1 : 0;
    todo.isLike = changeStatus;
    const newArr = [...todoList];
    setTodoList(newArr);
  };

  const changeDone = (todo) => {
    todo.isDone = 1;
    const newArr = [...todoList];
    setTodoList(newArr);
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
    console.log(todoNo);
    console.log(index);
    //방법 1
    const newArr = todoList.filter((todo) => {
      return todo.todoNo != todoNo;
    });
    setTodoList(newArr);
    /*
   //방법2
    const newArr = [...todoList];
    //newArr에서 todoNo or index  를 이용해서 해당하는 객체를 삭제
    newArr.splice(index, 1);
    setTodoList(newArr);
    */
  };

  return (
    <div className="wrap">
      <Member5boardFrm addTodo={addTodo} />
      <Member5boardList
        todoList={todoList}
        changeLike={changeLike}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
