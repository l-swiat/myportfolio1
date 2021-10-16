const Job = (props) => {
  return (
    <div className="job">
      <div className="left">
        <h3 className="teal">{props.name}</h3>
        <p>{props.workplace}</p>
        <p>
          <i>{props.date}</i>
        </p>
        <p>{props.duties}</p>
      </div>
      <div className="right">
        <img src={props.image}></img>
      </div>
    </div>
  );
};
export default Job;
