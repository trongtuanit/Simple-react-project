import React from "react";
import CocktailList from "../components/CocktailList";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <CocktailList />
    </div>
  );
}
