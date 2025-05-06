
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-techblue/90 to-techblue-light/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')"
          }}
        ></div>
      </div>

      <div className="container relative z-20 h-full flex flex-col justify-center py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl text-white animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Experience the Future of Technology Today
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            TechTrends brings you the latest electronic gadgets with exceptional service and exclusive offers in Kigali.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Link to="/about" className="btn-primary text-center py-3 px-6">
              Learn About Us
            </Link>
            <a href="#products" className="btn-secondary text-center py-3 px-6">
              Explore Products
            </a>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 lg:h-20"
          fill="#ffffff"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,140.87,111.31,214.19,107.09,287.52,103.42,351.93,100.29,421.39,56.44Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
