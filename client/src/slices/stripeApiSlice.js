import { apiSlice } from './apiSlice';
import { STRIPE_URL } from '../constants';

export const stripeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStripeConfig: builder.query({
      query: () => ({
        url: `${STRIPE_URL}/config`, 
      }),
    }),
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: `${STRIPE_URL}/create-payment-intent`, 
        method: 'POST',
        body: data,
      }),
    }),
    confirmPayment: builder.mutation({
      query: (data) => ({
        url: `${STRIPE_URL}/confirm-payment`, 
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetStripeConfigQuery,
  useCreatePaymentIntentMutation,
  useConfirmPaymentMutation,
} = stripeApiSlice;