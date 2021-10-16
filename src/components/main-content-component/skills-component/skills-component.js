import JobExperienceComponent from "./job-experience-component/job-experience-component";
import MySkillsComponent from "./my-skills-component/my-skills-component";
import "./skills-component.scss";

const SkillsComponent = (props) => {
  return (
    <div className="skills">
      <JobExperienceComponent jobs={props.jobs} />
      <MySkillsComponent skills={props.skills} />
    </div>
  );
};

export default SkillsComponent;
