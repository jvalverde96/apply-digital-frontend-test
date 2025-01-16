'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Footer = () => {
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(searchParams?.toString());

  return (
    <footer className="bg-secondary bottom-0 left-0 right-0 mt-auto">
      <div className="custom-container h-[172px] flex items-center justify-center">
        <Link
          href={`catalog/?${queryParams}`}
          className="text-2xl leading-6 tracking-[0.4px]"
        >
          <Image
            src="/apply-digital-logo.png"
            alt=""
            width={170}
            height={50}
            className="w-[170px] h-[50px]"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
