import { useState } from "react";
import "./member5mbti.css";

const Member5Mbti = () => {
  const [characterList, setCharacterList] = useState([
    {
      character: "계획력",
      star: 1,
    },
    {
      character: "눈치력",
      star: 5,
    },
    {
      character: "리액션",
      star: 5,
    },
    {
      character: "꼼꼼함",
      star: 3,
    },
  ]);
  return (
    <div className="s-wrap">
      <div className="s-title">노는게 제일 좋아~ 친구들 모여라~</div>
      <div className="s-mbti">ESFP</div>
      <img className="s-img" src="/img/member5.png" alt=""></img>
      <CharacterList characterList={characterList} />
      <br></br>
      <div className="s-tag">#놀자 #모이자 #맛있는거 </div>
      <br></br>
      <div className="s-info">
        1. 잘 먹고, 잘 자고, 생각이 단순하다. 고민하다가 그냥 잠들어요 <br></br>
        2. 무계획적이고 충동적인 여행을 즐겨요 <br></br>
        3. 인생이 즐거워요 <br></br>
        4. 집에 혼자 있는 것이 답답해요 <br></br>
        5. 좋아하는 사람과 싫어하는 사람이 분명해요 <br></br>
        6. 사교성이 좋아요 <br></br>
        7. 행복도가 높아요 <br></br>
        8. 내향적인 사람들과도 잘 어울려요 <br></br>
        9. 귀가 얇아요 <br></br>
        10. 오감 발달과 인지 능력이 발달되어 있어요
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

export default Member5Mbti;
