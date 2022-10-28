import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { BrandName, Heading, SiteButton } from "../components";
import StepProgressBar from "../components/StepProgressBar";
const SetWorkspaceDetails = () => {
  return (
    <>
      <Container className="my-5 pt-md-5">
        <div className="mx-auto col-md-7 col-lg-5">
          <BrandName />
          <StepProgressBar page_no={2} />
          <Heading
            title1="Welcome! First thing first"
            title2="You can always change them later"
          />
          {/* form */}
          <Form>
            {/* workspace name */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Workspace Name</Form.Label>
              <Form.Control type="text" placeholder="Eden" className="py-2" />
            </Form.Group>
            {/* workspace url */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Workspace URL
                <span className="text-secondary" style={{ fontSize: "0.8rem" }}>
                  (optional)
                </span>
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3 py-2">
                  www.eden.com/
                </InputGroup.Text>
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  className="py-2"
                />
              </InputGroup>
            </Form.Group>
            <SiteButton title="Create Workspace" to="/select-account-type" />
          </Form>
        </div>
      </Container>
    </>
  );
};

export default SetWorkspaceDetails;
