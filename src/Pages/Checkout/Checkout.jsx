import React from "react";
import styled from "styled-components";
import {
  InnerWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "../../Styles/styles/globalStyles";
import Breadcrumb from "./../../components/breadcrumb/Breadcrumb";
import Form from "../../components/inputs/Form";
import CheckboxInput from "./../../components/inputs/CheckboxInput";
import FedEx from "./../../assests/fedex.png";
import DHL from "./../../assests/dhl.png";
import safe from "./../../assests/safe.png";
import AcordationRadio from "./../../components/inputs/acordationRadio";
import CheckboxInput2 from "../../components/inputs/CheckboxInput2";
import Buttonoutlined from "./../../components/buttons/Buttonoutlined";

import Miniheader from "../../components/header/Miniheader";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer.jsx";

const Checkout = () => {
  return (
    <Wrapper>
      <Miniheader/>
      <Header/>
      <Navigation/>
      <InnerWrapper>
        <Breadcrumb />
        <StepUnno>
          <Title>Billing info</Title>
          <SubTitle>Please enter your billing info</SubTitle>
          <Step>Step 1 of 5</Step>
          <Form />
        </StepUnno>

        <StepUnno>
          <Title>Billing method</Title>
          <SubTitle>Please enter your payment method</SubTitle>
          <Step>Step 2 of 5</Step>
          <CheckboxInput brand="FedEx" id="fedex" brandimg={FedEx} />
          <CheckboxInput brand="DHL" id="dhl" brandimg={DHL} />
        </StepUnno>

        <StepUnno>
          <Title>Payment method</Title>
          <SubTitle>Please enter your payment method</SubTitle>
          <Step>Step 3 of 5</Step>
          <AcordationRadio />
        </StepUnno>

        <StepUnno>
          <Title>Additional informations</Title>
          <SubTitle>Need something else? We will make it for you!</SubTitle>
          <Step>Step 4 of 5</Step>
          <Row>
            <InputLabel>Order notes</InputLabel>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              placeholder="Need a specific delivery day? Sending a gift? Let's say ..."
            ></textarea>
          </Row>
        </StepUnno>

        <StepUnno>
          <Title>Confirmation</Title>
          <SubTitle>
            We are getting to the end. Just few clicks and your order is ready!
          </SubTitle>
          <Step>Step 5 of 5</Step>
          <Row>
            <CheckboxInput2
              id="newsletter"
              brand="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
            />
            <CheckboxInput2
              id="termsConditions"
              brand="I agree with our terms and conditions and privacy policy.!"
            />
            <Buttonoutlined title="Complete order" filled border url="#" />
            <Row>
              <img src={safe} alt="" />
              <h3>All your data are safe</h3>
              <h4>
                We are using the most advanced <br /> security to provide you
                the best <br />
                experience ever.
              </h4>
            </Row>
          </Row>
        </StepUnno>
      </InnerWrapper>
      <Footer/>
    </Wrapper>
  );
};
const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-size: var(--S6);
    color: var(--blackA);
    margin: 0.5rem 0rem;
  }
  h4 {
    font-size: var(--caption);
    color: var(--blackC);
    font-weight: 500;
  }
  a {
    margin: 3rem 0rem;
  }
  textarea {
    outline: none;
    border: 1px solid var(--blackD);
    background-color: var(--blackH);
    border-radius: 1rem;
    width: 100%;
    height: 200px;
    resize: none;
    padding: 1rem 1.5rem;
    font-size: var(--body);
  }
`;
const InputLabel = styled.label`
  font-size: var(--S6);
  font-weight: bold;
  color: var(--blackA);
`;
const StepUnno = styled.div`
  margin-bottom: 4rem;
  p:nth-child(2) {
    color: var(--blackC);
    font-weight: 600;
    margin-top: 0.5rem;
  }
`;
const Step = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 0rem;
  color: var(--blackC);
  font-weight: 500;
  margin-top: 0.5rem;
`;
export default Checkout;
