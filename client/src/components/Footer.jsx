import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 lg:col-span-1">
                        <h2 className="text-2xl font-bold text-blue-400 mb-4">
                            ShopEase
                        </h2>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                            Your one-stop destination for quality products at unbeatable prices. 
                            Experience seamless shopping with fast delivery and excellent customer service.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.281C3.832 14.616 3.832 12.78 5.126 11.486c1.295-1.295 3.387-1.295 4.682 0 1.295 1.294 1.295 3.13 0 4.424-.875.79-2.026 1.078-3.359 1.078z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/products" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/help" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="/shipping" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                                    Shipping Info
                                </a>
                            </li>
                            <li>
                                <a href="/returns" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                                    Returns & Exchanges
                                </a>
                            </li>
                            <li>
                                <a href="/size-guide" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                                    Size Guide
                                </a>
                            </li>
                            <li>
                                <a href="/track-order" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                                    Track Your Order
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Subscribe to our newsletter for exclusive offers and updates.
                        </p>
                        <form className="space-y-3">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2025 ShopEase. All rights reserved.
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                            <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                                Terms of Service
                            </a>
                            <a href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer