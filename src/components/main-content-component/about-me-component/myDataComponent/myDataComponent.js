import moment from "moment";
import "./myDataComponent.scss";

const MyData = () => {
  moment.locale("pl");
  const age = moment().year() - 1994;
  const itSkillTime = moment().year() - 2019;
  const graphicSkillTime = moment().year() - 2016;
  return (
    <div className="myData">
      <span className="teal"> {age} lat</span> /{" "}
      <span className="teal">Bydgoszcz</span> /{" "}
      <span className="teal">W branży IT:</span> {itSkillTime} rok /{" "}
      <span className="teal">W branży graficznej: </span> {graphicSkillTime} rok
    </div>
  );
};
export default MyData;
