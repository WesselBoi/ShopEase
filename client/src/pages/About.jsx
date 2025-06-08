import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='min-h-screen bg-purpleBg'>
      {/* Hero Section */}
      <section className='relative py-20 px-4 bg-gradient-to-br from-purpleBg to-darkerBg'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 text-goldish'>
            About Premium Store
          </h1>
          <p className='text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed'>
            Your trusted partner in delivering quality products and exceptional shopping experiences since day one.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold mb-6 text-goldish'>Our Story</h2>
              <p className='text-lg text-white mb-6 leading-relaxed'>
                Premium Store was founded with a simple mission: to provide customers with access to high-quality products at competitive prices. What started as a small venture has grown into a trusted e-commerce platform serving customers worldwide.
              </p>
              <p className='text-lg text-white mb-6 leading-relaxed'>
                We believe that everyone deserves access to premium products without breaking the bank. Our team carefully curates each item in our collection, ensuring that every purchase meets our strict quality standards.
              </p>
              <p className='text-lg text-white leading-relaxed'>
                Today, we're proud to serve thousands of satisfied customers, and we're just getting started on our journey to become your go-to destination for all your shopping needs.
              </p>
            </div>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <div className='text-center'>
                <div className='w-20 h-20 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                  <svg className='w-10 h-10 text-white' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-darkerBg mb-4'>Excellence Driven</h3>
                <p className='text-mediumBlue'>
                  Every decision we make is guided by our commitment to excellence and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 px-4 bg-gradient-to-br from-darkerBg to-purpleBg'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 text-goldish'>Our Values</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd'></path>
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-4 text-darkerBg'>Quality First</h3>
              <p className='text-mediumBlue leading-relaxed'>
                We never compromise on quality. Every product is carefully selected and tested to meet our high standards.
              </p>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'></path>
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-4 text-darkerBg'>Customer Focused</h3>
              <p className='text-mediumBlue leading-relaxed'>
                Our customers are at the heart of everything we do. Your satisfaction is our top priority.
              </p>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
              <div className='w-16 h-16 bg-lightPurple rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clipRule='evenodd'></path>
                </svg>
              </div>
              <h3 className='text-2xl font-bold mb-4 text-darkerBg'>Trust & Integrity</h3>
              <p className='text-mediumBlue leading-relaxed'>
                We build lasting relationships through honest business practices and transparent communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16 text-goldish'>Meet Our Team</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300'>
              <div className='w-24 h-24 bg-gradient-to-br from-lightPurple to-mediumBlue rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-2xl font-bold text-white'>JS</span>
              </div>
              <h3 className='text-xl font-bold mb-2 text-darkerBg'>John Smith</h3>
              <p className='text-mediumBlue mb-4'>Founder & CEO</p>
              <p className='text-sm text-mediumBlue leading-relaxed'>
                Visionary leader with 10+ years of e-commerce experience, passionate about delivering exceptional customer experiences.
              </p>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300'>
              <div className='w-24 h-24 bg-gradient-to-br from-lightPurple to-mediumBlue rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-2xl font-bold text-white'>SJ</span>
              </div>
              <h3 className='text-xl font-bold mb-2 text-darkerBg'>Sarah Johnson</h3>
              <p className='text-mediumBlue mb-4'>Head of Operations</p>
              <p className='text-sm text-mediumBlue leading-relaxed'>
                Operations expert ensuring smooth logistics and quality control across all our product lines and services.
              </p>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300'>
              <div className='w-24 h-24 bg-gradient-to-br from-lightPurple to-mediumBlue rounded-full mx-auto mb-6 flex items-center justify-center'>
                <span className='text-2xl font-bold text-white'>MD</span>
              </div>
              <h3 className='text-xl font-bold mb-2 text-darkerBg'>Mike Davis</h3>
              <p className='text-mediumBlue mb-4'>Customer Success Manager</p>
              <p className='text-sm text-mediumBlue leading-relaxed'>
                Dedicated to ensuring every customer has an amazing experience with our products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 bg-gradient-to-r from-lightPurple to-mediumBlue'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6 text-white'>
            Ready to Experience the Difference?
          </h2>
          <p className='text-xl mb-8 text-white opacity-90'>
            Join our community of satisfied customers and discover why Premium Store is the preferred choice for quality shopping.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link 
              to='/products' 
              className='px-8 py-4 bg-white text-lightPurple font-bold text-lg rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              Shop Now
            </Link>
            <Link 
              to='/contact' 
              className='px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-lightPurple transition-all duration-300 transform hover:scale-105'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About