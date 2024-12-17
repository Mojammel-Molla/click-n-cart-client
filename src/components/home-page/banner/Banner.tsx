const Banner = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Background Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src="https://via.placeholder.com/1920x800?text=Shop+Now"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to ClickNCart
        </h1>
        <p className="text-gray-200 text-lg sm:text-xl md:text-2xl mb-6">
          Discover the best deals on your favorite products.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
          <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md shadow-md hover:bg-gray-100 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
