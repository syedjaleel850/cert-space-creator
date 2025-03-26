
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/50">
      <Navbar />
      <main>
        {children}
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground">
        <div className="container">
          <p>© {new Date().getFullYear()} Syed Jaleel S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
