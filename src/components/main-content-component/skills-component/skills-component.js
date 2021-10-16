import JobExperienceComponent from "./job-experience-component/job-experience-component";
import MySkillsComponent from "./my-skills-component/my-skills-component";
import "./skills-component.scss";
import "../main-content-component.scss";
const SkillsComponent = (props) => {
  return (
    <div className="mainContent">
      <div className="skills">
        <JobExperienceComponent jobs={props.jobs} />
        <MySkillsComponent skills={props.skills} />
      </div>
    </div>
  );
};

export default SkillsComponent;
