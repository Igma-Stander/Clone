import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//making use of a gif
import gif from "../Images/gif.gif";

//just switching image and text rows
//making use of props
function EnjoyTv(props) {
  return (
    <Container>
      <Row>
        <Col className="col">
          <h1 style={{ fontWeight: "bold" }}>Enjoy on your TV</h1>
          <p style={{ fontSize: "22px" }}>Watch on {props.where} and more</p>
        </Col>
        <Col xs={6}>
          <Image src={gif} style={{ width: "500px", height: "350px" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default EnjoyTv;
