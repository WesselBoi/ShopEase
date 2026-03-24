import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";

function Home() {
  const { data: products, isLoading } = useGetProductsQuery();
  const featuredProducts = products?.slice(0, 4) || [];

  return (
    <div className="min-h-screen bg-purpleBg">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_18%,rgba(6,182,212,0.24),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(249,115,22,0.22),transparent_30%),linear-gradient(140deg,#0b1020_0%,#131a2f_56%,#0b1020_100%)]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-lightPurple/20 blur-3xl" />
        <div className="absolute -right-16 bottom-16 h-72 w-72 rounded-full bg-goldish/15 blur-3xl" />
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-goldish leading-tight">
            Welcome to
            <span className="block text-white">ShopEase</span>
          </h1>
          <p className="text-xl md:text-xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
            Discover amazing products with unbeatable quality and prices. Your
            perfect shopping experience starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="rounded-full bg-goldish px-8 py-4 text-lg font-bold text-darkerBg shadow-lg shadow-goldish/25 transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
            >
              Shop Now
            </Link>
            <Link
              to="/products"
              className="rounded-full border border-white/50 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-darkerBg"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {!isLoading && featuredProducts.length > 0 && (
        <section className="bg-gradient-to-b from-darkerBg/90 to-purpleBg py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-goldish">
                Featured Products
              </h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Check out some of our most popular items loved by customers
                worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <Link
                  to={`/product/${product._id}`}
                  key={product._id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex flex-col flex-grow bg-slate-100 px-6 py-4">
                    <h3 className="text-lg font-bold mb-2 text-darkerBg line-clamp-2 flex-grow">
                      {product.name}
                    </h3>
                    <p className="mt-auto text-2xl font-bold text-mediumBlue">
                      ₹{product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-block rounded-full bg-goldish px-8 py-4 text-lg font-bold text-darkerBg shadow-lg shadow-goldish/25 transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="bg-[linear-gradient(120deg,#06b6d4_0%,#2563eb_65%,#1d4ed8_100%)] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 text-white opacity-90">
            Join thousands of satisfied customers and discover your next
            favorite product today.
          </p>
          <Link
            to="/products"
            className="inline-block rounded-full bg-white px-10 py-5 text-xl font-bold text-mediumBlue shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
          >
            Start Shopping Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
