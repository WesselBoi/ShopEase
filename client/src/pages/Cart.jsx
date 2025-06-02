import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link , useNavigate} from "react-router-dom";
import { addToCart , removeFromCart } from "../slices/cartSlice";
import { FaTrashAlt } from "react-icons/fa";

function Cart() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async(id) => {
    dispatch(removeFromCart(id));
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-[#7965C1]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-[#E3D095]">
            Shopping Cart
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white">
            Review your selected items and proceed to checkout when ready.
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-3xl font-bold mb-4 text-[#0E2148]">
                Your cart is empty
              </h2>
              <p className="text-lg text-[#483AA0] mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-200 hover:opacity-90 hover:scale-105 bg-[#483AA0]"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Continue Shopping
            </Link>
          </div>
        ) : (
          /* Cart Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Column */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="sm:w-48 h-48 sm:h-auto">
                      <Link to={`/product/${item._id}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <Link to={`/product/${item._id}`}>
                          <h3 className="text-xl font-bold mb-2 text-[#0E2148]">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-2xl font-bold mb-4 text-[#7965C1]">
                          ${item.price}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Quantity Selector */}
                        <div className="flex items-center space-x-3">
                          <label className="text-sm font-medium text-[#0E2148]">
                            Quantity:
                          </label>
                          <select
                            value={item.qty}
                            onChange={(e) =>
                              addToCartHandler(item, Number(e.target.value))
                            }
                            className="border-2 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 transition-all duration-200 border-[#483AA0] focus:ring-[#7965C1]"
                          >
                            {[...Array(10)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Remove Button */}
                        <button className="text-red-600 hover:text-red-800 font-medium transition-colors duration-200 cursor-pointer" onClick={() => removeFromCartHandler(item._id)}>
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h3 className="text-2xl font-bold mb-6 text-[#0E2148]">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#483AA0]">
                      Items (
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                    </span>
                    <span className="font-semibold text-[#0E2148]">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#483AA0]">Shipping</span>
                    <span className="font-semibold text-[#0E2148]">
                      ${totalPrice > 100 ? "0.00" : "10.00"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#483AA0]">Tax</span>
                    <span className="font-semibold text-[#0E2148]">
                      ${(totalPrice * 0.18).toFixed(2)}
                    </span>
                  </div>
                  <hr className="border-[#483AA0]" />
                  <div className="flex justify-between text-xl">
                    <span className="font-bold text-[#0E2148]">Total</span>
                    <span className="font-bold text-[#7965C1]">
                      $
                      {(
                        totalPrice +
                        (totalPrice > 100 ? 0 : 10) +
                        totalPrice * 0.18
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full text-white py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105 bg-[#483AA0]" onClick={checkoutHandler}>
                    Proceed to Checkout
                  </button>
                  <Link
                    to="/"
                    className="block w-full text-center text-[#483AA0] py-3 px-6 rounded-lg font-medium border-2 border-[#483AA0] transition-all duration-200 hover:bg-[#483AA0] hover:text-white"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
