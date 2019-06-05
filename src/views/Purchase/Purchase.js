/*eslint-disable*/
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
// react component used to create charts
import SweetAlert from "react-bootstrap-sweetalert";

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";
// import checkout from "./Checkout"
class SweetAlertPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      show: false
    };
    this.hideAlert = this.hideAlert.bind(this);
    // this.successDelete = this.successDelete.bind(this);
    // this.cancelDetele = this.cancelDetele.bind(this);
    // this.inputConfirmAlert = this.inputConfirmAlert.bind(this);
    // this.inputConfirmAlertNext = this.inputConfirmAlertNext.bind(this);
  }
//   basicAlert() {
//     this.setState({
//       alert: (
//         <SweetAlert
//           style={{ display: "block", marginTop: "-100px" }}
//           title="Here's a message!"
//           onConfirm={() => this.hideAlert()}
//           onCancel={() => this.hideAlert()}
//           confirmBtnBsStyle="info"
//         />
//       )
//     });
//   }
  // buttonClick(){
  //     window.open("./admin/checkout")
  // }
  titleAndTextAlert() {
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: "block", marginTop: "-100px" }}
          title="Here's a message!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          It's pretty, isn't it?
        </SweetAlert>
      )
    });
  }
  successAlert() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Good job!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="info"
        >
          You clicked the button!
        </SweetAlert>
      )
    });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }
  render() {
    return (
      <div className="main-content">
        {this.state.alert}
        <Grid fluid>
          <Card
            plain
            title="Payment"
          />
          <div className="places-sweet-alerts">
            <Row>
              <Col md={6}>
                <Card
                  ctTextCenter
                  content={
                    <div>
                      <h5>3-month Subscription</h5>
                      {/* <Button fill onClick={this.buttonClick.bind(this)}> */}
                      <form action="/pay" method="post">
                          <input type="submit" value="ORDER"></input>
                      </form>
                        {/* Order */}
                      {/* </Button> */}
                    </div>
                  }
                />
              {/* </Col>
              <Col md={6}>
                <Card
                  ctTextCenter
                  content={
                    <div>
                      <h5>6-month Subscription</h5>
                      <Button fill onClick={this.basicAlert.bind(this)}>
                        Order
                      </Button>
                    </div>
                  }
                /> */}
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}

export default SweetAlertPage;
