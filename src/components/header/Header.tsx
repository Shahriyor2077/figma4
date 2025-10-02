import { memo, useState } from "react";
import logo from "../../assets/Storefront.svg";
import logo_2 from "../../assets/NFT Marketplace.svg";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#2B2B2B] text-white">
      <div className="container mx-auto">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <img src={logo} alt="Storefront" className="h-8" />
            <img src={logo_2} alt="NFT Marketplace" className="h-6" />
          </div>

          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li>
              <Link to="/" className="hover:text-purple-400 transition-colors">
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                to="/rankings"
                className="hover:text-purple-400 transition-colors"
              >
                Rankings
              </Link>
            </li>
            <li>
              <Link
                to="/wallet"
                className="hover:text-purple-400 transition-colors"
              >
                Connect a wallet
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#A259FF] hover:bg-[#8a3be6] transition-colors"
              >
                <CiUser className="text-lg" />
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-[#2B2B2B] border-t border-gray-700">
            <ul className="flex flex-col items-center gap-6 py-6 font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-purple-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  to="/rankings"
                  className="hover:text-purple-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Rankings
                </Link>
              </li>
              <li>
                <Link
                  to="/wallet"
                  className="hover:text-purple-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Connect a wallet
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#A259FF] hover:bg-[#8a3be6] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <CiUser className="text-lg" />
                  <span>Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
