
import {
  Container,
  Row,
  Col,

} from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () =>{

     // Hero video slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
  };

    return(
        <section className="hero" style={{ position: "relative" }}>
                <Slider {...settings}>
                  <div>
                    <div
                      style={{
                        position: "relative",
                        height: "100vh",
                        overflow: "hidden",
                      }}
                    >
                      {/* <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          zIndex: -1,
                        }}
                      >
                        <source
                          src={`${process.env.PUBLIC_URL}/3125396-uhd_3840_2160_25fps.mp4`}
                          type="video/mp4"
                        />
                      </video> */}
                    </div>
                  </div>
                </Slider>
        
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    // background:
                    //   "linear-gradient(180deg, rgba(60,0,90,0.8), rgba(10,0,20,0.9))",
                    zIndex: 1,
                  }}
                >
                  <Container
                    className="py-5 mt-5"
                    style={{ position: "relative", zIndex: 2 , margintop:"100px" }}
                  >
                    <Row id="hero" className="align-items-center">
                      <Col md={7} xs={12} id="hero-text" >
                        <span
                          style={{
                            background: "rgba(141, 139, 139, 0.1)",
                            backdropFilter:"blur(8px)",
                            color: "#c084fc",
                            fontWeight: "700",
                            fontSize:"17px",
                            borderRadius: "25px",
                            padding: "10px 15px",
                            display: "inline-block",
                          }}
                        >
                          Digital Marketing Agency
                        </span>
                        <h1
                          style={{
                            color: "#fff",
                            fontWeight: "bold",
                            marginTop: "20px",
                            textShadow: "0 0 20px rgba(192,132,252,0.7)",
                            paddingBottom:"15px",
                          }}
                        >
                          We grow brands with performance marketing & creative strategy
                        </h1>
                        <p style={{ color: "#bbb", fontSize: "1.1rem" , paddingBottom:"15px", }}>
                          SEO, Paid Ads, Social Media, and Web Design — tailored
                          strategies that increase traffic, leads, and revenue.
                        </p>
                        <ScrollLink
                          to="contact"
                          smooth
                          offset={-70}
                          duration={500}
                          className="btn me-2"
                          style={{
                            background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                            color: "white",
                            border: "none",
                            fontWeight: "600",
                            boxShadow: "0 0 15px #6a11cb",
                            padding:"14px",
                          }}
                        >
                          Request a Free Audit
                        </ScrollLink>
                        <ScrollLink
                          to="work"
                          smooth
                          offset={-70}
                          duration={500}
                          className="btn"
                          style={{
                            background: "transparent",
                            border: "1px solid #c084fc",
                            color: "#c084fc",
                            fontWeight: "600",
                            padding:"14px",
                          }}
                        >
                          See our Work
                        </ScrollLink>
                      </Col>
                      <Col md={5} xs={12} id="hero-img"  >
                        <img src="./dglogo.png" alt="digital marketing" width={600} height={500} />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </section>
        
    )
}

export default Hero;