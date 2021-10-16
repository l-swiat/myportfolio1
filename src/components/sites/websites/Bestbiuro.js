import "../sites.scss";
import bestbiuro2 from "../../../assets/images/websites/bestbiuro/bestbiuro2.jpg";
import bestbiuro3 from "../../../assets/images/websites/bestbiuro/bestbiuro3.jpg";
import bestbiuro1 from "../../../assets/images/websites/bestbiuro/bestbiuro1.jpg";
import bestbiuro4 from "../../../assets/images/websites/bestbiuro/bestbiuro4.jpg";
import bestbiuro5 from "../../../assets/images/websites/bestbiuro/bestbiuro5.jpg";
import bestbiuro6 from "../../../assets/images/websites/bestbiuro/bestbiuro6.jpg";
import { Carousel } from "react-carousel-minimal";
const Bestbiuro = () => {
  const data = [
    {
      image: bestbiuro1,
      caption: "Strona główna BestBiuro",
    },
    {
      image: bestbiuro2,
      caption: "Strona produktów BestBiuro",
    },
    {
      image: bestbiuro3,
      caption: "Strona produktów BestBiuro",
    },

    {
      image: bestbiuro4,
      caption: "Strona główna Comp-office",
    },
    {
      image: bestbiuro5,
      caption: "Strona produktu Comp-Office",
    },
    {
      image: bestbiuro6,
      caption: "Strona z usługami Comp-Office",
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
        Sklepy internetowe{" "}
        <span className="teal">bestbiuro.pl i compoffice.pl</span>
      </h1>
      <p>
        Sklepy internetowe bestbiuro.pl oraz comp-office.pl zostały stworzone za
        pomocą platformy Shoper. Tematyką tych stron jest sprzedaż materiałów
        biurowych oraz urządzeń sieciowych. Szablony sklepów zostały zakodowane
        od zera korzystając z otwartego kodu Shoper. Na obu platformach
        zaprojektowałem także buttony, slidery i cały content graficzny.
      </p>
      <a target="_blank" href="https://bestbiuro.pl">
        ZOBACZ STRONĘ
      </a>{" "}
      <br />
      <br />
      <a target="_blank" href="https://comp-office.pl">
        ZOBACZ STRONĘ
      </a>
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

export default Bestbiuro;
