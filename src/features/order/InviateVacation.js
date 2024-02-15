import { useDispatch } from "react-redux";
import { addDil } from "./hotelSlice";

const InviatVacation = ({ one }) => {

    let dispatch = useDispatch({ one });

    let x = 0;
    const save = (e) => {
        e.preventDefault();
        dispatch(addDil(one))
    }

    return (<>
        {/* <form onSubmit={save}>
                <input type="number" onClick={(e) => {
                    x = e.target.value
                }} name="naumber"/>
                <input type="submit" />
            </form> */}
        <form onSubmit={save}>
            <input type="number" name="quantity" defaultValue="1" />
            <button type="submit">Add to Cart</button>
        </form>
    </>);
}

export default InviatVacation;