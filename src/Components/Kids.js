import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import img3 from "../Images/img3.png";

//reusing code just changing the text and image
function Kids() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Image src={img3} style={{ width: "500px", height: "400px" }} />
        </Col>
        <Col>
          <h1>Create profiles for kids</h1>
          <p style={{ fontSize: "22px" }}>
            Send kids on adventures with their favorite characters in a space
            made just for them - free with your membership.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Kids;
