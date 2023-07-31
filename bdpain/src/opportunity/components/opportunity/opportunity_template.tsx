import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import "./opportunity.scss";
import {
  OpportunityController,
  OpportunityProps,
  OpportunityState,
} from "./opportunity_interface";
import { OpportunityFeed } from "../opportunity_feed/opportunity_feed";
import { OpportunityView } from "../opportunity_view/opportunity_view";

export function template(
  this: OpportunityController,
  props: OpportunityProps,
  state: OpportunityState
) {
  return (
    <Row className="d-flex align-items-center justify-content-center">
      <Col sm={12} md={10} lg={8} mx={"auto"}>
        {state.errorMessage && (
          <Alert variant="danger" onClose={this.handleAlertClose} dismissible>
            <Alert.Heading>Oh No! You Got An Error! 😭</Alert.Heading>
            <p>{state.errorMessage}</p>
          </Alert>
        )}
        <Card className="shadow rounded-3 my-5">
          <Card.Body className="p-4 p-sm-5">
            {!this.id ? <OpportunityFeed /> : <OpportunityView id={this.id} />}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
