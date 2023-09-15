import "./enfpSubMEnu.css";
import "./enfp.css";
import ENFPHeader from "./ENFPHeader";
import { useState } from "react";

const EnfpLover = () => {
  return (
    <div className="enfpLover-wrap">
      <ENFPHeader />
      <div className="enfp-title">enfp궁합보기</div>
      <div className="enfp-content">
        <div className="infoimg-2">
          <img src="/img/enfploveee.jpg"></img>
        </div>

        <div className="infoexpian">
          <p>
            INTJ와 ENFP궁합을 보자면 ENFP가 강아지처럼 다가가고 일을 벌이면
            INTJ가 귀찮아하지만 잘 받아준다. 남에게 관심 없고 혼자 있는 걸
            좋아하는 INTJ의 벽을 허물어 잘 다가가고 어둠을 없애주는, 은근 기쁘게
            해주는 존재가 ENFP여서 INTJ와 ENFP궁합이 좋다. INFJ와 ENFP궁합을
            알아보면 인프제는 엔프피의 즉흥적인 제안을 좋아하고, 엔프피는
            인프제의 이야기를 좋아한다. 엔프피가 열정과 재미로 벌이는 일에
            구체성, 계획을 붙여주는 게 INFJ라고 한다. 다른 성격을 가졌지만
            의외로 잘 맞는 부분이 많은 가치를 두는 일이 동일한 유형이어서
            ENFP궁합과 INFJ궁합이 잘맞고 둘은 서로의 부족한 부분을 보완해 주는
            역할을 해준다. 낯가림이 심한 인프제와 인티제에게 쉽게 다가가는
            사람이 엔프피이고 초반에 말만 잘 튼다면 쉽게 친해질 수 있는
            유형이다.
          </p>
          <p>최고 : INFJ, INTJ</p>
          <p>낫베드 : INFP, ENFP, ENFJ, ENTJ, INTP, ENTP</p>
          <p>최악 : ISFP, ESFP, ISTP, ESTP, ISFJ, ESFJ, ISTJ, ESTJ</p>
        </div>
      </div>
    </div>
  );
};

export default EnfpLover;
