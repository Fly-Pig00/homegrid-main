import Link from "next/link";
import Image from "next/image";
import { SubMenuLinks } from "@/sanity/types";

const DesktopNav = ({ productLinks }: { productLinks: SubMenuLinks[] }) => {
  return (
    <nav className="desktopNav">
      <Link className="headerLogo" href="/">
        <Image
          fill
          priority
          src="/homegrid-logo.png"
          alt="Homegrid Logo"
          className="object-contain"
        />
      </Link>
      <ul className="">
        <li>
          <Link href="/about">About</Link>
        </li>
        <SubMenu title="products" links={productLinks} />
        <li>
          <Link href="/press">Press</Link>
        </li>
        <SubMenu
          title="resources"
          links={[
            { name: "FAQs", slug: { current: "faq" }, _id: "_" },
            { name: "Downloads", slug: { current: "downloads" }, _id: "_" },
            { name: "Sizing-tool", slug: { current: "sizing-tool" }, _id: "_" },
            { name: "Monitoring", slug: { current: "monitoring" }, _id: "_" },
          ]}
        />
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

const SubMenu = ({
  title,
  links,
}: {
  title: string;
  links: SubMenuLinks[];
}) => {
  return (
    <li tabIndex={0} className="subMenu">
      <span>{title}</span>
      <ul>
        {links?.map(({ name, slug }) => {
          return (
            <li key={name}>
              <Link href={{ pathname: `/${slug?.current}` }}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default DesktopNav;
