import "../sites.scss";
import perfektEtykiety from "../../../assets/images/graphics/Perfekt/formatka-etykiet.jpg";
import perfektToner from "../../../assets/images/graphics/Perfekt/toner-Perfekt-1.jpg";
import perfektPrzekładki from "../../../assets/images/graphics/Perfekt/PRZEKLADKI.jpg";
import perfektLogo from "../../../assets/images/graphics/Perfekt/logoperfekt-1-scaled.jpg";
import { Carousel } from "react-carousel-minimal";

const Perfekt = () => {
  const data = [
    {
      image: perfektEtykiety,
      caption: "Opakowanie etykiet uniwersalnych",
    },
    {
      image: perfektToner,
      caption: "Opakowanie tonerów",
    },
    {
      image: perfektPrzekładki,
      caption: "Opakowanie przekładek",
    },
    {
      image: perfektLogo,
      caption: "Logotyp",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="portfolioSite">
      <h1>
        Projekt opakowań <span className="teal">Perfekt</span>
      </h1>
      <p>
        Projekt szaty wizualnej dla nowej marki własnej Perfekt miał w swoim
        zakresie stworzenie logotypu oraz spójnej kolorystyki i kompozycji dla
        produktów wspomnianego brandu. Logo na życzenie zleceniodawcy mialo być
        wyraźne i techniczne, przybierać barwy charakterystyczne dla firmy oraz
        posiadać znak uniwersalny dla materiałów biurowych. całość przybrała
        eleganckie odcienie granatu i niebieskiego. Projekt stworzony i
        przygotowany do druku w programie Illustrator.
      </p>
      <Carousel
        data={data}
        time={10000}
        width="100%"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
    </div>
  );
};

export default Perfekt;
