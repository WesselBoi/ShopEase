import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  return (
    <div className='min-h-screen bg-purpleBg'>
      {/* Hero Section */}
      <section className='relative py-20 px-4 bg-gradient-to-br from-purpleBg to-darkerBg'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 text-goldish'>
            Get In Touch
          </h1>
          <p className='text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed'>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <h2 className='text-3xl font-bold mb-6 text-darkerBg'>Send us a Message</h2>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-sm font-medium text-darkerBg mb-2'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightPurple focus:border-transparent transition-all duration-200'
                    placeholder='Enter your full name'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-darkerBg mb-2'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightPurple focus:border-transparent transition-all duration-200'
                    placeholder='Enter your email address'
                  />
                </div>

                <div>
                  <label htmlFor='subject' className='block text-sm font-medium text-darkerBg mb-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightPurple focus:border-transparent transition-all duration-200'
                    placeholder='What is this about?'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-darkerBg mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightPurple focus:border-transparent transition-all duration-200 resize-none'
                    placeholder='Tell us how we can help you...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full px-8 py-4 bg-lightPurple text-white font-bold text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg'
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className='space-y-8'>
              <div className='bg-white rounded-2xl p-8 shadow-lg'>
                <h3 className='text-2xl font-bold mb-6 text-darkerBg'>Contact Information</h3>
                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-lightPurple rounded-full flex items-center justify-center mr-4'>
                      <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                      </svg>
                    </div>
                    <div>
                      <p className='font-semibold text-darkerBg'>Email</p>
                      <p className='text-mediumBlue'>contact@premiumstore.com</p>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-lightPurple rounded-full flex items-center justify-center mr-4'>
                      <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'></path>
                      </svg>
                    </div>
                    <div>
                      <p className='font-semibold text-darkerBg'>Phone</p>
                      <p className='text-mediumBlue'>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-lightPurple rounded-full flex items-center justify-center mr-4'>
                      <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'></path>
                      </svg>
                    </div>
                    <div>
                      <p className='font-semibold text-darkerBg'>Address</p>
                      <p className='text-mediumBlue'>123 Commerce Street<br />New York, NY 10001</p>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-lightPurple rounded-full flex items-center justify-center mr-4'>
                      <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd'></path>
                      </svg>
                    </div>
                    <div>
                      <p className='font-semibold text-darkerBg'>Business Hours</p>
                      <p className='text-mediumBlue'>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className='bg-white rounded-2xl p-8 shadow-lg'>
                <h3 className='text-2xl font-bold mb-6 text-darkerBg'>Frequently Asked Questions</h3>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-semibold text-darkerBg mb-2'>What are your shipping times?</h4>
                    <p className='text-mediumBlue text-sm'>We typically ship within 1-2 business days and delivery takes 3-7 business days depending on your location.</p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-darkerBg mb-2'>Do you offer returns?</h4>
                    <p className='text-mediumBlue text-sm'>Yes, we offer a 30-day return policy for all unused items in their original packaging.</p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-darkerBg mb-2'>How can I track my order?</h4>
                    <p className='text-mediumBlue text-sm'>Once your order ships, you'll receive a tracking number via email to monitor your package's progress.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 bg-gradient-to-r from-lightPurple to-mediumBlue'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6 text-white'>
            Need Immediate Assistance?
          </h2>
          <p className='text-xl mb-8 text-white opacity-90'>
            Our customer support team is available 24/7 to help you with any questions or concerns.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a 
              href='tel:+15551234567'
              className='px-8 py-4 bg-white text-lightPurple font-bold text-lg rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              Call Now
            </a>
            <a 
              href='mailto:contact@premiumstore.com'
              className='px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-lightPurple transition-all duration-300 transform hover:scale-105'
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact