import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40 p-4 text-center text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <span>
          &copy; {currentYear} CommerceControl. All rights reserved.
        </span>
        <nav className="flex gap-4 mt-2 sm:mt-0">
          <Link to="#" className="hover:text-primary">
            Support
          </Link>
          <Link to="#" className="hover:text-primary">
            Documentation
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;