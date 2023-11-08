import axios from "../BaseUrl";

export const userEmailVerification = async (id) => {
    try {
        const response = await axios.get(`userEmailVerification/${id}`);
        return response;
    } catch (err) {
        return err.response
    }
}

export const sendingConfirmEmail = async (email) => {
    try {
        const response = await axios.get(`/forUserConfirmationEmail/${email}`);
        return response;
    } catch (err) {
        return err.response
    }
}