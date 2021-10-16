import "./job-experience-component.scss";

import Job from "./job";

const JobExperienceComponent = (props) => {
  return (
    <>
      <div className="jobs">
        <h1>Doświadczenie</h1>
        <h2>Doświadczenie zawodowe</h2>

        {props.jobs.map((job) => (
          <Job key={job.id} {...job} />
        ))}
      </div>
    </>
  );
};

export default JobExperienceComponent;
