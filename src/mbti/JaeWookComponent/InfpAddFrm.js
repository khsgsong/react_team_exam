import { useState } from "react";
import "./infpAddFrm.css";

const InfpAddFrm = (props) => {
  const addInfp = props.addInfp;

  //state사용

  const [infpTitle, setInfpTitle] = useState(""); //빈문자열 스테이트
  const regist = () => {
    // const input = document.querySelector(".input");
    // const todoTitle = input.value;
    if (infpTitle !== "") {
      //빈 값이 아닐때만 보내기
      addInfp(infpTitle);
      //등록하기누르면 input 깨끗하게 비워주기
      //   input.value = ""; 자바스크립트 문법 대신 set
      setInfpTitle("");
    }
  };

  const changeTitle = (e) => {
    //e : 이벤트객체
    //e.currentTarget; : 해당 이벤트를 발생시킨 엘리먼트 //  this같은 역할
    const inputValue = e.currentTarget.value;
    console.log(inputValue);
    setInfpTitle(inputValue);
  };

  const enterCheck = (e) => {
    if (e.keyCode === 13) {
      //엔터키코드가 13번 //keyup이벤트의 keyCode가 엔터라면
      regist();
    }
  };

  return (
    <div className="infp-frm">
      <input
        type="text"
        className="infpInput"
        value={infpTitle}
        // 리액트에서 change 이벤트는 다름 , 포커스 나갔을때가 아니라 키보드입력값이 변할때마다 (keyup같은거??)
        // input의 글이 바뀔때
        onChange={changeTitle}
        // 키보드 엔터 눌럿을때
        onKeyUp={enterCheck}
      ></input>
      <button className="infp-btn" onClick={regist}>
        등록하기
      </button>
    </div>
  );
};

export default InfpAddFrm;
