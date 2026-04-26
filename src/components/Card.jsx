import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <div className="relative group">
                <img 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                    src="https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="ROG Zephyrus G14" 
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    New Arrival
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                        ROG Zephyrus G14 Gaming Laptop
                    </h5>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    AMD Ryzen 9, RTX 4060, 16GB DDR5 RAM, 1TB SSD. The ultimate power in a compact 14-inch chassis.
                </p>

                <div className="flex items-center mb-5">
                    <div className="flex items-center space-x-1">
                        {[...Array(4)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <svg className="w-5 h-5 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-bold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-200">
                        4.8
                    </span>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                    <span className="text-3xl font-extrabold text-gray-900 dark:text-white">$1,499</span>
                    <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
