import { Link } from "react-router-dom";
import "./memberList.css";

const MemberList = (props) => {
  const memberList = props.memberList;
  return (
    <div className="member-list">
      {memberList.map((member, index) => {
        return <Member key={"member" + index} member={member} />;
      })}
    </div>
  );
};

//멤버
const Member = (props) => {
  const member = props.member;
  const memberNo = String(member.memberNo);

  return (
    <div className="member">
      <div className="focus-main">
        <div className={"circle" + memberNo}>
          <div className="member-img">
            <Link to={memberNo}>
              <img src={member.img}></img>
            </Link>
          </div>
          <div className="member-name">{member.memberName}</div>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
