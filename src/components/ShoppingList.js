import React, { useState } from "react";
import Item from "./Item";

// In the ShoppingList component, there is a <select> element that will allow us to filter the list of items by category.

// Use the useState hook to create a state variable called selectedCategory for keeping track of the selected value from this <select> element. When the value of the <select> element is changed, update state.

// You should also use the selectedCategory variable to determine which items to display in the shopping list. You'll need some way of filtering the array of items based on the selectedCategory.

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItems = items.filter(item => {
    if (selectedCategory === "") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  }
  );

  const itemList = filteredItems.map(item => {
    return <Item key={item.id} name={item.name} category={item.category} />;
  }
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
