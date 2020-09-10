import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../components/StateProvider";
import { getBasketTotal } from "../components/Reducer";
import { useHistory } from "react-router-dom";
import "./Subtotal.css";
const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
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
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
