import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  //ye objet leta hai input or iske compnenet jo niche hai wahi hote
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      (state.status = false), (state.userData = null);
    },
  },
});
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
