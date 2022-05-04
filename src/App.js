import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import InitCart from "./components/InitCart";

library.add(faPlus, faMinus);
function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const deliveryFees = 2.5;
  let subTotal = 0;
  cart.forEach((cartItem) => {
    subTotal += cartItem.price * cartItem.quantity;
  });
  const total = subTotal + deliveryFees;

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-back-end-api.herokuapp.com/"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addItem = (item) => {
    const newCart = [...cart];
    const exist = newCart.find((elem) => elem.id === item.id);

    if (exist) {
      exist.quantity++;
      setCart(newCart);
    } else {
      item.quantity = 1;
      newCart.push(item);
      setCart(newCart);
    }
  };

  const removeItem = (item) => {
    const newCart = [...cart];
    const exist = newCart.find((elem) => elem.id === item.id);
    if (exist.quantity === 1) {
      const index = newCart.indexOf(exist);
      newCart.splice(index, 1);
    } else {
      exist.quantity--;
    }
    setCart(newCart);
  };

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Header restaurant={data.restaurant} />
      <div className="center">
        <div className="direction">
          {data.categories.map((items, index) => {
            const AtLeastOneMeal = items.meals.length > 0;
            return (
              AtLeastOneMeal && (
                <div className="menus">
                  <h2 className="h2Menus" key={index}>
                    {items.name}
                  </h2>
                  <div className="menu">
                    {items.meals.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="item"
                          onClick={() => {
                            addItem(item);
                          }}
                        >
                          <div className="leftItem">
                            <h3 className="h3Menu">{item.title}</h3>
                            <p className="itemDescription">
                              {item.description}
                            </p>
                            <p className="price">{item.price} €</p>
                          </div>
                          {item.picture && (
                            <img
                              className="pictureItem"
                              src={item.picture}
                              alt=""
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div className="cart">
          <InitCart
            cart={cart}
            addItem={addItem}
            removeItem={removeItem}
            subTotal={subTotal}
            deliveryFees={deliveryFees}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
