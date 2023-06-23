import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { getProductLinks } from "@/sanity/lib/client";
import { SubMenuLinks } from "@/sanity/types";

const Header = () => {
  const [productLinks, setProductLinks] = useState<SubMenuLinks[]>([]);

  useEffect(() => {
    if (productLinks.length === 0) {
      const getSubmenuLinks = async () => {
        const links = await getProductLinks();
        setProductLinks(links);
      };
      getSubmenuLinks();
    }
  }, [productLinks]);

  return (
    <header>
      <DesktopNav productLinks={productLinks} />
      <MobileNav productLinks={productLinks} />
    </header>
  );
};

export default Header;
