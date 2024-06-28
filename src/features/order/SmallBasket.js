import { useSelector } from "react-redux";

const SmallBasket = () => {
    let basket = useSelector(state => state.order.basket)

    return (
        <div>
            {
                basket.length
            }
        </div>
    );
}

export default SmallBasket;