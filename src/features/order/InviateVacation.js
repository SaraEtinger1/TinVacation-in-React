import { useDispatch } from "react-redux";
import { addDil } from "./orderSlice";

const InviatVacation = ({ one ,onAdd}) => {

    let dispatch = useDispatch({ one });

    let x = 0;
    const save = (e) => {
        e.preventDefault();
        dispatch(addDil({...one,qty:x}))
        onAdd()
    }

    return (<>
        <form onSubmit={save}>
                <input type="number" onChange={(e) => {
                    x = +e.target.value;
                }} name="naumber"/>
                <input type="submit" />
            </form>

    </>);
}

export default InviatVacation;