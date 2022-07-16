import React, {useState} from "react";

// In the Item component, when the user clicks the <button> element, the item should be added to their virtual cart. The way we'll show the user that the item is in the cart is by changing the className on the <li> element:

// <li className="in-cart">
// {/* the item is in the cart */}
// </li>

// <li className="">
// {/* the item is NOT in the cart */}
// </li>
// If the item is not in the cart, the <button> element's text should read "Add to Cart", and if the item is in the cart, the <button> element's text should read "Remove From Cart". Naturally, you'll also need to add state to the Item component to solve this deliverable!

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function cartItem(){
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={inCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartItem}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
