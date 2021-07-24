import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading.jsx";

const SingleCocktail = () => {
  const { id } = useParams();
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  console.log(id);

  const getCocktail = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    console.log(id);
    getCocktail();
  }, [id, getCocktail]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;

    return (
      <div className="single-cocktail">
        <Link className="back-home-btn" to="/">
          Back to home
        </Link>
        <h1 className="single-cocktail-name">{name}</h1>
        <div className="single-cocktail-content">
          <div className="img-container">
            <img src={image} alt={name} />
          </div>
          <div className="infomation">
            <p>
              <span className="drink-data">name: </span> {name}
            </p>
            <p>
              <span className="drink-data">category: </span> {category}
            </p>
            <p>
              <span className="drink-data">info: </span> {info}
            </p>
            <p>
              <span className="drink-data">glass: </span> {glass}
            </p>
            <p>
              <span className="drink-data">instructions: </span> {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients: </span>
              {ingredients.map((item) => {
                if (item) {
                  return (
                    <span>
                      <span> </span>
                      <span className="item">{item}</span>
                    </span>
                  );
                } else {
                  return null;
                }
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleCocktail;
