import axios from "../BaseUrl";

export const getAllCategories = async () => {
    try {
        const response = await axios.get("categorySeeder");
        return response;
    } catch (err) {
        return err.response
    }
}