import React from "react";
import styled from "styled-components";
import VISA from "./../../assests/visa.png";
import PAYPAL from "./../../assests/paypal.png";
import BIT from "./../../assests/bitcoin.png";
import { useState } from "react";
import Input from "./Input";
const AcordationRadio = () => {
  const [sl, setsl] = useState(false);
  const [nm, setnm] = useState("sd");
  let n1 = "sd";
  let n2 = "re";
  return (
    <div>
      <Wrapper>
        <label htmlFor="sd">
          <InputWrapper>
            <input
              onChange={(e) => {
                if (e.target.checked) {
                  setsl((sl) => (sl = true));
                  setnm((s) => (s = e.target.id));
                }
              }}
              type="radio"
              id="sd"
              name="radios"
            />
            Credit card
          </InputWrapper>
          <ImgWrapper>
            <img src={VISA} />
          </ImgWrapper>
        </label>
        <div className={sl && n1 == nm ? "sl show" : "sl hide"}>
          <Input
            label="Card Number"
            placeholder="Card number"
            type="tel"
            id="creditCard"
          />
          <div className="row">
            <Input
              label="Card holder"
              placeholder="Card holder"
              type="tel"
              id="cardholder"
            />
            <Input
              label="Expiration date"
              placeholder="DD/MM/YY"
              type="tel"
              id="exdate"
            />
            <Input label="CVC" placeholder="CVC" type="tel" id="CVC" />
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <label htmlFor="re">
          <InputWrapper>
            <input
              onChange={(e) => {
                if (e.target.checked) {
                  setsl((sl) => (sl = true));
                  setnm((s) => (s = e.target.id));
                }
              }}
              type="radio"
              id="re"
              name="radios"
            />
            credit card
          </InputWrapper>

          <ImgWrapper>
            <img src={PAYPAL} />
          </ImgWrapper>
        </label>
        <div className={sl && n2 == nm ? " sl show" : "sl hide"}>
          processing ...
        </div>
      </Wrapper>
    </div>
  );
};
const ImgWrapper = styled.div`
  justify-self: flex-end;
`;

const Wrapper = styled.div`
  margin: 1rem 0rem;
  background-color: var(--blackF);
  border: 1px solid var(--blackD);
  color: var(--blackA);
  border-radius: 1.5rem;
  padding: 1rem 1.4rem;
  label {
    display: grid;
    grid-template-columns: 1fr 1fr !important;
  }
  .sl {
    padding-top: 1rem;

    .row {
      display: flex;
      margin: 2rem 0rem;
      align-items: center;
      gap: 0rem 1rem;
      label {
        display: block;
      }

      div:first-child {
        flex-basis: 1;
      }
      div:nth-child(2) {
        flex-basis: 0;
      }
      div:last-child {
        flex-basis: 0;
      }
    }
  }
  .hide {
    display: none;
  }
  label {
    p {
      font-size: var(--S6);
      color: var(--blackA) !important;
    }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0rem 1rem;
  font-size: var(--S6);
  color: var(--blackA);
  font-weight: bold;
`;
export default AcordationRadio;
