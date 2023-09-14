import "./infpList.css";

const InfpList = (props) => {
  const infpList = props.infpList;
  const changeLike = props.changeLike;
  const infpDone = props.infpDone;
  const deleteInfp = props.deleteInfp;
  return (
    <div className="infp-list">
      {infpList.map((infp, index) => {
        return (
          <Infp
            key={"infp" + index}
            infp={infp}
            changeLike={changeLike}
            infpDone={infpDone}
            deleteInfp={deleteInfp}
            // 인덱스 안쓰려면 안쓰는것도 가능
            index={index}
          ></Infp>
        );
      })}
    </div>
  );
};

const Infp = (props) => {
  const infp = props.infp;
  const changeLike = props.changeLike;
  const infpDone = props.infpDone;
  const deleteInfp = props.deleteInfp;
  //인덱스 안쓰려면 안쓰는것도 가능
  const index = props.index;
  console.log(infp);

  return (
    <ul>
      <li className="likes">
        <span
          className="material-icons like-icon"
          onClick={() => {
            changeLike(infp);
          }}
        >
          {infp.isLike === 0 ? "favorite_border" : "favorite"}
        </span>
      </li>
      {infp.isDone === 0 ? (
        <li className="text">{infp.infpTitle}</li>
      ) : (
        <li className="text done-text">{infp.infpTitle}</li>
      )}
      <li className="done">
        {infp.isDone === 0 ? (
          <span
            className="material-icons done-icon"
            onClick={() => {
              infpDone(infp);
            }}
          >
            check_circle
          </span>
        ) : (
          ""
        )}

        <span
          className="material-icons remove-icon"
          onClick={() => {
            deleteInfp(infp.infpNo, index);
          }}
        >
          delete_forever
        </span>
      </li>
    </ul>
  );
};

export default InfpList;
