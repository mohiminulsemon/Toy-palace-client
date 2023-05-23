import bannerimg from '../../assets/Featured.jpg'

const Banner = () => {
    return (
      <div className="banner-section h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900"></div>
        <img
          src={bannerimg}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Toy Palace</h1>
          <p className="text-lg text-white">Discover amazing products and services</p>
          <button className="mt-6 px-6 py-3 btn-secondary text-white font-bold rounded-lg hover:bg-red-600">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default Banner;
  