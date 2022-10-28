import React from "react";
import { Container, Form } from "react-bootstrap";
import { BrandName, Heading, SiteButton } from "../components";
import StepProgressBar from "../components/StepProgressBar";
import { AiFillCheckCircle } from "react-icons/ai";
const SetupSuccessScreen = () => {
  return (
    <>
      <Container className="my-5 pt-5">
        <div className="mx-auto col-md-7 col-lg-5">
          <BrandName />
          <StepProgressBar page_no={4} />
          {/* <HiCheckCircle size={40} /> */}
          <div className="text-center py-4">
            <AiFillCheckCircle size={60} className="text-primary" />
          </div>

          <Heading
            title1="Congratulations, Eren!"
            title2="You have completed onboarding, you can start using the Eden!"
          />
          {/* form */}
          <Form>
            <SiteButton title="Launch Eden" />
          </Form>
        </div>
      </Container>
    </>
  );
};

export default SetupSuccessScreen;
