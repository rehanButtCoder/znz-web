
import axios from "../BaseUrl";

export const forgotPassEmail = async (body) => {
    // debugger;
    try {
        const response = await axios.post("EmailForForgetPassword", body);
        return response;
    } catch (err) {
        return err.response
    }
}