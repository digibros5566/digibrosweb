import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  return (
    <section
      id="services"
      style={{
        padding: "80px 0",
        //   background: "linear-gradient(180deg, #120024, #1a002f)",
        color: "white",
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 style={{ color: "#c084fc" }}>Our Services</h2>
          <p style={{ color: "#aaa" }}>
            End-to-end marketing services to turn traffic into customers.
          </p>
        </div>
        <Row id="service-content">
          {[
            {
              title: "Branding & Design",
              text: "We design brands that turn heads and win hearts — creative, bold, and unforgettable.Let your brand speak volumes with a design that truly sets you apart.",
            },
            {
              title: "Social Media Marketing",
              text: "We turn your social presence into profit with creative strategies that spark engagement.Build a loyal community and make your brand the talk of every platform.",
            },
            {
              title: "Digital Marketing",
              text: "We craft high-converting ad campaigns that reach the right audience at the right time.Drive clicks, leads, and sales — while making every rupee count.",
            },
            {
              title: "Content Creation",
              text: "We create scroll-stopping content that connects, converts, and inspires your audience.Every post, photo, and video tells your brand’s unique story with impact.",
            },
            {
              title: "Web Design",
              text: "We design stunning, user-friendly websites that turn visitors into customers.Modern, fast, and built to make your brand shine online.",
            },
            {
              title: "SEO",
              text: "We boost your visibility and put your brand on top of Google’s spotlight.More traffic, more leads, and more growth — organically.",
            },
          ].map((service, i) => (
            <Col md={4} className="mb-4" key={i}>
              <div
                className="services"
                style={{
                  backgroundColor: "#1a10242f",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  padding: "25px",
                  textAlign: "center",
                  boxShadow: "0 0 15px rgba(138,43,226,0.3)",
                  transition: "0.3s",
                  height: "250px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 25px rgba(138,43,226,0.6)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(138,43,226,0.3)")
                }
              >
                <h5
                  style={{
                    color: "#c084fc",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {service.title}
                </h5>
                <p
                  style={{
                    color: "#bbb",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  {service.text}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
