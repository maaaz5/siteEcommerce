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
import Footer from "../../components/footer/Footer";
import Product from "../../components/product/Product";
import CartProduct from "../../components/cartProduct/CartProduct";
import Inuput from "../../components/inputs/Input";
const Checkout = () => {
  return (
    <Wrapper>
      <Miniheader />
      <Header />
      <Navigation />
      <InnerWrapper>
        <Breadcrumb />
        <CheckoutDiverder>
          <CheckoutOutData>
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
                We are getting to the end. Just few clicks and your order is
                ready!
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
                    We are using the most advanced <br /> security to provide
                    you the best <br />
                    experience ever.
                  </h4>
                </Row>
              </Row>
            </StepUnno>
          </CheckoutOutData>
          <CheckoutOrders>
            <Title>Order Summary</Title>
            <SubTitle className="sub">
              Price can change depending on shipping method.
            </SubTitle>
            <ProductsWrapper>
              <CartProduct />
              <CartProduct />
            </ProductsWrapper>
            <div className="roww">
              <p>SubTotal</p>
              <p>75.65 USD</p>
            </div>
            <div className="roww">
              <p>Shipping</p>
              <p>0 USD</p>
            </div>
            <div className="roww">
              <Inuput
                placeholder="Apply promo code"
                icon={<Buttonoutlined title="Apply now" url="#" />}
                side="end"
              />
            </div>
            <div className="roww">
              <div>
                <h5>Total Order</h5>
                <h6>Guaranteed delivery day june 12, 2020</h6>
              </div>
              <div>
                <p>89.84 USD</p>
              </div>
            </div>
          </CheckoutOrders>
        </CheckoutDiverder>
      </InnerWrapper>
      <Footer />
    </Wrapper>
  );
};
const ProductsWrapper = styled.div`
  margin: 3rem 0rem;
`;
const CheckoutDiverder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
`;
const CheckoutOutData = styled.div`
  width: 60%;
`;
const CheckoutOrders = styled.div`
  width: 40%;
  border: 1px solid var(--blackD);
  border-radius: 1rem;
  padding: 3rem 1rem;
  .roww {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0rem;
    div {
      h5 {
        font-size: var(--S6);
        font-weight: bold;
        color: var(--blackA);
      }
      h6 {
        font-size: var(--caption);
        font-weight: 500;
        color: var(--greenB);
      }
      p {
        font-size: var(--S2);
        font-weight: 600;
        color: var(--greenB);
      }
    }
    p {
      font-size: var(--S6);
      font-weight: bold;
      color: var(--blackA);
    }
  }
  .sub {
    color: var(--blackC);
  }
`;
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
