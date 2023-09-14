import "./member1Intro.css";

const Member1Intro = () => {
  return (
    <div className="s-wrap">
      <div className="s-title">리액션 버튼 고장난 슬기봇</div>
      <div className="s-mbti">ISTJ</div>
      <img className="s-img" src="/img/member1.png" alt=""></img>
      <div className="s-mbit-info">
        <div className="star-rate">
          <span>계획력</span>
          <span className="material-icons">star_rate</span>
        </div>
      </div>
      <div className="s-tag">
        #법 없이도 살아 #승부욕 주의 #노잼 주의(인정 못해)
      </div>
    </div>
  );
};

export default Member1Intro;
