import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../constants";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //Login endpoint
        login: builder.mutation({       //query used for get requests , mutation used for post/put/delete requests
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: "POST",
                body: data,
            })
        }),

        // Register endpoint
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/register`,
                method: "POST",
                body: data,
            })
        }),

        // Logout endpoint
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: "POST",
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApiSlice;