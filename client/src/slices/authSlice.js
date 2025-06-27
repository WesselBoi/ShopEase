import { createSlice } from "@reduxjs/toolkit";

//Starting state - like an empty membership database
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //When user logs in successfully
    setCredentials: (state, action) => {
      state.userInfo = action.payload; //Save user info in state
      state.isAuthenticated = true; //Mark as logged in
      localStorage.setItem("userInfo", JSON.stringify(action.payload)); //Save user info in localStorage
    },

    //When user logs out
    logout: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      localStorage.removeItem("userInfo"); //Remove user info from localStorage
      localStorage.removeItem("cartItems"); // Clear cart too
    },
  },
});

// Export actions (the commands you can send)
export const { setCredentials, logout } = authSlice.actions;

// Export reducer (the worker that processes commands)
export default authSlice.reducer;
