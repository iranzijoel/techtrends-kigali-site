
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategory from '@/components/ProductCategory';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-techblue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Latest Tech</h3>
                <p className="text-gray-600">
                  Stay ahead with the most recent innovations and newest releases in electronics and gadgets.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-techblue-light rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  Multiple secure payment options and flexible installment plans for your convenience.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 mx-auto bg-techblue-lighter rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Our technical experts are available to help you choose the right products and provide support.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <ProductCategory />
        
        <section className="gradient-bg py-16 text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Stay Updated with TechTrends</h3>
                <p className="text-white/80">
                  Subscribe to our newsletter for the latest product releases and exclusive offers.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-3 rounded-l-md w-full md:w-64 text-gray-800 focus:outline-none"
                  />
                  <button 
                    type="submit" 
                    className="bg-techorange hover:bg-orange-600 px-6 py-3 rounded-r-md text-white font-medium transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container">
            <h2 className="section-title text-center mb-12">Why Choose TechTrends?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-techblue flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Authentic Products</h3>
                  <p className="text-gray-600">
                    All products sold at TechTrends are 100% authentic with manufacturer warranty and support.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-techblue-light flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
                  <p className="text-gray-600">
                    Our dedicated support team is available around the clock to assist you with any questions or issues.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-techblue-lighter flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">
                    Get the best deals on electronic gadgets with our price-match guarantee and special promotions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-techorange flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Quick and reliable delivery options available throughout Kigali and nationwide with tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
