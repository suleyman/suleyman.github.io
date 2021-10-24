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
      <a>
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
};

export default NavItem;
