import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//using custom css to change appearance
function Questions() {
  return (
    <Container>
      <h1 style={{ fontWeight: "bold" }}>Frequently Asked Questions</h1>
      <Row>
        <Col className="border">What is Netflix?</Col>
      </Row>
      <Row>
        <Col className="border">How much does Netflix cost?</Col>
      </Row>
      <Row>
        <Col className="border">Where can I watch?</Col>
      </Row>
      <Row>
        <Col className="border">How do I cancel?</Col>
      </Row>
      <Row>
        <Col className="border">What can I watch on Netflix?</Col>
      </Row>
      <Row>
        <Col className="border">Is Netflix good for kids?</Col>
      </Row>
      <br />
      <Row>
        <Col className="sub">
          Ready to watch? Enter your email to create or restart your membership.
        </Col>
      </Row>
      <br />
      <Row>
        <Col></Col>
        <Col className="email">Email address</Col>
        <Col xs={2}>
          <Button
            style={{
              backgroundColor: "red",
              borderColor: "red",
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
//using rows and columns again

export default Questions;
