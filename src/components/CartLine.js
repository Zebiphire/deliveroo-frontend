import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartLine = ({ cartItem, removeItem, addItem }) => {
  return (
    <div className="cartLine">
      <div className="cartCounter">
        <FontAwesomeIcon
          className="minusFAI"
          icon="minus"
          onClick={() => {
            removeItem(cartItem);
          }}
        />
        <span>{cartItem.quantity}</span>
        <FontAwesomeIcon
          className="plusFAI"
          icon="plus"
          onClick={() => {
            addItem(cartItem);
          }}
        />
      </div>
      <span className="cartItemName">{cartItem.title}</span>
      <span className="CartItemPrice">
        {Number(cartItem.price * cartItem.quantity).toFixed(2) + " €"}
      </span>
    </div>
  );
};

export default CartLine;
