import { useState, useEffect } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

function StripePayment({ clientSecret, onPaymentSuccess, onPaymentError, totalAmount }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }
  }, [stripe, clientSecret, onPaymentSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/ordersuccessfull`,
      },
      redirect: 'if_required'
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
      onPaymentError(error);
    } else {
      // Payment succeeded
      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
      onPaymentSuccess(paymentIntent);
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs"
  };

  return (
    <div className="space-y-6">
      {/* Test Card Info */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        <h4 className="text-yellow-800 font-semibold mb-2">🧪 🔧 Test Mode: No real payments will be processed.</h4>
        <p className="text-yellow-600 text-md mt-1 font-bold">
          Use Stripe test cards like 4242 4242 4242 4242.
        </p>
        <p className="text-yellow-600 text-md mt-1 font-bold">
          Expiry: Any future date, CVC: Any 3 digits
        </p>
        <a href="https://stripe.com/docs/testing#international-cards" target="_blank" rel="noopener noreferrer" className='text-yellow-600 text-md mt-1 font-bold underline hover:text-yellow-800 transition-colors duration-200'>
  View Stripe test card numbers
</a>

      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          💳 Secure Payment
        </h3>
        <p className="text-blue-600 text-sm">
          Total Amount: <span className="font-bold">₹{totalAmount}</span>
        </p>
        <p className="text-blue-600 text-xs mt-1">
          Your payment is secured by Stripe
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <PaymentElement options={paymentElementOptions} />
        
        <button
          disabled={isLoading || !stripe || !elements}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing Payment...
            </div>
          ) : (
            `🔒 Pay ₹${totalAmount}`
          )}
        </button>

        {message && (
          <div className={`p-4 rounded-lg ${
            message.includes('succeeded') 
              ? 'bg-green-50 text-green-700' 
              : 'bg-red-50 text-red-700'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}

export default StripePayment;