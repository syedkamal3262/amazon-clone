import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import { useStateValue } from "../components/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useElements, CardElement, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../components/Reducer";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, serSucceeded] = useState(false);
  const [processing, SetProcessing] = useState("");
  const [clientSecret, SetClientSecret] = useState(true);
  useEffect(() => {
    const getClientSecret = async () => {
      // const response =await axios
    };
    getClientSecret();
    // return () => {
    //   cleanup;
    // };
  }, [basket]);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    SetProcessing(true);
    // const payload = await
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/Basket">{basket.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delievery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Los angleus</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Item and Delievery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket.length} items) :{" "}
                        <strong>{`${value}`}</strong>
                      </p>
                      <small className="subtoal__gift">
                        <input type="checkbox"></input> This order contains Gift
                      </small>
                    </>
                  )}
                  displayType={"text"}
                  decimalScale={2}
                  prefix={"$"}
                  suffix={"/-"}
                  thousandSeparator={true}
                  value={getBasketTotal(basket)}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span> {processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
