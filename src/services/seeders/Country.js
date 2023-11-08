import axios from "../BaseUrl";

export const countryData = async () => {
    try {
        const response = await axios.get("/countrySeeder");
        return response;
    } catch (err) {
        return err.response
    }
}