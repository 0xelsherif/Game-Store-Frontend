import React from 'react';


const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto">
        {/* Social Links and Login/Register */}
        <div className="hidden lg:flex justify-between items-center py-2">
          <div className="flex items-center space-x-4">
            <span>Follow us:</span>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-purple-500"><i className="fab fa-vimeo-v"></i></a>
            <a href="#" className="hover:text-red-600"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300"><i className="far fa-edit"></i> Register</a>
            <span className="text-gray-400">or</span>
            <a href="#" className="hover:text-gray-300"><i className="far fa-edit"></i> Sign In</a>
          </div>
        </div>
        {/* Main Navigation */}
        <div className="py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about-us" className="hover:text-gray-300">About</Link>
            <Link to="/overview" className="hover:text-gray-300">Overview</Link>
            <Link to="/community" className="hover:text-gray-300">Community</Link>
          </div>
          <div className="logo">
            <Link to="/"><img src="path_to_logo.png" alt="Logo" /></Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/upcoming-games" className="hover:text-gray-300">Games</Link>
            <Link to="/shop" className="hover:text-gray-300">Store</Link>
            <Link to="/blogs" className="hover:text-gray-300">Blog</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
