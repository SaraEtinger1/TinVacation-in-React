import InviatVacation from "../order/InviateVacation"

const HotelItem = ({ one ,currency}) => {


    return (
        <div>
            <h2>{one.hotelName}</h2>
            <h3>{one.adress}</h3>
            <h3>{one.roomType}</h3>
            <h3>{one.price}</h3>
            <h3>{one.opinion}</h3>
            <h3>{one.imgRoom}</h3>
            <h3>{one.imgHotel}</h3>
            <h3>{one.kosher}</h3>
            <h4>{currency}</h4>


        </div>
    )
}

export default HotelItem;