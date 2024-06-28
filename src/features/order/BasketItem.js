import { useDispatch } from "react-redux";

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="basket-item">
      <div className="item-details">
        <h2>{item.hotelName}</h2>
        <p>{item.adress}</p>
        <p>{item.opinion}</p>
        <p>{item.kosher}</p>
      </div>
      <div className="item-actions">
        <img src={item.imgRoom} alt={item.hotelName} />
        <div className="quantity-controls">
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>  
           <span>{item.qty}</span>  
           <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
        </div>
         <button onClick={() => dispatch(removeItem(item.id))}> מחק מוצר מהסל</button> 
      </div>
    </div>
  );
};

export default BasketItem;
