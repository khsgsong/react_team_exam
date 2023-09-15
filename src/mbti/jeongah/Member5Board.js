import { useState } from "react";
import Member5boardFrm from "./member5BoardFrm";
import Member5boardList from "./Member5BoardList";
import "./member5board.css";

function App() {
  let todoNo = 1;
  const [todoList, setTodoList] = useState([
    {
      todoNo: todoNo++,
      todoTitle: "ESFP 친목 좋아용!",
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "안녕하세요 ㅎㅎ",
      isLike: 0,
    },
    {
      todoNo: todoNo++,
      todoTitle: "ESFP 여러분 오늘 점심은 뭐먹었어요!?!?",
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
    <div className="member5-wrap">
      <div className="member5-board-title">
        <h2>ESFP!! 어서오세용!</h2>
      </div>
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
