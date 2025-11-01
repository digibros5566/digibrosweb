
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Client = () =>{
  const logos = [
  { logo: "/arar.png" },
  { logo: "/anuj.png" },
  { logo: "/goldenstar.png" }
];

    const logoSettings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
    {
      breakpoint: 992, // tablets
      settings: {
        slidesToShow: 3,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 2,
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 480, // very small mobile
      settings: {
        slidesToShow: 1,
        centerPadding: "40px",
      },
    },
  ],
      };

    return(
        <section
                id="work"
                style={{
                //   background: "#0b0014",
                  padding: "80px 0",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <h2 style={{ color: "#c084fc", marginBottom: "20px" }}>
                  Our Clients
                </h2>
                <p style={{ color: "#aaa", marginBottom: "40px" }}>
                  Trusted by brands who believe in growth.
                </p>
                <div className="client_logo" >
                  <Slider {...logoSettings} >
                    {logos.map((w, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={w.logo}
                          alt="Client Logo"
                          style={{
                            width: "150px",
                            height: "100px",
                            objectFit: "contain",
                            filter: "drop-shadow(0 0 5px rgba(192,132,252,0.7))",
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </section>
    )
}

export default Client;