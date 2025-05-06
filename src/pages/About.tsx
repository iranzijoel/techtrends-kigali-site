
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-techblue/90 to-techblue-light/80 z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
              }}
            ></div>
          </div>

          <div className="container relative z-20 h-full py-16 md:py-24">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About TechTrends Ltd</h1>
              <p className="text-lg opacity-90">
                Learn about our journey, mission, and commitment to bringing the best electronic gadgets to Rwanda.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                  alt="TechTrends office" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2015, TechTrends Ltd began as a small electronics shop in the heart of Kigali. With a vision to bridge the technology gap and make cutting-edge gadgets accessible to all Rwandans, we've grown into one of the leading electronic retailers in the country.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a passion project by a group of tech enthusiasts has evolved into a company trusted by thousands of customers across Rwanda. Our journey has been marked by a commitment to quality, authenticity, and excellent customer service.
                </p>
                <p className="text-gray-600">
                  Today, we offer a comprehensive range of electronic gadgets from smartphones and laptops to smart home devices and accessories, all while maintaining our founding principles of reliability and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-gray-600">
                At TechTrends, we're driven by clear goals and a strong purpose that guide everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-techblue rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To provide accessible, high-quality electronic gadgets that enhance people's lives, backed by exceptional customer service and technical expertise. We strive to make technology approachable and beneficial for everyone in Rwanda.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-techblue-light rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted and innovative electronic gadgets retailer in East Africa, leading the digital transformation in the region while contributing to technological literacy and advancement across communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Core Values</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              These principles guide how we operate and interact with our customers, partners, and community.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-techblue">Integrity</h3>
                <p className="text-gray-600">
                  We conduct our business with honesty, transparency, and ethical standards that earn our customers' trust.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-techblue">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our business, from product selection to customer service.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-techblue">Innovation</h3>
                <p className="text-gray-600">
                  We embrace change and continuously seek new ways to improve our offerings and operations.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-techblue">Customer Focus</h3>
                <p className="text-gray-600">
                  Our customers are at the center of everything we do; their satisfaction is our priority.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-techblue">Community</h3>
                <p className="text-gray-600">
                  We believe in giving back and contributing positively to the communities we serve.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-techblue">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to environmentally responsible practices and promoting sustainable technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Leadership Team</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Meet the dedicated professionals who lead TechTrends with vision and expertise.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">Robert Mugisha</h3>
                  <p className="text-techblue">CEO & Co-Founder</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                    alt="COO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">Sarah Uwimana</h3>
                  <p className="text-techblue">COO</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="CTO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">Jean-Paul Hakizimana</h3>
                  <p className="text-techblue">CTO</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                    alt="Director of Sales" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl">Marie Ingabire</h3>
                  <p className="text-techblue">Director of Sales</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Location</h2>
              <p className="text-gray-600 mb-6">
                Visit our flagship store in Kigali City to experience our products firsthand and meet our expert team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-techblue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>KK 15 Ave, Kigali City, Rwanda</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-techblue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon-Sat: 8:00AM - 6:00PM, Sun: 10:00AM - 4:00PM</span>
                </div>
              </div>
            </div>
            
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Map />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
