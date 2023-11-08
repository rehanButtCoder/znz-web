import axios from "../BaseUrl";

export const userSignup = async (body) => {
    // debugger;
    try {
        const response = await axios.post("UserRegister", body);
        return response;
    } catch (err) {
        return err.response
    }
}