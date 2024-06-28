import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHotelByIdFromServer } from "./hotelApi";
import React from 'react';


const HotelDetials = () => {
    let { id } = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [product, setProduct] = useState(null);

    useEffect(() => {
        getHotelByIdFromServer(id)
        .then(res => {
            setProduct(res.data);
        }).catch(err => {
            console.log(err)
            alert("לא הצליח להביא פרטים מהשרת")
        })
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (

        <div className="a">
            <div className="b">{product.hotelName}
                <div>{product.price}</div>
                <div>{product.adress}</div>
                <div><img src={product.imgRoom} /></div>
                <div>{product.opinion}</div>
                <div>{product.kosher}</div>
            </div>
            <button onClick={() => navigate('/list')}>back</button>

        </div>
    );

}

export default HotelDetials;
