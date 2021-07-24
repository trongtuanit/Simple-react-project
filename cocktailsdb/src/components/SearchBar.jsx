import React, { useRef } from "react";
import { useGlobalContext } from "../context";

export default function SearchBar() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef(null);

  const getSearchValue = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <div className="search-bar">
      <label htmlFor="name" className="search-bar__heading">
        search your favorite cocktail
      </label>
      <input
        name="name"
        onChange={getSearchValue}
        ref={searchValue}
        type="text"
        className="search-bar__input"
        spellcheck="false"
      />
    </div>
  );
}
