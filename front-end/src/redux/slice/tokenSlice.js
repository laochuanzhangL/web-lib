import { createSlice } from "@reduxjs/toolkit"

export const tokenInfoSlice = createSlice({
  //命名空间
  name: "tokenInfo",
  //初始值
  initialState: { token: null },

  reducers: {
    getToken: (state, action) => {
      state.token = action.payload
    },
  },
  extraReducers: {},
})
//导出reducer
export const tokenInfoSliceReducer = tokenInfoSlice.reducer
//导出actions
export const { getToken } = tokenInfoSlice.actions
