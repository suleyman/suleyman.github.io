import NavItem from "./NavItem";
import { NextComponentType } from "next";

const Header: NextComponentType = () => {
  return (
    <header className="bg-red-500 text-white">
      <div className="container mx-auto">
        <nav>
          <NavItem href="/" text="Home" />
          <NavItem href="/about" text="About" />
          <NavItem href="/uses" text="Uses" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
