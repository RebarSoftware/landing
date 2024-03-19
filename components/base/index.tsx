import { Navbar } from './navbar';
import { Footer } from './footer';
import { ReactNode } from 'react';

type IBaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout = ({ children }: IBaseLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
