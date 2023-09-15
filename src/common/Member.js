import { useState } from "react";
import MemberList from "./MemberList";
import "./memberList.css";

const Member = () => {
  const [memberList, setMemberList] = useState([
    {
      memberNo: 1,
      memberName: "송슬기",
      img: "/img/member1.png",
    },
    {
      memberNo: 2,
      memberName: "최명훈",
      img: "/img/member2.png",
    },
    {
      memberNo: 3,
      memberName: "이유나",
      img: "/img/member3.png",
    },
    {
      memberNo: 4,
      memberName: "유재욱",
      img: "/img/member4.png",
    },
    {
      memberNo: 5,
      memberName: "한정아",
      img: "/img/member5.png",
    },
  ]);

  return (
    <div className="content">
      <h2>멤버를 클릭해 주세요</h2>
      <MemberList memberList={memberList} />
    </div>
  );
};

export default Member;
