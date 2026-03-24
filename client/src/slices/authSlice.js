import { createSlice } from "@reduxjs/toolkit";

// Helper function to get user info from localStorage
const getUserFromStorage = () => {
  try {
    const userInfo = localStorage.getItem("userInfo");
    const parsedUser = userInfo ? JSON.parse(userInfo) : null;
    const storedToken = localStorage.getItem("authToken");

    if (parsedUser && storedToken && !parsedUser.token) {
      return { ...parsedUser, token: storedToken };
    }

    return parsedUser;
  } catch (error) {
    console.error("Error parsing userInfo from localStorage:", error);
    localStorage.removeItem("userInfo"); // Clear corrupted data
    localStorage.removeItem("authToken");
    return null;
  }
};

//Starting state - like an empty membership database
const storedUser = getUserFromStorage();

const initialState = {
  userInfo: storedUser,
  isAuthenticated: Boolean(storedUser),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //When user logs in successfully
    setLoginCredentials: (state, action) => {
      state.userInfo = action.payload; //Save user info in state
      state.isAuthenticated = true; //Mark as logged in
      localStorage.setItem("userInfo", JSON.stringify(action.payload)); //Save user info in localStorage
      if (action.payload?.token) {
        localStorage.setItem("authToken", action.payload.token);
      }
    },

    //When user registers successfully
    setRegisterCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      if (action.payload?.token) {
        localStorage.setItem("authToken", action.payload.token);
      }
    },

    //When user logs out
    logout: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      localStorage.removeItem("userInfo"); //Remove user info from localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("cartItems"); // Clear cart too
    },
  },
});

// Export actions (the commands you can send)
export const { setLoginCredentials , setRegisterCredentials , logout } = authSlice.actions;

// Export reducer (the worker that processes commands)
export default authSlice.reducer;
