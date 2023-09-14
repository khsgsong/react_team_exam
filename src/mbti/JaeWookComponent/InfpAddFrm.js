import "./infpAddFrm.css";

const InfpAddFrm = () => {
  return (
    <div className="infp-frm">
      <input
        type="text"
        className="infpInput"
        // value={todoTitle}
        // 리액트에서 change 이벤트는 다름 , 포커스 나갔을때가 아니라 키보드입력값이 변할때마다 (keyup같은거??)
        // input의 글이 바뀔때
        // onChange={changeTitle}
        // 키보드 엔터 눌럿을때
        // onKeyUp={enterCheck}
      ></input>
      <button
        className="btn"
        //   onClick={regist}
      >
        등록하기
      </button>
    </div>
  );
};

export default InfpAddFrm;
