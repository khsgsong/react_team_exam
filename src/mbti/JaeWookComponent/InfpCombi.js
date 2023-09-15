import "./infpCombi.css";

const InfpCombi = () => {
  return (
    <>
      <div className="infp-img-box">
        <img
          className="infp-character"
          src={"/img/member4/infp-character.jpg"}
        ></img>
      </div>
      <div className="infp-img-box">
        <img className="mbti-궁합" src={"/img/member4/mbti-궁합.png"}></img>
      </div>
      <div>천생연분 : ENFJ, ENTJ</div>
      <div>
        INFP와 ENFJ는 서로가 서로를 더 나은 사람으로 만들어 주는 관계입니다.
        둘은 비슷한 관심사와 생각을 가지고 있지만 같은 문제를 이해하는 방식에
        있어서는 약간 차이가 있습니다. 그러한 차이가 서로에게 흥미를 느끼게
        만듭니다. 다만 그 차이로 인해 싸움이 발생할 수도 있습니다. ENFJ는
        ‘언변능숙형’ 답게 말을 무척 조심스럽게 잘하는 성격인데요 INFP가 상처를
        받지 않고 어울릴 수 있는 성격 유형 중 하나입니다. 또한 ENFJ는 불건강한
        INFP를 건강한 모습으로 변화시키는 데에도 능숙한 유형입니다.
      </div>
    </>
  );
};

export default InfpCombi;
