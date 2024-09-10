import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import SearchBox from "./SearchBox/SearchBox.js";
import FoodContext from "./context/FoodContext.js";

const Product = () => {
  const [product, setProduct] = useState({});

  const {setInput} = useContext(FoodContext)

  const params = useParams();

  async function fetchProduct() {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.productid}`
    );
    setProduct(result.data.meals[0]);
  }

  useEffect(() => {
    setInput("");
    fetchProduct();
  }, []);

  return (
    <div>
      <SearchBox />

      <div className="product">
        <h2>Category : {product.strCategory}</h2>
        <div className="product-img">
          <h3>{product.strMeal}</h3>
          <img
            src={product.strMealThumb}
            alt={product.strMeal}
            style={{ width: "25rem" }}
          />
          <p>{product.strInstructions}</p>
           <div>
           {/* {product.strInstructions.split('\r\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))} */}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
