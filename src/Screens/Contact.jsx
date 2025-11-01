
import React, { useState } from "react";
import {
  Container,
  Row,
  Form,
  Button,

} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Contact = () =>{

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState({ color: "", text: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, service, message } = formData;
    if (!name || !email || !service || !message) {
      setStatus({ color: "red", text: "All fields are required." });
      return;
    }

    try {
      const res = await fetch("https://digibrosbackend.onrender.com/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name:name, email:email, service:service, message:message }),   //newly added
      });

      if (res.ok) {
        setStatus({ color: "#00ff88", text: "✅ Successfully submitted!" });
        setFormData({ name: "", email: "", service: "", message: "" });
      } else {
        const data = await res.json();
        setStatus({
          color: "red",
          text: data.error || data.message || "Something went wrong.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        color: "red",
        text: "Server error. Please try again later.",
      });
    }
  };


    return(
        <section
                id="contact"
                style={{
                //   background: "linear-gradient(180deg, #1a002f, #0b0014)",
                  color: "white",
                  padding: "80px 0",
                }}
              >
                <Container>
                  <div className="text-center mb-5">
                    <h2 style={{ color: "#c084fc" }}>Contact Us</h2>
                    <p style={{ color: "#aaa" }}>
                      Let’s discuss how we can grow your business — free consultation.
                    </p>
                  </div>
                  <Row className="contact">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Interested in</Form.Label>
                          <Form.Select
                            id="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Service</option>
                            <option>SEO</option>
                            <option>PPC</option>
                            <option>Social Media</option>
                            <option>Website / CRO</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                          />
                        </Form.Group>
                        <Button
                          type="submit"
                          style={{
                            background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                            border: "none",
                            fontWeight: "600",
                            boxShadow: "0 0 10px #6a11cb",
                          }}
                        >
                          Send Message
                        </Button>
                      </Form>
                      <div
                        style={{
                          color: status.color,
                          marginTop: "10px",
                          fontWeight: "600",
                        }}
                      >
                        {status.text}
                      </div>
        
                   
                  </Row>
                  
                </Container>
              </section>
    )
}

export default Contact;