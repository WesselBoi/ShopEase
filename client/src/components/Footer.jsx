import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-darkerBg/95 text-white backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center text-center">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-goldish">
              ShopEase
            </h2>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-300">
              Your one-stop destination for quality products at unbeatable
              prices. Experience seamless shopping with fast delivery and
              excellent customer service.
            </p>

          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="mb-4 text-lg font-semibold text-goldish">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-goldish"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-goldish"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-300 transition-colors duration-200 hover:text-goldish"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;