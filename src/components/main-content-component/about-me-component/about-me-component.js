import "./about-me-component.scss";
import MyData from "./myDataComponent/myDataComponent";
import Sectors from "./sectors-component/sectors-component";

const AboutMeComponent = () => {
  return (
    <div className="aboutMe">
      <h1>Witaj na moim portfolio!</h1>
      <h2>O mnie</h2>
      <MyData />
      <p>
        Jestem studentem ostatniego roku{" "}
        <span className="teal">
          Informatyki na Uniwersytecie Kazimierza Wielkiego w Bydgoszczy
        </span>
        . Specjalizuję się w grafice oraz tworzeniu stron internetowych. Jedną z
        głównych gałęzi mojej pracy jest kreowanie dedykowanych szablonów
        wykorzystując strukturę <span className="teal"> Wordpress PHP</span>.
        Poza tym wiele czasu poświęcam budowaniu wiedzy z zakresu
        <span className="teal"> React.js</span>. W wolnym czasie również
        rozwijam się kreatywnie produkując muzykę.
      </p>
      <Sectors />
    </div>
  );
};

export default AboutMeComponent;
