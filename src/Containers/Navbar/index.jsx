import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const pages = [
    {
      id: 1,
      name: 'Home',
      route: '/',
    },
    {
      id: 2,
      name: 'Calculator',
      route: '/calculator',
    },
    {
      id: 3,
      name: 'Quote',
      route: '/quote',
    },
  ];

  const handleToggle = () => {
    setOpenMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const iconStyle = {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
  };

  return (
    <nav className="nav__container">
      <button
        type="button"
        className="hamburger"
        onClick={handleToggle}
      >
        {openMenu ? (
          <MdOutlineClose style={{ ...iconStyle, color: 'black' }} />
        ) : (
          <FaBars style={{ ...iconStyle, color: 'white' }} />
        )}
      </button>
      <div className={`navbar ${openMenu ? 'showMenu' : ''}`}>
        <h1 className="navbar__title"> Math Magicians</h1>
        <ul className="navbar__list">
          {pages.map((page) => (
            <li className="navbar__item" key={page.id}>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : null)}
                to={page.route}
                onClick={closeMenu}
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
