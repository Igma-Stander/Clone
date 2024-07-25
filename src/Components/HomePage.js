import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import background from "../Images/img2.jpg";

//used inline css for different small parts
//using rows and columns again
function HomePage() {
  return (
    <Container
      style={{
        backgroundImage: `url(${background})`,
        height: "500px",
        backgroundSize: "cover",
      }}
    >
      <Row>
        <Col
          xs={10}
          style={{ color: "red", fontFamily: "Helvetica", textAlign: "left" }}
        >
          <h1>Netflix</h1>
        </Col>
        <Col>
          <Button
            variant="success"
            style={{ backgroundColor: "red", borderColor: "red" }}
          >
            Sign In
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <h1 style={{ fontWeight: "bold" }}>
        Unlimited movies, TV shows, and more
      </h1>
      <br />
      <Row>
        <Col className="sub">
          <p style={{ fontSize: "20px" }}>Watch anywhere. Cancel anytime.</p>
        </Col>
      </Row>
      <Row>
        <Col className="sub">
          <p style={{ fontSize: "20px" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col className="email">Email address</Col>
        <Col xs={2}>
          <Button
            style={{
              backgroundColor: "red",
              borderColor: "red",
              padding: "10px",
              fontWeight: "bold",
            }}
          >
            Get Started
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default HomePage;
