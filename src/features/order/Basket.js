import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, incrementQuantity, decrementQuantity, addDil } from "./orderSlice";
import BasketItem from "./BasketItem";

const Basket = () => {
    const basket = useSelector((state) => state.order.basket);
    const total = basket.reduce((acc, item) => acc + item.price * item.qty, 0);
    const dispatch = useDispatch();

    let x = 0;

    return (
        <div className="basket-container">
            <h1>המוצרים בסל</h1>
            <div className="basket-list">
                {basket.map((item) => (
                    <div key={item.id} className="basket-item">
                        <BasketItem item={item} />
                        <div className="item-controls">
                            <button onClick={() => dispatch(incrementQuantity(item.id))} >
                                +</button>
                            <span> {item.qty} </span>
                            <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button><br />
                            <button onClick={() => dispatch(removeItem(item.id))}>  מחק מוצר מהסל</button>
                        </div>
                    </div>
                ))}
            </div>
            <h3>סה"כ המחיר של כל המלונות שהוזמנו: {total}</h3>
        </div>
    );
};

export default Basket;

