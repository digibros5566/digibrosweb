import { Container, Navbar, Nav } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        background: "rgba(20, 0, 40, 0.28)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(138,43,226,0.4)",
        boxShadow: "0 0 15px rgba(138,43,226,0.5)",
        padding: "15px",
      }}
    >
      <Container>
        <Navbar.Brand
          style={{
            color: "#c084fc",
            fontWeight: "700",
            letterSpacing: "1px",
          }}
        >
          DIGI BROS
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {["home", "services", "work", "contact"].map((id) => (
              <ScrollLink
                key={id}
                to={id}
                smooth
                offset={-70}
                duration={500}
                className="nav-link"
                style={{
                  cursor: "pointer",
                  color: "#eee",
                  marginRight: "15px",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#c084fc")}
                onMouseLeave={(e) => (e.target.style.color = "#eee")}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </ScrollLink>
            ))}
            <ScrollLink
              smooth
              offset={-70}
              duration={500}
              className="btn text-white ms-2"
              style={{
                cursor: "pointer",
                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                border: "none",
                fontWeight: "600",
                boxShadow: "0 0 12px #6a11cb",
              }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Digital Bros Rate card.pdf";
                link.download = "Digital_Bros_Rate_Card.pdf";
                link.click();
              }}
            >
              Get our package
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
