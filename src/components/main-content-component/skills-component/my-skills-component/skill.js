const Skill = (props) => {
  return (
    <div className="skill">
      <img src={props.image}></img>
      <span>{props.name}</span>
    </div>
  );
};
export default Skill;
