import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//import image from Images folder
import img4 from "../Images/img4.jpg";

//using image in one column and text in another
function Download() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Image src={img4} style={{ width: "600px", height: "350px" }} />
        </Col>
        <Col className="col">
          <h1 style={{ fontWeight: "bold" }}>
            Download your shows to watch offline
          </h1>
          <p style={{ fontSize: "22px" }}>
            Save your favorites easily and always have something to watch.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
//used inline css here and there

export default Download;
