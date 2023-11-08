import axios from "../BaseUrl";

export const updateUser = async (id, token, body) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.put(`UserUpdate/${id}`, body, config);
        return response;
    } catch (err) {
        return err.response;
    }
};
