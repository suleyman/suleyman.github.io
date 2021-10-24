import NextLink from "next/link";
import { ComponentType } from "react";

type Props = {
  href: string;
  text: string;
};

const NavItem: ComponentType<Props> = (props) => {
  const { href, text } = props;
  return (
    <NextLink href={href}>
      <a className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 transition-all">
        <span>{text}</span>
      </a>
    </NextLink>
  );
};

export default NavItem;
