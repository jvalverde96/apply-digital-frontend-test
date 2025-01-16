'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Navbar = () => {
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(searchParams?.toString());
  return (
    <header className="bg-header sticky top-0 left-0 z-10">
      <nav className="h-[64px] flex items-center justify-between custom-container">
        <Link
          href={`catalog/?${queryParams}`}
          className="text-2xl leading-6 tracking-[0.4px]"
        >
          Gamer Shop
        </Link>
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
