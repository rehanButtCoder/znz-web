import axios from "../BaseUrl";

export const createProposal = async (body, token, userId, jobId) => {
    // debugger;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await axios.post(`createProposal/${userId}/${jobId}`, body, config);
        return response;
    } catch (err) {
        return err.response;
    }
};
export const getProposalOfJob = async (token, jobId) => {
    // debugger;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await axios.get(`getProposalsByJob/${jobId}`, config);
        return response;
    } catch (err) {
        return err.response;
    }
};
