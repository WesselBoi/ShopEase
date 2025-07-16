import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useCreateOrderMutation } from '../slices/orderApiSlice';
import { useGetStripeConfigQuery, useCreatePaymentIntentMutation } from '../slices/stripeApiSlice';
import { clearCartItems } from '../slices/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';
import StripePayment from '../components/StripePayment';

function PlaceOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cart = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  
  const [createOrder, { isLoading: orderLoading, error: orderError }] = useCreateOrderMutation();
  const [createPaymentIntent, { isLoading: paymentLoading }] = useCreatePaymentIntentMutation();
  const { data: stripeConfig } = useGetStripeConfigQuery();
  
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [showStripeForm, setShowStripeForm] = useState(false);

  // Initialize Stripe
  useEffect(() => {
    if (stripeConfig?.publishableKey) {
      setStripePromise(loadStripe(stripeConfig.publishableKey));
    }
  }, [stripeConfig]);

  useEffect(() => {
    if (!isOrderProcessing) {
      if (!cart.shippingAddress?.address) {
        navigate('/shipping');
      } else if (!cart.paymentMethod) {
        navigate('/payment');
      } else if (cart.cartItems.length === 0) {
        navigate('/cart');
      }
    }
  }, [cart.paymentMethod, cart.shippingAddress, cart.cartItems, navigate, isOrderProcessing]);

  // Calculate prices
  const itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.18 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const placeOrderHandler = async () => {
    try {
      setIsOrderProcessing(true);

      if (cart.paymentMethod === 'Stripe') {
        // Create payment intent for Stripe
        const paymentIntentRes = await createPaymentIntent({
          amount: totalPrice,
          currency: 'inr',
          metadata: {
            orderId: `order_${Date.now()}`,
            userId: userInfo._id,
          }
        }).unwrap();

        setClientSecret(paymentIntentRes.clientSecret);
        setShowStripeForm(true);
      } else {
        const orderData = {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: itemsPrice.toFixed(2),
          shippingPrice: shippingPrice.toFixed(2),
          taxPrice: taxPrice.toFixed(2),
          totalPrice: totalPrice.toFixed(2),
        };

        const res = await createOrder(orderData).unwrap();
        
        dispatch(clearCartItems());
        navigate("/ordersuccessfull", { 
          state: { 
            orderId: res._id,
            orderData: res 
          } 
        });
      }
    } catch (err) {
      console.error('Place order error:', err);
      setIsOrderProcessing(false);
    }
  };

  const handleStripePaymentSuccess = async (paymentIntent) => {
    try {
      // Create order with payment information
      const orderData = {
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: itemsPrice.toFixed(2),
        shippingPrice: shippingPrice.toFixed(2),
        taxPrice: taxPrice.toFixed(2),
        totalPrice: totalPrice.toFixed(2),
        paymentResult: {
          id: paymentIntent.id,
          status: paymentIntent.status,
          update_time: new Date().toISOString(),
          email_address: userInfo.email,
        },
      };

      const res = await createOrder(orderData).unwrap();
      
      dispatch(clearCartItems());
      navigate("/ordersuccessfull", { 
        state: { 
          orderId: res._id,
          orderData: res,
          paymentId: paymentIntent.id
        } 
      });
    } catch (err) {
      console.error('Order creation after payment error:', err);
      setIsOrderProcessing(false);
    }
  };

  const handleStripePaymentError = (error) => {
    console.error('Stripe payment error:', error);
    setIsOrderProcessing(false);
    setShowStripeForm(false);
    setClientSecret('');
  };

  if (cart.cartItems.length === 0 && !isOrderProcessing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl mb-4">Your cart is empty</h2>
          <Link to="/" className="bg-lightPurple px-6 py-3 rounded-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Show Stripe payment form
  if (showStripeForm && stripePromise && clientSecret) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <CheckoutSteps step1 step2 step3 step4 />
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-darkerBg mb-8 text-center">
              Complete Your Payment
            </h1>

            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <StripePayment
                clientSecret={clientSecret}
                onPaymentSuccess={handleStripePaymentSuccess}
                onPaymentError={handleStripePaymentError}
                totalAmount={totalPrice.toFixed(2)}
              />
            </Elements>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setShowStripeForm(false);
                  setClientSecret('');
                  setIsOrderProcessing(false);
                }}
                className="text-mediumBlue hover:text-lightPurple transition-colors"
              >
                ← Back to Order Review
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purpleBg to-darkerBg py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Checkout Steps */}
        <CheckoutSteps step1 step2 step3 step4 />
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-goldish mb-2">Review Your Order</h1>
          <p className="text-white opacity-75">Please review your order details before placing your order</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Shipping */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-darkerBg mb-4 flex items-center">
                <span className="text-2xl mr-2">🚚</span>
                Shipping Information
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Address:</strong> {cart.shippingAddress?.address}
                </p>
                <p className="text-gray-700">
                  <strong>City:</strong> {cart.shippingAddress?.city}
                </p>
                <p className="text-gray-700">
                  <strong>Postal Code:</strong> {cart.shippingAddress?.postalCode}
                </p>
                <p className="text-gray-700">
                  <strong>Country:</strong> {cart.shippingAddress?.country}
                </p>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-darkerBg mb-4 flex items-center">
                <span className="text-2xl mr-2">💳</span>
                Payment Method
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Method:</strong> {cart.paymentMethod}
                </p>
                {cart.paymentMethod === 'Stripe' && (
                  <p className="text-blue-600 text-sm mt-2">
                    💡 You'll be redirected to secure payment form
                  </p>
                )}
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-darkerBg mb-4 flex items-center">
                <span className="text-2xl mr-2">📦</span>
                Order Items
              </h3>
              <div className="space-y-4">
                {cart.cartItems.map((item, index) => (
                  <div key={index} className="flex items-center py-4 border-b last:border-b-0">
                    <div className="w-16 h-16 mr-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <Link to={`/product/${item._id}`} className="text-darkerBg hover:text-lightPurple font-medium">
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-600">Quantity: {item.qty}</p>
                    </div>
                    <div className="text-gray-700 font-medium">
                      ₹{(item.qty * item.price).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-2xl font-bold text-darkerBg mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-700">Items ({cart.cartItems.reduce((acc, item) => acc + item.qty, 0)})</span>
                  <span className="font-semibold">₹{itemsPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Shipping</span>
                  <span className="font-semibold">₹{shippingPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Tax (18%)</span>
                  <span className="font-semibold">₹{taxPrice.toFixed(2)}</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-xl">
                  <span className="font-bold text-darkerBg">Total</span>
                  <span className="font-bold text-lightPurple">₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {(orderError || paymentLoading) && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">
                    {orderError?.data?.error || orderError?.error || 'Processing payment...'}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-lightPurple to-mediumBlue text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={cart.cartItems.length === 0 || orderLoading || paymentLoading || isOrderProcessing}
                  onClick={placeOrderHandler}
                >
                  {(orderLoading || paymentLoading || isOrderProcessing) ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {cart.paymentMethod === 'Stripe' ? 'Preparing Payment...' : 'Placing Order...'}
                    </div>
                  ) : (
                    cart.paymentMethod === 'Stripe' ? '💳 Proceed to Payment' : '🛒 Place Order'
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/payment')}
                  className="w-full border-2 border-mediumBlue text-mediumBlue py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:bg-mediumBlue hover:text-white"
                  disabled={isOrderProcessing}
                >
                  Back to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;