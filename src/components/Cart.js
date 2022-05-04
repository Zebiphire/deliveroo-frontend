import CartLine from "./CartLine.js";
import CartResults from "./CartResults.js";

const Cart = ({ cart, addItem, removeItem, subTotal, deliveryFees, total }) => {
  return (
    <div className="cartContainer">
      <div className="cartItems">
        {cart.map((cartItem) => {
          return (
            <CartLine
              key={cart.id}
              cartItem={cartItem}
              addItem={addItem}
              removeItem={removeItem}
            />
          );
        })}
      </div>
      <CartResults
        subTotal={subTotal}
        deliveryFees={deliveryFees}
        total={total}
      />
    </div>
  );
};
export default Cart;
