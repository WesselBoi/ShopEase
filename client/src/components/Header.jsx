import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const { cartItems} = useSelector((state) => state.cart)
    return (
        <header className="shadow-lg border-b-2 border-blue-900 bg-darkerBg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link to={"/"} className="text-xl sm:text-2xl font-bold hover:opacity-80 transition-opacity duration-200 text-goldish">
                            ShopEase
                        </Link>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-yellow-300 text-goldish">
                            Home
                        </Link>
                        <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-yellow-300 text-goldish">
                            Products
                        </Link>
                        <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-yellow-300 text-goldish">
                            About
                        </Link>
                        <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-yellow-300 text-goldish">
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-2 sm:space-x-4">
                        {/* Desktop Sign In Button */}
                        <button 
                            className="hidden sm:block text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 bg-mediumBlue"
                        >
                            Sign In
                        </button>
                        
                        {/* Cart */}
                        <div className="relative">
                            <Link to={"/cart"} className="text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform duration-200 text-goldish">
                                🛒
                            </Link>
                            <span className="absolute -top-2 -right-2 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold bg-lightPurple">
                                {cartItems?.length > 0 ? cartItems.reduce((acc,item) => acc + item.qty, 0) : 0}
                            </span>
                        </div>

                        {/* Mobile menu button */}
                        <button 
                            className="md:hidden p-2 rounded-md transition-all duration-200 hover:opacity-80 text-goldish"
                            style={{ backgroundColor: 'rgba(72, 58, 160, 0.2)' }}
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
                    <div className="md:hidden border-t py-4 border-mediumBlue">
                        <div className="flex flex-col space-y-2">
                            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-yellow-300 text-goldish">
                                Home
                            </Link>
                            <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-yellow-300 text-goldish">
                                Products
                            </Link>
                            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-yellow-300 text-goldish">
                                About
                            </Link>
                            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-yellow-300 text-goldish">
                                Contact
                            </Link>
                            <button 
                                className="text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 mx-3 mt-2 hover:opacity-90 bg-mediumBlue"
                            >
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