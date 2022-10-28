import React from "react";
import { Container, Form } from "react-bootstrap";
import { BrandName, Heading, SiteButton } from "../components";
import StepProgressBar from "../components/StepProgressBar";
const EnterUserDetails = () => {
  return (
    <>
      <Container className="my-5 pt-md-5">
        <div className="mx-auto col-md-7 col-lg-5">
          <BrandName />
          <StepProgressBar page_no={1} />
          <Heading
            title1="Welcome! First thing first"
            title2="You can always change them later"
          />
          {/* form */}
          <Form>
            {/* full name */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Steve Jobs"
                className="py-2"
              />
            </Form.Group>
            {/* display name */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Display Name</Form.Label>
              <Form.Control type="text" placeholder="Steve" className="py-2" />
            </Form.Group>
            <SiteButton title="Create Workspace" to="/set-workspace-details" />
          </Form>
        </div>
      </Container>
    </>
  );
};

export default EnterUserDetails;
