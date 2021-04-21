export const actionSampleWoPayload = (type) => {
    return () => {
        return { type };
    };
};

export const actionSamplePayload = (type) => {
    return (payload) => {
        return {
            type,
            payload,
        };
    };
};

export const actionAsyncSamplePayload = (type) => {
    return (payload) => async dispatch => {
        dispatch({
            type,
            payload,
        });
    };
};