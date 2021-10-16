import "../sites.scss";
import logo2 from "../../../assets/images/graphics/logo/logo2.png";
import logo3 from "../../../assets/images/graphics/logo/logo3.jpg";
import logo1 from "../../../assets/images/graphics/logo/logo1.jpg";
import logo4 from "../../../assets/images/graphics/logo/logo4.png";
import logo5 from "../../../assets/images/graphics/logo/logo5.jpg";
import logo6 from "../../../assets/images/graphics/logo/logo6.jpg";
import logo7 from "../../../assets/images/graphics/logo/logo7.jpg";
import logo8 from "../../../assets/images/graphics/logo/logo8.jpg";
import { Carousel } from "react-carousel-minimal";
const Logos = () => {
  const data = [
    {
      image: logo1,
      caption: "Studio Elegancko",
    },
    {
      image: logo2,
      caption: "Moving Pictures",
    },
    {
      image: logo3,
      caption: "Best Biuro",
    },

    {
      image: logo4,
      caption: "BNL",
    },
    {
      image: logo5,
      caption: "Wizualne",
    },
    {
      image: logo6,
      caption: "Podoreflex",
    },
    {
      image: logo7,
      caption: "Perfekt",
    },
    {
      image: logo8,
      caption: "Malachite",
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
      <h1>Logotypy</h1>
      <p>Poniżej wybrane logotypy stworzone przeze mnie</p>

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
        slideImageFit="contain"
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

export default Logos;
