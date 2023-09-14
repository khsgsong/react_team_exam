import "./member2Me.css";

const Member2Me = () => {
  return (
    <>
      <div className="main-img">
        <div className="name">
          <span>인류애 박살 명훈봇</span>
        </div>
        <div className="type">
          <span>INTJ</span>
        </div>
        <img src="/img/intj-img.png"></img>
        <div className="info">
          <div className="name">이름 : 최명훈</div>
          <div className="생년월일">생년월일 : 1991.02.05</div>
          <div className="혈액형">혈액형 : AB형</div>
        </div>
      </div>
    </>
  );
};

export default Member2Me;
