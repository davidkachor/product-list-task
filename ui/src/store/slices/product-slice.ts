import { createSlice } from "@reduxjs/toolkit";
import { MOCHA_DATA } from "../../MOCHA_DATA";

const productSlice = createSlice({
    initialState: MOCHA_DATA,
    name: 'products',
    reducers: {}
})

export default productSlice.reducer