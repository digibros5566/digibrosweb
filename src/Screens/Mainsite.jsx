
// import React, { useState } from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   Navbar,
//   Nav,
// } from "react-bootstrap";
// import { Link as ScrollLink } from "react-scroll";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import Hero from "./Hero"

// function Mainpage() {
  

 
//   // Logo auto-scroll
  

//   return (
//     <>
//       {/* ===== Navbar ===== */}
      
//       {/* ===== Hero ===== */}
      
//       {/* ===== Services ===== */}
      

//       {/* ===== Work (Clients Auto Scroll) ===== */}
      

//       {/* ===== Contact ===== */}
      

//       {/* ===== Footer ===== */}
      
      
//     </>
//   );
// }

// export default Mainpage;




// import React, { useState } from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   Navbar,
//   Nav,
//   Image,
// } from "react-bootstrap";
// import { Link as ScrollLink } from "react-scroll";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import XIcon from "@mui/icons-material/X";

// function Mainpage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: "",
//   });
//   const [status, setStatus] = useState({ color: "", text: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.id]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form behavior

//     const { name, email, service, message } = formData;

//     // Basic validation
//     if (!name || !email || !service || !message) {
//       setStatus({ color: "red", text: "All fields are required." });
//       return;
//     }

//     try {
//       // Send POST request to backend
//       const res = await fetch("http://localhost:5000/api/contacts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, service, message }),
//       });

