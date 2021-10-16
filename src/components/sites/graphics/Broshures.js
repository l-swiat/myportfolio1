import "../sites.scss";
import broszura2 from "../../../assets/images/graphics/broszura/broszura2.jpg";
import broszura3 from "../../../assets/images/graphics/broszura/broszura3.png";
import broszura1 from "../../../assets/images/graphics/broszura/broszura1.jpg";
import broszura4 from "../../../assets/images/graphics/broszura/broszura4.png";
import broszura5 from "../../../assets/images/graphics/broszura/broszura5.jpg";
import broszura6 from "../../../assets/images/graphics/broszura/broszura6.jpg";
import { Carousel } from "react-carousel-minimal";
const Broshures = () => {
  const data = [
    {
      image: broszura1,
      caption: "",
    },
    {
      image: broszura2,
      caption: "",
    },
    {
      image: broszura3,
      caption: "",
    },

    {
      image: broszura4,
      caption: "",
    },
    {
      image: broszura5,
      caption: "",
    },
    {
      image: broszura6,
      caption: "",
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
        Banery i broszury reklamowe <span className="teal">bestbiuro.pl</span>
      </h1>
      <p>
        Wybrane banery reklamowe, ulotki itp. stworzone między innymi dla sklepu
        internetowego bestbiuro.pl
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

export default Broshures;
