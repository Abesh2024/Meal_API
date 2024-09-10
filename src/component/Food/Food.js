import React, { useContext, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import './Food.css'
import FoodContext from "../context/FoodContext";

const Food = () => {
  // const [category, setCategory] = useState([]);

  const {category, setCategory} = useContext(FoodContext);

  const params = useParams();

  console.log("params", params);
  async function fetchCategory() {
    const result = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setCategory(result.data.categories);
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="category">
      <h2>Meal Category</h2>
      <div className="category-page">
      {category.map((subCategory) => {
        return (
          <div key={subCategory.idCategory} className="category-card">
            <NavLink to={`/subcategory/${subCategory.strCategory}`}>
              <p>{subCategory.strCategory}</p>
              {/* <p>{subCategory.strCategoryDescription}</p> */}
              <img
                src={subCategory.strCategoryThumb}
                alt={subCategory.strCategory}
              />
            </NavLink>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Food;
