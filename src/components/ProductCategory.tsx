
import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

const productCategories = [
  {
    id: 1,
    title: "Smartphones",
    description: "The latest smartphones from top brands with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    products: [
      {
        id: 101,
        name: "Galaxy Z Fold",
        description: "Foldable smartphone with large display",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5d357bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        price: "$1,299",
        category: "Smartphones"
      },
      {
        id: 102,
        name: "iPhone Pro Max",
        description: "Premium smartphone with advanced camera",
        image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        price: "$1,099",
        category: "Smartphones"
      }
    ]
  },
  {
    id: 2,
    title: "Laptops",
    description: "High-performance laptops for work, gaming, and everyday use.",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    products: [
      {
        id: 201,
        name: "MacBook Pro",
        description: "Powerful laptop for professionals",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
        price: "$1,999",
        category: "Laptops"
      },
      {
        id: 202,
        name: "Gaming Laptop",
        description: "High-end gaming laptop with RTX GPU",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
        price: "$2,299",
        category: "Laptops"
      }
    ]
  },
  {
    id: 3,
    title: "Tablets",
    description: "Versatile tablets for entertainment, creativity, and productivity.",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    products: [
      {
        id: 301,
        name: "iPad Pro",
        description: "Professional-grade tablet with M2 chip",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
        price: "$799",
        category: "Tablets"
      },
      {
        id: 302,
        name: "Galaxy Tab",
        description: "Android tablet with S Pen support",
        image: "https://images.unsplash.com/photo-1589739900593-8b1b925ee197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        price: "$649",
        category: "Tablets"
      }
    ]
  },
  {
    id: 4,
    title: "Accessories",
    description: "Essential accessories to complement your devices and improve your experience.",
    image: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    products: [
      {
        id: 401,
        name: "Wireless Earbuds",
        description: "Premium noise-canceling earbuds",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        price: "$199",
        category: "Accessories"
      },
      {
        id: 402,
        name: "Smartwatch",
        description: "Fitness and health tracking smartwatch",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        price: "$349",
        category: "Accessories"
      }
    ]
  }
];

interface FeaturedProductProps {
  product: Product;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-techblue">{product.price}</span>
          <button className="text-techorange hover:text-techblue transition-colors text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductCategory = () => {
  return (
    <section id="products" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title text-center">Our Product Categories</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Explore our wide range of electronic gadgets designed to enhance your digital lifestyle.
        </p>
        
        {productCategories.map((category, index) => (
          <div key={category.id} className="mb-16 last:mb-0">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 items-center mb-6`}>
              <div className="w-full md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a href="#" className="text-techorange hover:text-techblue-light transition-colors font-medium inline-flex items-center">
                  Browse {category.title}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
              {category.products.map((product) => (
                <FeaturedProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
