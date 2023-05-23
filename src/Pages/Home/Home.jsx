import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Gallery from "./Gallery";
import SubCat from "./SubCat";
import { FaShoppingCart, FaMoneyBillAlt, FaHandshake } from "react-icons/fa";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <SubCat></SubCat>
      <div>
        <h2 className="text-center my-5 font-bold text-3xl">Our States now </h2>
      </div>
      <div>
        <div className="stats-section py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-around w-3/5 mx-auto items-center gap-12">
              <div className="flex flex-col items-center">
                <FaShoppingCart className="text-4xl text-red-500 mb-2" />
                <h3 className="text-xl font-semibold">Items</h3>
                <p className="text-gray-700">1000+</p>
              </div>
              <div className="flex flex-col items-center">
                <FaMoneyBillAlt className="text-4xl text-red-500 mb-2" />
                <h3 className="text-xl font-semibold">Sales</h3>
                <p className="text-gray-700">500+</p>
              </div>
              <div className="flex flex-col items-center">
                <FaHandshake className="text-4xl text-red-500 mb-2" />
                <h3 className="text-xl font-semibold">Seller Advantages</h3>
                <p className="text-gray-700">Easy and Secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-section py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Sign up for our Newsletter</h2>
        <p className="text-lg text-gray-700 mb-6">Stay updated with our upcoming products and exclusive offers.</p>
        <form className="flex flex-col md:flex-row justify-center items-center" >
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-4 py-2 mb-4 md:mb-0 md:mr-2 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Home;
