import { Link } from "react-router-dom";

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
  console.log(memberNo);
  return (
    <div className="member">
      <div className="member-img">
        <Link to={memberNo}>
          <img src={member.img}></img>
        </Link>
      </div>
      <div className="member-name">{member.memberName}</div>
    </div>
  );
};

export default MemberList;
