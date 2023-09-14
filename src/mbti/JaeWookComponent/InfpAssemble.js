import { useState } from "react";
import "./infpAssemble.css";
import InfpAddFrm from "./InfpAddFrm";
import InfpList from "./InfpList";

const InfpAssemble = () => {
  let infpNo = 1;

  const [infpList, setInfpList] = useState([
    {
      infpNo: infpNo++,
      infpTitle: "javascript 복습하기",
      isDone: 1,
      isLike: 0,
    },
    {
      infpNo: infpNo++,
      infpTitle: "react 복습하기",
      isDone: 0,
      isLike: 0,
    },
    {
      infpNo: infpNo++,
      infpTitle: "이력서 쓰기",
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
    const newArr = [...infpList];
    // 복사한걸 렌더링하게 set 해주기
    setInfpList(newArr);
  };

  const infpDone = (todo) => {
    console.log(todo);
    todo.isDone = 1;
    setInfpList([...infpList]); //위의 changeLike의 과정을 짧게
  };

  const addTodo = (todoTitle) => {
    const todo = {
      todoNo: infpNo++,
      todoTitle: todoTitle,
      isDone: 0,
      isLike: 0,
    };
    const newArr = [...infpList];
    newArr.push(todo);
    setInfpList(newArr);
  };

  const deleteInfp = (todoNo, index) => {
    console.log("todoNo :" + todoNo);
    console.log("index :" + index);

    //newArr에서 todoNo or index를 이용해서 해당하는 객체를 삭제
    // 자바스크립트 04array.js의 splice, 04-1array.js의 filter 참고

    // splice이용하는법 ///db에서 지울때는 index부여가 어려움
    // const newArr = [...todoList];
    // newArr.splice(index, 1);

    //filter이용하는방법 ///db에서 시퀀스번호 쓸거라 필터이용하는방법을 주로 사용
    const newArr = infpList.filter((todo) => {
      return todo.infpNo !== todoNo;
    });

    console.log(newArr);
    setInfpList(newArr);
  };
  return (
    <>
      <div className="header">
        <h1 className="header-title">INFP 모여라~~!!</h1>
      </div>
      <InfpAddFrm></InfpAddFrm>
      <InfpList
        infpList={infpList}
        changeLike={changeLike}
        infpDone={infpDone}
        deleteInfp={deleteInfp}
      ></InfpList>
    </>
  );
};

export default InfpAssemble;
