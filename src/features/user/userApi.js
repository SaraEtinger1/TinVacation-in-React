import axios from "axios";

const baseUrl = "http://localhost:4500/api/User";

export const login = async (user) => {
    console.log (user)
    const {data} = await axios.post (`${baseUrl}/login`, user)
    console.log(data)
    return data;
}