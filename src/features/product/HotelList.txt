import { useEffect, useState } from "react";
import { getAllHotelFromServer } from "./hotelApi";
import HotelItem from "./HotelItem";
import { useSelector } from "react-redux";
import InviateVacation from "../order/InviateVacation"

const HotelList = () => {


    let [arr, setArr] = useState([]);
    let currency = useSelector(state => state.order.InvitationDil);

    useEffect(() => {
        getAllHotelFromServer().then(res => {
            console.log(res)
            setArr(res.data);
        }).catch(err => {
            console.log(err)
            alert("לא הצליח להביא פרטים מהשרת")
        })
    }, [])
    return (<>
        <h1> הדילים הטובים ביותר</h1>
        <ul>
            {arr.map(item => <li key={item._id}><HotelItem one={item} /><InviateVacation one={item} />{currency}

            </li>)}
        </ul>
        

    </>);
}

export default HotelList;