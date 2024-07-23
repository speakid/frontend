import {createSlice} from "@reduxjs/toolkit";

const validatePayload = (action, isUpdate = false) => {
    if (!action || !action.payload) {
        throw new Error(`Invalid action or payload: ${action}`);
    }

    const { image, name, email, phoneNumber, timeZone } = action.payload;
    const checks = {
        imageCheck: typeof image === "string" || image === null,
        nameCheck: typeof name === "string" || (isUpdate && name === undefined),
        emailCheck: typeof email === "string" || (isUpdate && email === undefined),
        phoneNumberCheck: typeof phoneNumber === "string" || phoneNumber === null || (isUpdate && phoneNumber === undefined),
        timeZoneCheck: typeof timeZone === "string" || (isUpdate && timeZone === undefined)
    };

    const badChecks = Object.keys(checks).filter(checkKey => !checks[checkKey]);
    if (badChecks.length > 0) {
        console.error(`Invalid data for action in userSlice. Bad fields: ${badChecks.join(', ')}. Received action:`, action);
        throw new Error(`Invalid data for action in userSlice. Bad fields: ${badChecks.join(', ')}`);
    }
};

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        set: (state, action) => {
            validatePayload(action)
            return action.payload
        },
        remove: (state) => null,
        update: (state, action) => {
            validatePayload(action, true)
            return {...state, ...action.payload}
        }
    },

});

export const { set: setUser, remove: removeUser, update: updateUser } = userSlice.actions;
export default userSlice.reducer;