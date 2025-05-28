import React, { useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-gray-900 shadow-lg border-b-2 border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl sm:text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200">
                            ShopEase
                        </h1>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="/" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                            Home
                        </a>
                        <a href="/products" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                            Products
                        </a>
                        <a href="/about" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                            About
                        </a>
                        <a href="/contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center space-x-2 sm:space-x-4">
                        {/* Desktop Sign In Button */}
                        <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                            Sign In
                        </button>
                        
                        {/* Cart */}
                        <div className="relative">
                            <span className="text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform duration-200">
                                🛒
                            </span>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
                                0
                            </span>
                        </div>

                        {/* Mobile menu button */}
                        <button 
                            className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-800 py-4">
                        <div className="flex flex-col space-y-2">
                            <a href="/" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Home
                            </a>
                            <a href="/products" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Products
                            </a>
                            <a href="/about" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                About
                            </a>
                            <a href="/contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                                Contact
                            </a>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 mx-3 mt-2">
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header