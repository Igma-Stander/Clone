import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import img1 from "../Images/img1.png";

//reusing code
function Watch() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Watch everywhere</h1>
          <p style={{ fontSize: "22px" }}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </Col>
        <Col xs={6}>
          <Image src={img1} style={{ width: "550px", height: "350px" }} />
        </Col>
      </Row>
    </Container>
  );
}
//changing width and height that suites the image

export default Watch;
