import { useState } from "react";
import "./member1Chemi.css";

const Member1Chemi = () => {
  const [chemiList, setChemiList] = useState([
    {
      chemiNo: 1,
      mbti: "ENFP",
      comment: "상극으로 보이지만 괜찮아",
      img: "/img/ISTJ-ENFP.jpg",
    },
    {
      chemiNo: 2,
      mbti: "ENTP",
      comment: "대환장 조합(2위 맞아..?)",
      img: "/img/ISTJ-ENTP.jpg",
    },
    {
      chemiNo: 3,
      mbti: "ISFP",
      comment: "서로를 존중해요(짤이 없어요..)",
      img: "/img/ISTJ-ISFP.png",
    },
  ]);
  return (
    <div className="s-wrap">
      <div className="s-title">ISTJ와 최고의 케미는?</div>
      <img src="/img/ISTJ최고의궁합.png" className="s-istj-img" alt=""></img>
      <div className="s-title">
        축하합니다
        <span class="material-icons gold">celebration</span>
      </div>
      <ChemiList chemiList={chemiList} />
    </div>
  );
};

const ChemiList = (props) => {
  const chemiList = props.chemiList;
  return chemiList.map((chemi, index) => {
    return (
      <div className="s-chemi" key={"chemi" + index}>
        <div className="s-rank">
          <span>{chemi.chemiNo}</span>
          <span>위</span>
          <span class="padding-left">{chemi.mbti}</span>
          <span class="padding-left">{chemi.comment}</span>
        </div>
        <img className="s-chemi-img" src={chemi.img}></img>
      </div>
    );
  });
};

export default Member1Chemi;
