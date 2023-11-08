import axios from "../BaseUrl";

export const uploadImage = async (body) => {
    try {
        const response = await axios.post("uploadImage", body);
        return response;
    } catch (err) {
        return err.response
    }
}