import Cart from "./Cart";

const InitCart = ({
  cart,
  addItem,
  removeItem,
  subTotal,
  deliveryFees,
  total,
}) => {
  const empty = cart.length === 0;

  return (
    <div className="initCart">
      <div className="init">
        {empty ? (
          <button className="buttonDisabled">Valider mon panier</button>
        ) : (
          <button className="buttonValidate">Valider mon panier</button>
        )}

        {empty ? (
          <p className="emptyCart">Votre panier est vide</p>
        ) : (
          <Cart
            cart={cart}
            addItem={addItem}
            removeItem={removeItem}
            subTotal={subTotal}
            deliveryFees={deliveryFees}
            total={total}
          />
        )}
      </div>
    </div>
  );
};
export default InitCart;
