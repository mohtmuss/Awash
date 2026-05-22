import { useState } from 'react';
import cartIcon from '../assets/shopping-cart.png';
import menuIcon from '../assets/menu.png';
import searchIcon from '../assets/search.png';
import logoIcon from '../assets/logo.png';
import userIcon from '../assets/user.png';
import logoutIcon from '../assets/logout.png';
import homeIcon from '../assets/home.png';
import shopIcon from '../assets/shop.png';
import listIcon from '../assets/list.png';
import buyAgainIcon from '../assets/buy-it-again.png';
import offersIcon from '../assets/offer.png';
import newArrivalsIcon from '../assets/new-arrivals.png';
import helpIcon from '../assets/help.png';
import thinkIcon from '../assets/think.png';

export default function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: homeIcon },
    { name: 'Shop', icon: shopIcon },
    { name: 'List', icon: listIcon },
    { name: 'Buy it again', icon: buyAgainIcon },
    { name: 'Offers', icon: offersIcon },
    { name: 'New Arrivals', icon: newArrivalsIcon },
  ];

  const aisles = [
    'Great Value',
    'Produce',
    'Meat & Seafood',
    'Frozen',
    'Bakery',
    'Snacks & Candy',
    'Dairy & Eggs',
    'Prepared Foods',
    'Beverages',
    'Deli',
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
        <div className="px-4 md:px-6 py-4 flex items-center gap-4">
          
          {/* Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-gray-100 rounded transition flex-shrink-0"
          >
            <img src={menuIcon} alt="menu" className="w-6 h-6"/>
          </button>

          {/* Logo & Name */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={logoIcon} alt="logo" className="w-7 h-7"/>
            <h1 className="text-lg font-bold text-gray-900">Awash</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1">
            <div className="w-full bg-gray-100 rounded-full px-4 py-3 flex items-center gap-3">
              <img src={searchIcon} alt="search" className="w-5 h-5 text-gray-400"/>
              <input
                type="text"
                placeholder="Search products, stores, and recipes"
                className="bg-transparent outline-none flex-1 text-sm text-gray-700 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Location & Cart */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="text-sm font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded hidden md:block">
              📍 17603
            </button>
            <button className="relative bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition flex items-center gap-2">
              <img src={cartIcon} alt="cart" className="w-5 h-5"/>
              <span>{cartCount || 1}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Side Menu */}
      {menuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="fixed left-0 top-0 h-full w-64 bg-white z-50 pt-6 overflow-y-auto">
            {/* Main Menu Items */}
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 text-gray-700">
                    <img src={item.icon} alt={item.name} className="w-5 h-5"/>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Browse Aisles */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h3 className="px-6 text-xs font-bold text-gray-600 uppercase mb-3">Browse aisles</h3>
              <ul className="space-y-1">
                {aisles.map((aisle) => (
                  <li key={aisle}>
                    <a href="#" className="block px-6 py-2 hover:bg-gray-50 text-gray-700 text-sm">
                      {aisle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h3 className="px-6 text-xs font-bold text-gray-600 uppercase mb-3">Support</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 text-gray-700">
                    <img src={helpIcon} alt="help" className="w-5 h-5"/>
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 text-gray-700">
                    <img src={thinkIcon} alt="think" className="w-5 h-5"/>
                    How Awash Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Account Section */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h3 className="px-6 text-xs font-bold text-gray-600 uppercase mb-3">You</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 text-gray-700">
                    <img src={userIcon} alt="user" className="w-5 h-5"/>
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 text-gray-700">
                    <img src={logoutIcon} alt="logout" className="w-5 h-5"/>
                    Logout
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer Links */}
            <div className="border-t border-gray-200 mt-6 pt-6 px-6 pb-6">
              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                <a href="#" className="hover:text-gray-900">Press</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-900">Jobs</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-900">Terms</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-900">Privacy</a>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}