import "../sites.scss";
import malachite1 from "../../../assets/images/websites/malachite/malachite1.png";
import malachite2 from "../../../assets/images/websites/malachite/malachite2.png";
import malachite3 from "../../../assets/images/websites/malachite/malachite3.jpg";

const Malachite = () => {
  return (
    <div className="portfolioSite">
      <h1>
        Projekt pracy inżynierskiej{" "}
        <span className="teal">System magazynowy Malachite</span>
      </h1>
      <p>
        Projekt pracy inżynierskiej pt. System Magazynowy Malachite, to złożone
        oprogramowanie napisane w technologii React.js oraz .NET. Program
        posiada rozbudowaną autoryzację logowania, stałe połączenie z zewnętrzną
        bazą danych, dwujęzykowość, tryb dark/light, wyszukiwarkę. Aplikacja
        docelowo ma obsługiwać wszelkie czynności potrzebne do prowadzenia
        ewidencji magazynowej, pakowania przesyłek itp. Obrona pracy: czerwiec
        2022.
      </p>
      <div className="bigGallery">
        <img src={malachite1}></img>
        <img src={malachite2}></img>
        <img src={malachite3}></img>
      </div>
    </div>
  );
};

export default Malachite;
