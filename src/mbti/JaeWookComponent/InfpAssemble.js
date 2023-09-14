import { useState } from "react";
import "./infpAssemble.css";
import InfpAddFrm from "./InfpAddFrm";

const InfpAssemble = () => {
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

  /// 인덱스 안쓰고 깊은복사로 데이터 바꾸는법
  const changeLike = (todo) => {
    // 현재 클릭한 todo 객체가 넘어옴
    console.log(todo);
    const changeStatus = todo.isLike === 0 ? 1 : 0;
    // 기존 객체의 데이터를 바꾸고
    todo.isLike = changeStatus;
    // 변경한 기존 데이터를 깊은복사
    const newArr = [...todoList];
    // 복사한걸 렌더링하게 set 해주기
    setTodoList(newArr);
  };

  const todoDone = (todo) => {
    console.log(todo);
    todo.isDone = 1;
    setTodoList([...todoList]); //위의 changeLike의 과정을 짧게
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
    console.log("todoNo :" + todoNo);
    console.log("index :" + index);

    //newArr에서 todoNo or index를 이용해서 해당하는 객체를 삭제
    // 자바스크립트 04array.js의 splice, 04-1array.js의 filter 참고

    // splice이용하는법 ///db에서 지울때는 index부여가 어려움
    // const newArr = [...todoList];
    // newArr.splice(index, 1);

    //filter이용하는방법 ///db에서 시퀀스번호 쓸거라 필터이용하는방법을 주로 사용
    const newArr = todoList.filter((todo) => {
      return todo.todoNo !== todoNo;
    });

    console.log(newArr);
    setTodoList(newArr);
  };
  return (
    <>
      <div className="header">
        <h1 className="header-title">INFP 모여라~~!!</h1>
      </div>
      <InfpAddFrm></InfpAddFrm>
    </>
  );
};

export default InfpAssemble;
