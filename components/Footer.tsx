import NextLink from "next/link";
import { NextComponentType } from "next";

const Footer: NextComponentType = () => {
  return (
    <footer className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
      <div className="flex flex-col space-y-5">
        <NextLink href="/">
          <a href="">Home</a>
        </NextLink>
        <NextLink href="/about">
          <a href="">About</a>
        </NextLink>
        <NextLink href="/uses">
          <a href="">Uses</a>
        </NextLink>
      </div>
    </footer>
  );
};

export default Footer;
