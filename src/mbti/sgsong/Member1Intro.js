import { useState } from "react";
import "./member1Intro.css";

const Member1Intro = () => {
  const [characterList, setCharacterList] = useState([
    {
      character: "계획력",
      star: 5,
    },
    {
      character: "눈치력",
      star: 4,
    },
    {
      character: "리액션",
      star: 1,
    },
    {
      character: "꼼꼼함",
      star: 5,
    },
  ]);
  return (
    <div className="s-wrap">
      <div className="s-title">리액션 버튼 고장난 슬기봇</div>
      <div className="s-mbti">ISTJ</div>
      <img className="s-img" src="/img/member1.png" alt=""></img>
      <CharacterList characterList={characterList} />
      <div className="s-tag">#안경이_본캐 #집중력 #현실적 #노잼 주의(ㅠ)</div>
      <div className="s-info">
        1. 약속 어기는 걸 싫어해요 <br></br>
        2. 휴일에는 집에서 주로 지내요 <br></br>
        3. 창의력은 없으니까 명령값을 입력해주세요 <br></br>
        4. 현실 조언이 필요하면 찾아주세요 <br></br>
        5. 갑작스러운 변화는 싫어해요 <br></br>
        6. 누가봐도 철처한 계획쟁이 <br></br>
        7. 생각이 너무 많음 <br></br>
        8. 사람 많은 곳에 가면 기 빨려요 <br></br>
        9. 조용히 혼자 처리하는 걸 좋아해요 <br></br>
        10. 책임감이 강하고 근면성실해요
      </div>
    </div>
  );
};

const CharacterList = (props) => {
  const characterList = props.characterList;
  return (
    <div className="s-character">
      {characterList.map((character, index) => {
        return (
          <div className="star-rate" key={"character" + index}>
            <span>{character.character}</span>
            <Star star={character.star} />
          </div>
        );
      })}
    </div>
  );
};

const Star = (props) => {
  const star = props.star;
  const arr = new Array();
  for (let i = 0; i < star; i++) {
    arr.push(
      <span key={"star" + i} className="material-icons">
        star_rate
      </span>
    );
  }
  return arr;
};

export default Member1Intro;
