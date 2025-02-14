import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@mantine/core';
import { X, Menu } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-opacity-80 backdrop-blur-md p-4 text-black sticky top-0 z-50">
      <div className=" flex mx-6 items-center justify-between ">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold"
        >
          NewsAI
        </motion.h1>

        <ul className="hidden md:flex gap-4">
          {['Home', 'Categories', 'Channels', 'About'].map((item) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              key={item}
              className="hover:text-gray-700"
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.li>
          ))}
        </ul>

        <div className="flex space-x-4 items-center justify-center">
          <Link to="/login" className="hidden md:block">
            <Button variant="white" size='xs'>Login</Button>
          </Link>

          <Link to="/register" className="hidden md:block">
            {' '}
            <Button variant="white" size='xs'>Register</Button>
          </Link>
          <button onClick={handleClick}  className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
       {isOpen && <div>
         <ul className="md:hidden flex flex-col gap-4">
          {['Home', 'Categories', 'Channels', 'About'].map((item) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              key={item}
              className="hover:text-gray-700"
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </motion.li>
          ))}
        </ul>
        </div>}
    </nav>
  );
}

export default Navbar;
