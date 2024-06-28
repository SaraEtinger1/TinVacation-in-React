import React, { useEffect, useState } from "react";
import "./hotel.css";
import HotelItem from "./HotelItem";
import SmallBasket from "../order/SmallBasket";
import HotelDetails from "./HotelDetails";
import { useSelector } from "react-redux";
import { getAllHotelFromServer } from "./hotelApi";
import InviateVacation from "../order/InviateVacation"

const HotelList = () => {
    const [hotels, setHotels] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [totalPages, setTotalPages] = useState(0);
    const currency = useSelector((state) => state.order.InvitationDil);

    let [isShow, setIsShow] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllHotelFromServer();
                const data = response.data;
                console.log("data" + data)
                const totalPages = Math.ceil(data.length / pageSize);
                setHotels(data);
                setTotalPages(totalPages);

            } catch (error) {
                console.error("Error fetching hotels:", error);
                alert("לא הצליח להביא פרטים מהשרת");
            }
        };

        fetchData();
    }, [pageSize]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const shoeSmallFor3Seconds = () => {
        setIsShow(true);
        setTimeout(() => {
            setIsShow(false)
        }, 3000)
    }
    const startIdx = (page - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    const paginatedHotels = hotels.slice(startIdx, endIdx);

    return (
        <div className="hotel-list-container">
            <h1>הדילים הטובים ביותר</h1>
            <div className="hotel-list">
                {paginatedHotels.map((hotel) => (
                    <div className="hotel-item" key={hotel._id}>
                        <HotelItem one={hotel} currency={currency} />
                        <HotelDetails detials={hotel} />
                        <InviateVacation onAdd={shoeSmallFor3Seconds} one={hotel} />
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button
                    disabled={page === 1}
                    onClick={() => handlePageChange(null, page - 1)}
                >
                    הקודם
                </button>
                <span>{page}</span>
                <button
                    disabled={page === totalPages}
                    onClick={() => handlePageChange(null, page + 1)}
                >
                    הבא
                </button>
            </div>
            <SmallBasket />
        </div>
    );
};

export default HotelList;
