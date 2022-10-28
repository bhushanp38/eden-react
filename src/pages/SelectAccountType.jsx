import React, { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import { BrandName, Heading, SiteButton } from "../components";
import StepProgressBar from "../components/StepProgressBar";
import { BsFillPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

const personIcon = <BsFillPersonFill size={25} />;
const teamIcon = <RiTeamFill size={25} />;

const WorkspaceTypeBox = ({ index, icon, title, info, onClick, className }) => {
  return (
    <>
      <div className="my-3" key={index} onClick={() => onClick}>
        <div className={`p-3 border rounded ${className}`}>
          <div>{icon}</div>
          <h6 className="my-2 text-dark">{title}</h6>
          <p className="text-dark">{info}</p>
        </div>
      </div>
    </>
  );
};

const SelectAccountType = () => {
  const [myself, setMyself] = useState(true);
  const [team, setTeam] = useState(false);
  return (
    <>
      <Container className="my-5 pt-md-5">
        <div className="mx-auto col-md-7 col-lg-5">
          <BrandName />
          <StepProgressBar page_no={3} />
          <Heading
            title1="How are you planning to use Eden?"
            title2="We'll streamline setup experience accordingly."
          />
          {/* form */}
          <Form>
            <Row xs={2}>
              <WorkspaceTypeBox
                key={1}
                icon={personIcon}
                title="For myself"
                info="Write better. Think more clearly. Stay organized."
                onClick={() => {
                  setMyself(true);
                  setTeam(false);
                }}
                className={`${
                  myself ? "border-primary text-primary" : "border"
                }`}
              />
              <WorkspaceTypeBox
                key={2}
                icon={teamIcon}
                title="With my team"
                info="Wikis, docs, tasks & projects, all in one place."
                onClick={() => {
                  setTeam(true);
                  setMyself(false);
                }}
                className={`${
                  team ? "border-primary  text-primary" : "border"
                }`}
              />
            </Row>
            <SiteButton title="Create Workspace" to="/setup-success" />
          </Form>
        </div>
      </Container>
    </>
  );
};

export default SelectAccountType;
