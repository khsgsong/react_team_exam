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

  return (
    <div className="member">
      <div className="member-img">
        <img src={member.img}></img>
      </div>
      <div className="member-name">{member.memberName}</div>
    </div>
  );
};

export default MemberList;
