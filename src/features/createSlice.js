import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const showdata = createAsyncThunk("showdata", async () => {
    const respoce = await fetch("https://api.spacexdata.com/v3/launches");
    return respoce.json();
})

export const getSpaceXData = createSlice({
    name: "spacexdata",
    initialState: {
        data: null,
        loading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(showdata.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(showdata.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(showdata.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.error = "Error"
        })
    }

})

export default getSpaceXData.reducer