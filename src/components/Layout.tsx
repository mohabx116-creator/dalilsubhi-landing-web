import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#071614] text-white">
      <Header />
      <div className="pt-20">{children}</div>
      <Footer />
    </div>
  );
}
