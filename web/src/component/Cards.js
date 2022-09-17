import React from "react";
import Container from "./Container";
import AMZN from '../images/AMZN.svg';
import FB from '../images/FB.png';
import GOOGL from '../images/GOOGL.png';

const cards = {
  border: "1px solid",
  display: "inline-block",
  borderRadius: "10px",
  width: "20%",
  marginTop: "2%",
  marginLeft:"10%",
  marginBottom:"2%",
  backgroundColor:"#ececec"
};

function Cards() {
  return (
    <div>
      <Container id="container">
        <div draggable="true" style={cards}>
          <img src={GOOGL} alt="Google"
            style={{
              weight: "20px",
              height: "50px",
              marginLeft: "60%",
              marginTop: "5%",
            }}
          />
          <h5 style={{ padding: "5%" }}>GOOGLE</h5>
          <h1 style={{ padding: "5%" }}>1515 USD</h1>
        </div>
        <div draggable="true" style={cards}>
          <img src={FB} alt="facebook"
            style={{
              weight: "20px",
              height: "50px",
              marginLeft: "60%",
              marginTop: "5%",
            }}
          />
          <h5 style={{ padding: "5%" }}>FB</h5>
          <h1 style={{ padding: "5%" }}>266 USD</h1>
        </div>
        <div draggable="true" style={cards}>
          <img src={AMZN} alt="amazon"
            style={{
              weight: "20px",
              height: "50px",
              marginLeft: "60%",
              marginTop: "5%",
            }}
          />
          <h5 style={{ padding: "5%" }}>AMZN</h5>
          <h1 style={{ padding: "5%" }}>3116 USD</h1>
        </div>
      </Container>
    </div>
  );
}

export default Cards;
