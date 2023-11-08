import axios from "../BaseUrl";
export const topSellers = async () => {
    try {
        const response = await axios.get('/getTopSeller');
        return response;
    } catch (err) {
        return err.response
    }
}