//       if (res.ok) {
//         setStatus({ color: "green", text: "✅ Successfully submitted!" });
//         setFormData({ name: "", email: "", service: "", message: "" });
//       } else {
//         const data = await res.json();
//         setStatus({
//           color: "red",
//           text: data.error || data.message || "Something went wrong.",
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus({
//         color: "red",
//         text: "Server error. Please try again later.",
//       });
//     }
//   };

//   // const slides = ["/DM1.png", "/DM2.png", "/DM3.png"];

//   // const settings = {
//   //   dots: false,
//   //   infinite: true,
//   //   autoplay: true,
//   //   autoplaySpeed: 4000,
//   //   fade: true,
//   //   arrows: false,
//   //   speed: 1000,
//   // };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 7000,
//     fade: true,
//   };
//   return (
//     <>
//       {/* ===== Header ===== */}
//       <Navbar expand="lg" bg="light" fixed="top" className="shadow-sm">
//         <Container>
//           <Navbar.Brand style={{ color: "#ff5a5f", fontWeight: "700" }}>
//             DIGI BROS
//           </Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             {/* <Nav>
//               {["home", "services", "work", "contact"].map((id) => (
//                 <ScrollLink
//                   key={id}
//                   to={id}
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   className="nav-link"
//                 >
//                   {id.charAt(0).toUpperCase() + id.slice(1)}
//                 </ScrollLink>
//               ))}
//               <ScrollLink
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="btn btn-danger text-white ms-2"
//                 onClick={() => {
//                   const link = document.createElement("a");
//                   link.href = "/Digital Bros Rate card.pdf"; // Replace with your PDF file path
//                   link.download = "package.pdf";
//                   link.click();
//                 }}
//               >
//                 Get our package
//               </ScrollLink>
//             </Nav> */}

//             <Nav>
//               {["home", "services", "work", "contact"].map((id) => (
//                 <ScrollLink
//                   key={id}
//                   to={id}
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   className="nav-link"
//                   style={{ cursor: "pointer" }} // 👈 Add pointer for all nav links
//                 >
//                   {id.charAt(0).toUpperCase() + id.slice(1)}
//                 </ScrollLink>
//               ))}

//               <ScrollLink
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 className="btn btn-danger text-white ms-2"
//                 style={{ cursor: "pointer" }} // 👈 Add pointer for this button too
//                 onClick={() => {
//                   const link = document.createElement("a");
//                   link.href = "/Digital Bros Rate card.pdf"; // ✅ Ensure this file is in /public
//                   link.download = "Digital_Bros_Rate_Card.pdf";
//                   link.click();
//                 }}
//               >
//                 Get our package
//               </ScrollLink>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* ===== Hero ===== */}
//       <section id="home" style={{ position: "relative", height: "100vh" }}>
//         <Slider {...settings}>
//           {/* --- Slide 1 --- */}
//           <div>
//             <div
//               style={{
//                 position: "relative",
//                 height: "100vh",
//                 overflow: "hidden",
//               }}
//             >
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   zIndex: -1,
//                 }}
//               >
//                 <source
//                   src={`${process.env.PUBLIC_URL}/3125396-uhd_3840_2160_25fps.mp4`}
//                   type="video/mp4"
//                 />
//               </video>
//             </div>
//           </div>
//         </Slider>

//         {/* --- Overlay --- */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.55)",
//             zIndex: 1,
//           }}
//         >
//           <Container
//             className="py-5 mt-5"
//             style={{ position: "relative", zIndex: 2 }}
//           >
//             <Row className="align-items-center">
//               <Col md={7} className="mb-4">
//                 <span className="badge bg-light text-danger fw-semibold px-3 py-2 rounded-pill">
//                   Digital Marketing Agency
//                 </span>
//                 <h1 className="fw-bold mt-3 text-white">
//                   We grow brands with performance marketing & creative strategy
//                 </h1>
//                 <p className="lead text-light">
//                   SEO, Paid Ads, Social Media, Content Marketing and Web Design
//                   — tailored strategies that increase traffic, leads, and
//                   revenue.
//                 </p>

//                 {/* Buttons */}
//                 <ScrollLink
//                   to="contact"
//                   smooth
//                   offset={-70}
//                   duration={500}
//                   className="btn btn-danger me-2"
//                 >
//                   Request a Free Audit
//                 </ScrollLink>
//                 <ScrollLink
//                   to="work"
//                   smooth
//                   offset={-70}
//                   duration={500}
//                   className="btn btn-outline-light"
//                 >
//                   See our Work
//                 </ScrollLink>

//                 {/* Trusted By Logos */}
//                 <div className="mt-4">
                 
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </section>

//       {/* ===== Services ===== */}
//       <section id="services" className="py-5 bg-light">
//         <Container>
//           <div className="text-center mb-5">
//             <h2>Our Services</h2>
//             <p className="text-muted">
//               End-to-end marketing services to turn traffic into customers.
//             </p>
//           </div>
//           <Row>
//             {[
//               {
//                 icon: "fa-line-chart",
//                 title: "SEO",
//                 text: "Improve organic rankings and traffic with technical SEO, on-page optimization, and content strategies.",
//               },
//               {
//                 icon: "fa-bullhorn",
//                 title: "PPC Ads",
//                 text: "Google, YouTube & Meta campaigns focused on ROI — setup, management and conversion optimization.",
//               },
//               {
//                 icon: "fa-share-alt",
//                 title: "Social Media",
//                 text: "Content calendars, growth, campaigns, creative design and community management.",
//               },
//               {
//                 icon: "fa-pencil",
//                 title: "Content Marketing",
//                 text: "Articles, landing pages, lead magnets and SEO-friendly copy that converts visitors into leads.",
//               },
//               {
//                 icon: "fa-desktop",
//                 title: "Web Design & CRO",
//                 text: "Landing pages, speed optimization, A/B testing to increase conversions.",
//               },
//               {
//                 icon: "fa-bar-chart",
//                 title: "Analytics",
//                 text: "Dashboards & reports so you always know what’s driving growth.",
//               },
//             ].map((s, i) => (
//               <Col md={4} className="mb-4" key={i}>
//                 <div className="p-4 bg-white h-100 shadow-sm rounded text-center">
//                   <i className={`fa ${s.icon} fa-2x text-danger mb-3`} />
//                   <h5>{s.title}</h5>
//                   <p className="text-muted">{s.text}</p>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* ===== Work ===== */}
//       <section id="work" className="py-5">
//         <Container>
//           <div className="text-center mb-5">
//             <h2>Selected Case Studies</h2>
//             <p className="text-muted">
//               A few wins that show measurable impact.
//             </p>
//           </div>
//           <Row>
//             {[
//               {
                
//                 logo: "/arar.png",
//               },
//               {
                
//                 logo: "/anuj.png",
//               },
//               {
               
//                 logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
//               },
//             ].map((w, i) => (
//               <Col md={4} className="mb-4" key={i}>
//                 <div className="p-4 border rounded bg-white h-100 text-center">
//                   <img
//                     src={w.logo}
//                     alt={w.client}
//                     width="100%"
//                     className="mb-3"
//                   />
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>

//       {/* ===== Contact ===== */}
//       <section id="contact" className="py-5 bg-light">
//         <Container>
//           <div className="text-center mb-5">
//             <h2>Contact Us</h2>
//             <p className="text-muted">
//               Let's discuss how we can grow your business — free 30-minute
//               consultation.
//             </p>
//           </div>
//           <Row>
//             <Col md={6}>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Interested in</Form.Label>
//                   <Form.Select
//                     id="service"
//                     value={formData.service}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select Service</option>
//                     <option>SEO</option>
//                     <option>PPC</option>
//                     <option>Social Media</option>
//                     <option>Website / CRO</option>
//                   </Form.Select>
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     id="message"
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//                 <Button type="submit" variant="danger">
//                   Send Message
//                 </Button>
//               </Form>
//               <div
//                 style={{
//                   color: status.color,
//                   marginTop: "10px",
//                   fontWeight: "600",
//                 }}
//               >
//                 {status.text}
//               </div>
//             </Col>

//             <Col md={5} className="offset-md-1">
//               <div className="p-4 bg-white rounded shadow-sm">
//                 <h4>Let's Talk</h4>
//                 <p>
//                   <strong>Email:</strong>{" "}
//                   <a href="mailto:digitalbros5566@gmail.com">
//                     digitalbros5566@gmail.com
//                   </a>
//                 </p>
//                 <p>
//                   <strong>Phone:</strong>{" "}
//                   <a href="tel:+919080765375">+91 90807 65375</a>
//                 </p>
//                 <p>
//                   <strong>Phone:</strong>{" "}
//                   <a href="tel:+919791911491">+91 9791911491</a>
//                 </p>
//                 <h5 className="mt-4">Offices</h5>
//                 <p>Chennai, India</p>
//                 <h5 className="mt-3">Follow Us</h5>
               

//                 <p
//                   className="social"
//                   style={{
//                     display: "flex",
//                     gap: "15px",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <a
//                     href="https://www.instagram.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <InstagramIcon sx={{ color: "#E1306C", fontSize: 35 }} />
//                   </a>
//                   <a
//                     href="https://www.facebook.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FacebookIcon sx={{ color: "#1877F2", fontSize: 35 }} />
//                   </a>
//                   <a
//                     href="https://www.linkedin.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <LinkedInIcon sx={{ color: "#0A66C2", fontSize: 35 }} />
//                   </a>
//                   <a
//                     href="https://www.youtube.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <YouTubeIcon sx={{ color: "#FF0000", fontSize: 35 }} />
//                   </a>
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* ===== Footer ===== */}
//       <footer className="bg-dark text-white text-center py-3">
//         <p className="m-0">
//           © DIGI BROS — Digital Marketing Agency · All rights reserved
//         </p>
//       </footer>
//     </>
//   );
// }

// export default Mainpage;

