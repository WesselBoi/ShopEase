import React from 'react'
import { Link } from 'react-router-dom'
import { useGetProductsQuery } from "../slices/productsApiSlice.js"

function Home() {
  const { data: products, isLoading } = useGetProductsQuery()
  const featuredProducts = products?.slice(0, 4) || []

  return (
    <div className='min-h-screen bg-purpleBg'>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center bg-gradient-to-br from-purpleBg to-darkerBg'>
        <div className='absolute inset-0 bg-black opacity-20'></div>
        <div className='relative z-10 text-center px-4 max-w-6xl mx-auto'>
          <h1 className='text-6xl md:text-8xl font-bold mb-6 text-goldish leading-tight'>
            Welcome to 
            <span className='block text-white'>Premium Store</span>
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed'>
            Discover amazing products with unbeatable quality and prices. Your perfect shopping experience starts here.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link 
              to='/products' 
              className='px-8 py-4 bg-goldish text-darkerBg font-bold text-lg rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              Shop Now
            </Link>
            <Link 
              to='/products' 
              className='px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-darkerBg transition-all duration-300 transform hover:scale-105'
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 text-goldish'>
            Why Choose Us?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-4 text-darkerBg'>Premium Quality</h3>
              <p className='text-mediumBlue leading-relaxed'>
                We ensure every product meets our high-quality standards before reaching you.
              </p>
            </div>
            
            <div className='text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'></path>
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-4 text-darkerBg'>Fast Delivery</h3>
              <p className='text-mediumBlue leading-relaxed'>
                Quick and reliable shipping to get your products to you as soon as possible.
              </p>
            </div>
            
            <div className='text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z' clipRule='evenodd'></path>
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-4 text-darkerBg'>24/7 Support</h3>
              <p className='text-mediumBlue leading-relaxed'>
                Our dedicated support team is always ready to help you with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {!isLoading && featuredProducts.length > 0 && (
        <section className='py-20 px-4 bg-gradient-to-br from-darkerBg to-purpleBg'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold mb-6 text-goldish'>
                Featured Products
              </h2>
              <p className='text-xl text-white max-w-2xl mx-auto'>
                Check out some of our most popular items loved by customers worldwide
              </p>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              {featuredProducts.map((product) => (
                <Link
                  to={`/product/${product._id}`}
                  key={product._id}
                  className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group'
                >
                  <div className='relative overflow-hidden'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-lg font-bold mb-2 text-darkerBg line-clamp-2'>
                      {product.name}
                    </h3>
                    <p className='text-2xl font-bold text-lightPurple'>
                      ${product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className='text-center mt-12'>
              <Link 
                to='/products' 
                className='inline-block px-8 py-4 bg-goldish text-darkerBg font-bold text-lg rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg'
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className='py-20 px-4 bg-gradient-to-r from-lightPurple to-mediumBlue'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6 text-white'>
            Ready to Start Shopping?
          </h2>
          <p className='text-xl mb-8 text-white opacity-90'>
            Join thousands of satisfied customers and discover your next favorite product today.
          </p>
          <Link 
            to='/products' 
            className='inline-block px-10 py-5 bg-white text-lightPurple font-bold text-xl rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg'
          >
            Start Shopping Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home