import "./member2Me.css";

const Member2Me = () => {
  return (
    <>
      <div className="main-img">
        <div className="name">
          <span>고집만렙 명훈봇</span>
        </div>
        <div className="type">
          <span>INTJ</span>
        </div>
        <img src="/img/intj-img.png"></img>
        <div className="info">
          <div className="name">이름 : 최명훈</div>
          <div className="myBirthday">생년월일 : 1991.02.05</div>
          <div className="blood-type">혈액형 : AB형</div>
          <div className="myContent">사는곳 : 김포</div>
        </div>
      </div>
    </>
  );
};

export default Member2Me;
