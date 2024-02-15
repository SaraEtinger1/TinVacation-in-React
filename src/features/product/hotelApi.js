import axios from "axios";

const baseUrl = "http://localhost:4500/api/Hotel";

export const getAllHotelFromServer = () => {
    return axios.get(baseUrl);
}

export const getHotelByIdFromServer = (id) => {
    return axios.get(baseUrl + "/" + id);
}