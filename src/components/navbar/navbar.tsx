import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-header">
      <nav className="h-[64px] flex items-center justify-between mx-auto px-6 py-5 lg:px-32 lg:py-5 lg:max-w-[1536px]">
        <span className="text-2xl leading-6 tracking-[0.4px]">Gamer Shop</span>
        <ShoppingCart />
      </nav>
    </header>
  );
};

export default Navbar;
