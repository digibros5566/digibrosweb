import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Col,
} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () =>{
    return(
        <footer
        className="text-white text-center py-3"
        style={{
          // background: "linear-gradient(90deg, #6a11cb, #2575fc)",
          backgroundColor: "#1a1024cf",
          // boxShadow: "0 0 15px #6a11cb",
          width:"100%"
        }}
      >
         <Col className="footer">
              <div
                // className="p-4 rounded"
                style={{ display:"flex",
                  width:"100%",
                  justifyContent:"space-around",
                  
                 }}
              >
                <div>
                <h4 style={{ color: "#c084fc" }}>Let's Talk</h4>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:digitalbros5566@gmail.com"
                    style={{ color: "#fff" }}
                  >
                    digitalbros5566@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919080765375" style={{ color: "#fff" }}>
                    +91 90807 65375
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919791911491" style={{ color: "#fff" }}>
                    +91 9791911491
                  </a>
                </p>
                </div>
                <div>
                <h5 className="mt-4" style={{ color: "#c084fc" }}>
                  Offices
                </h5>
                <p>Chennai, India</p>
                </div>
                <div>
                  <h5 className="mt-3" style={{ color: "#c084fc" }}>
                  Follow Us
                </h5>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <a href="https://www.instagram.com">
                    <InstagramIcon sx={{ color: "#E1306C", fontSize: 35 }} />
                  </a>
                  <a href="https://www.facebook.com">
                    <FacebookIcon sx={{ color: "#1877F2", fontSize: 35 }} />
                  </a>
                  <a href="https://www.linkedin.com">
                    <LinkedInIcon sx={{ color: "#0A66C2", fontSize: 35 }} />
                  </a>
                  <a href="https://www.youtube.com">
                    <YouTubeIcon sx={{ color: "#FF0000", fontSize: 35 }} />
                  </a>
                </div>
                </div>
              </div>
            </Col>
        <p className="m-0">
          © DIGI BROS — Digital Marketing Agency · All rights reserved
        </p>
      </footer>
    )
}

export default Footer;