import NavItem from "./NavItem";
import ThemeToggler from "./ThemeToggler";
import { NextComponentType } from "next";

const Header: NextComponentType = () => {
  return (
    <header className="text-white max-w-4xl mx-auto  pt-8 pb-8">
      <div className="container -ml-3 flex justify-between items-center">
        <nav>
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/uses" text="Uses" />
        </nav>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
