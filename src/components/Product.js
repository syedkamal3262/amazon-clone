import React from "react";
import "./Product.css";
import { useStateValue } from "../components/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addtoBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  const productRating = Number(rating);
  const leftRating = 5 - productRating;

  return (
    <div className="product" key={id}>
      <div className="prduct__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(productRating)
            .fill()
            .map((_) => (
              <p>&#11088;</p>
            ))}
          {Array(leftRating)
            .fill()
            .map((_) => (
              <p className="leftRating">&#9734;</p>
            ))}
        </div>
      </div>
      <img alt="" src={image}></img>
      <button onClick={addtoBasket}>Add to Cart</button>
    </div>
  );
};

export default Product;
