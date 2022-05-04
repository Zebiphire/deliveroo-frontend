const CartResults = ({ subTotal, deliveryFees, total }) => {
  return (
    <div className="resultsPrice">
      <div className="cartResults">
        <div className="cartResultLine">
          <span className="cartResultName">Sous-total</span>
          <span className="cartResultPrice">{subTotal.toFixed(2) + " €"}</span>
        </div>
        <div className="cartResultLine">
          <span className="cartResultName">Frais de livraison</span>
          <span className="CartResultPrice">
            {deliveryFees.toFixed(2) + " €"}
          </span>
        </div>
      </div>
      <div className="cartTotal">
        <span className="cartResultName">Total</span>
        <span className="CartResultPrice">{total.toFixed(2) + " €"}</span>
      </div>
    </div>
  );
};
export default CartResults;
