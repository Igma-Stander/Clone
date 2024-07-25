import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//using a lot of rows and columns
//using Button to create a link look
function Footer() {
  return (
    <Container>
      <Row>
        <Col style={{ color: "grey" }}>
          Questions? Call
          <Button style={{ color: "grey" }} variant="link">
            0 801-000-723
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            FAQ
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Help Center
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Account
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Media Center
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Investor Relations
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Jobs
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Redeem Gift Cards
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Buy Gift Cards
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Ways to Watch
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Terms of Use
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Privacy
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Cookie Preferences
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Corporate Information
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Contact Us
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Speed Test
          </Button>
        </Col>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Legal Notices
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button style={{ color: "grey" }} variant="link">
            Only on Netflix
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            style={{
              backgroundColor: "black",
              borderColor: "grey",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            English
          </Button>
        </Col>
      </Row>

      <Row>
        <Col style={{ color: "grey", fontSize: "15px" }}>
          Netflix South Africa
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="https://www.netflix.com/za/">https://www.netflix.com/za/</a>
        </Col>
      </Row>
    </Container>
  );
}
//adding the reference at the end

export default Footer;
