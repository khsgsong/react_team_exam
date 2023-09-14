import "./member2Board.css";
import { useState } from "react";
import AddFrm from "../mbti/cmh/AddFrm";
import BoardList from "../mbti/cmh/BoardList";

const Member2Board = () => {
  let boardNo = 1;
  const [boardList, setBoardList] = useState([
    {
      boardNo: boardNo++,
      boardTitle: "ㅎㅇ",
      isDone: 1,
      isLike: 0,
    },
    {
      boardNo: boardNo++,
      boardTitle: "네",
      isDone: 0,
      isLike: 0,
    },
    {
      boardNo: boardNo++,
      boardTitle: "INTJ",
      isDone: 0,
      isLike: 1,
    },
  ]);

  return (
    <>
      <AddFrm />
      <BoardList boardList={boardList} />
    </>
  );
};

export default Member2Board;
