import ENFPHeader from "./ENFPHeader";
import "./enfp.css";
{
  /*render() {
  if (window.location.pathname === '/본인이 헤더 등을 숨기고자 하는 주소') return null;
  return <여기에 각자의 렌더 코드를 작성하시면 됩니다>;
} */
}
const IamEnfp = () => {
  return (
    <div className="enfp-all-wrap">
      <div className="enfp-info-wrap">
        {/*<div className="enfp-info-title">
          <h1>도파민 추구 안절부절 유나봇</h1>
          <h2>ENFP</h2>
          <img src="/img/member3.png"></img>
        </div>*/}
        <ENFPHeader/>
        <div className="enfp-title">아이엠 enfp</div>
      </div>
      <div className="enfp-info-content">
        <div className="content">
          <div className="infoimg">
            <img src="/img/enfp.png"></img>
          </div>
          <div className="infoexpian">
            <ul>
              <li>step1. 솔직해서 감정이 얼굴에 그대로 드러난다.</li>
              <li>step2. 인정에 대한 욕구가 강하다.</li>
              <li>step3. 생각과 행동이 독특하다.</li>
              <li>
                step4. 겉으로 볼 때는 걱정이 없어 보이나 의외로 진지하고
                생각이나 고민이 많다.
              </li>
              <li>step5. 계획하기보다는 몰아서 일을 처리하는 편이다.</li>
              <li>step6. 외부 세계에 관심이 많아 새로운 시도를 좋아한다.</li>
              <li>step7. 감정이 상하더라도 회복이 매우 빠르다</li>
              <li>
                step8. 눈치가 빠른편이고 당장 직관적으로 드러나는 분위기 파악을 
                  상당히 잘한다.그럼에도 눈치가 없는 척을 잘한다
              </li>
              <li>step9. 밖에서는 활발하나 집에 오면 조용해진다</li>
              <li>step10. 즐겁게 놀다가도 불현듯 자아성찰을 많이 한다</li>
              <li>step11. 인생을 즐겁게 사는 것에 관심이 많다</li>
              <li>step12. 반복적이고 변화가 없는 일상을 힘들어 한다.</li>
              <li>
                step13. 약속을 자주 잡고 노는 것을 좋아하나 혼자만의 시간도
                필요로 한다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IamEnfp;
