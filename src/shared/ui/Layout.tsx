// src/shared/ui/Layout.tsx
import React, { PropsWithChildren } from 'react';
import Header from '../../widgets/header/Header';
import Footer from '../../widgets/footer/Footer';


const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
