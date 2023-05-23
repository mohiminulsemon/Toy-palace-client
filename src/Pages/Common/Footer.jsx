import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
    <div className="container mx-auto py-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
          <h2 className="text-lg font-bold mb-4">Toy Palace Ltd.</h2>
          <p className="text-sm">Providing reliable products since 2023</p>
          <p className="text-sm">&copy; 2023 Toy Palace Ltd. All rights reserved.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Information</h2>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Address: 123 Main Street, City, Country</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Advantages</h2>
          <ul className="text-sm">
            <li>Wide customer base</li>
            <li>Secure payment options</li>
            <li>Marketing support</li>
            <li>Competitive fees</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  );
};

export default Footer;
