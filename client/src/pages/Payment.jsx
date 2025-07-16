import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../slices/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';

function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  
  const [paymentMethod, setPaymentMethod] = useState('Stripe');

  React.useEffect(() => {
    if (!shippingAddress?.address) {
      navigate('/shipping');
    }
  }, [navigate, shippingAddress]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <CheckoutSteps step1 step2 step3 />
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-darkerBg mb-8 text-center">
            Payment Method
          </h1>

          <form onSubmit={submitHandler} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-darkerBg">
                Select Payment Method
              </h3>
              
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-lightPurple cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Stripe"
                    checked={paymentMethod === 'Stripe'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3 text-lightPurple"
                  />
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💳</span>
                    <div>
                      <div className="font-medium text-darkerBg">Credit/Debit Card</div>
                      <div className="text-sm text-gray-600">Powered by Stripe</div>
                    </div>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-lightPurple cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={paymentMethod === 'Cash on Delivery'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3 text-lightPurple"
                  />
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💵</span>
                    <div>
                      <div className="font-medium text-darkerBg">Cash on Delivery</div>
                      <div className="text-sm text-gray-600">Pay when you receive</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => navigate('/shipping')}
                className="flex-1 border-2 border-mediumBlue text-mediumBlue py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:bg-mediumBlue hover:text-white"
              >
                Back to Shipping
              </button>
              
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-lightPurple to-mediumBlue text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:opacity-90"
              >
                Continue to Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;