import "./copyright-component.scss";
import moment from "moment";
const Copyright = () => {
  const date = moment().year();
  return (
    <div className="copyright">
      Aplikacja stworzona przez <span className="teal">Łukasza Świat</span>,
      technologia: <span className="teal">React.JS</span>. Copyright{" "}
      <span className="teal"> {date}</span>
      <br />
      Kod źródłowy dostępny pod adresem:{" "}
      <a target="_blank" href="https://github.com/l-swiat/myportfolio1">
        GITHUB
      </a>
    </div>
  );
};

export default Copyright;
