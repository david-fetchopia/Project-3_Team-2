import React from "react";
import "./style.css";

//Search Bar
export function SearchBar(props) {
return (
<div className="searchNav">
  <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
</div>
  );
}

export default SearchBar;