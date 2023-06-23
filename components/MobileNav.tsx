import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SubMenuLinks } from "@/sanity/types";

type NavLinkType = {
  title: string;
  links?: SubMenuLinks[] | null;
};

const MobileNav = ({ productLinks }: { productLinks: SubMenuLinks[] }) => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    if (close) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [close]);

  const NavLink = ({ title, links }: NavLinkType) => {
    return (
      <>
        {links ? (
          <li className="subMenu-mobile collapse" tabIndex={0}>
            <input type="checkbox" />
            <h4>{title}</h4>
            <div className="collapse-content h-max">
              {links?.map(({ name, slug }) => (
                <Link
                  key={name}
                  href={slug?.current ?? "/"}
                  onClick={() => setClose(true)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </li>
        ) : (
          <li>
            <Link href={title} onClick={() => setClose(true)}>
              {title}
            </Link>
          </li>
        )}
      </>
    );
  };

  return (
    <nav className="mobileNav">
      <Link className="headerLogo" href="/">
        <Image
          fill
          priority
          src="/homegrid-logo.png"
          alt="Homegrid Logo"
          className="object-contain"
        />
      </Link>
      <button
        className="absolute right-5 top-5"
        onClick={() => setClose(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={20}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <div className={`mobileNav__menu ${!close ? "flex" : "hidden"}`}>
        <ul>
          <button
            className="absolute top-5 right-5"
            onClick={() => setClose(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width={16}
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </button>
          <NavLink title="about" />
          <NavLink title="products" links={productLinks} />
          <NavLink title="press" />
          <NavLink
            title="resources"
            links={[
              { name: "FAQs", slug: { current: "faq" }, _id: "_" },
              { name: "Downloads", slug: { current: "downloads" }, _id: "_" },
              {
                name: "Sizing-tool",
                slug: { current: "sizing-tool" },
                _id: "_",
              },
              { name: "Monitoring", slug: { current: "monitoring" }, _id: "_" },
            ]}
          />
          <NavLink title="contact" />
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
