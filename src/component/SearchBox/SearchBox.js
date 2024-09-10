import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import FoodContext from "../context/FoodContext";
import "./SearchBox.css"

const SearchBox = () => {
  const {setCategory, input, setInput} = useContext(FoodContext);
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    if (input) {
      const delayDebounceFn = setTimeout(() => {
        searchProducts();
      }, 500); // Adding a debounce effect

      return () => clearTimeout(delayDebounceFn);
    } else {
      setProducts([]);
    }
  }, [input]);

  async function searchProducts() {
    try {
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      );
      setProducts(result.data.meals || []); // Handle cases where no meals are returned
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <div className="input-div">
        <div>
          <input
            className="input-box"
            type="text"
            placeholder="Search recipes here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <h1>What are your favorite cuisines?</h1>
        <p>personalize your experience</p>
      </div>

      <div className="meal-page">
        {products.map((product) => (
          <div key={product.idMeal} className="meal-card">
            <div>
              <NavLink to={`/product/${product.idMeal}`}>
                <img
                  src={product.strMealThumb}
                  alt={product.strMeal}
                />
              </NavLink>
              <span className="meal-cat">{product.strCategory}</span>
            </div>
            <span className="meal-area">{product.strArea}</span>
            <h6>{product.strMeal}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
