import axios from "../BaseUrl";

export const addToFavJob = async ( body, token) => {
    // debugger;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios.post(`favoriteAdded`, body, config);
        return response;
    } catch (err) {
        return err.response;
    }
};

export const getAllFavJob = async (token, userId) => {
    // debugger;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await axios.get(`getAllFavorite/${userId}`, config);
        return response;
    } catch (err) {
        return err.response;
    }
};

export const deleteFavJob = async (userId, token) => {
    // debugger;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await axios.delete(`deleteFavorites/${userId}`, config);
        return response;
    } catch (err) {
        return err.response;
    }
};
