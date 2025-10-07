import React from 'react';
import Menu from '../components/Menu';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Menu />
      <main className="layout-main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
