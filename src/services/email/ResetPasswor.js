import axios from "../BaseUrl";

export const resetPassword = async (id, body) => {
    try {
        const response = await axios.post(`/forgetPassword${id}`, body);
        return response;
    } catch (err) { 
        return err.response
    }
}