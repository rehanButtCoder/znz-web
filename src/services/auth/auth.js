import axios from "../BaseUrl";

export const login = async (body) => {
    try {
        const response = await axios.post("UserLogin", body);
        return response;
    } catch (err) {
        return err.response
    }
}
// export const resetPassword = async (id, body) => {
//     try {
//         const response = await axios.post(`/forgetPassword/${id}`, body);
//         return response;
//     } catch (err) {
//         return err.response
//     }
// }
export const logout = async (body) => {
    try {
        const response = await axios.post("/logout", body);
        return response;
    } catch (err) {
        return err.response
    }
}
export const verifyEmail = async (id, token) => {
    try {
        const response = await axios.get(`/verify-email/${id}/${token}`);
        return response;
    } catch (err) {
        return err.response
    }
}
