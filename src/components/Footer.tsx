import React from 'react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8 mt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="mb-4">
        <img src={logo} alt="Templarai Logo" className="h-10 mx-auto mb-3" />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Templarai. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;