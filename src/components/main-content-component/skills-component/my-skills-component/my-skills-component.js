import "./my-skills-component.scss";
import Skill from "./skill";
const MySkillsComponent = (props) => {
  return (
    <div className="mySkills">
      <h2>Umiejętności</h2>
      <div className="mainskills">
        {props.skills.map((skill) => (
          <Skill key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default MySkillsComponent;
