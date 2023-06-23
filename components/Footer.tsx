import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { Socials } from "@/sanity/types";
import { getSocials } from "@/sanity/lib/client";

const Footer = () => {
  const date = new Date();
  const [socials, setSocials] = useState<Socials[] | []>([]);
  useEffect(() => {
    const footerSocials = async () => {
      const socialMediaAccounts = await getSocials();
      setSocials(socialMediaAccounts);
    };
    footerSocials();
  }, []);
  return (
    <footer>
      <div className="footer__container">
        <div className="flex-1 mb-5">
          <Link className="footer__logo" href="/">
            <Image
              fill
              src="/homegrid-pbl-logo.png"
              alt="Homegrid PBL Logo"
              className="object-contain"
            />
          </Link>
          <div className="footer__socials">
            {socials?.map(({ name, url }, idx) => {
              return (
                <SocialIcon
                  key={idx}
                  network={name}
                  bgColor="black"
                  className="w-2 h-5"
                  style={{ width: 30, height: 30 }}
                  url={url}
                  target="_blank"
                />
              );
            })}
          </div>
        </div>
        <div className="footer__links">
          <div className="space-y-2 mb-2 sm:mb-0">
            <Link href="/about">About</Link>
            <Link href="/contact/#general">Contact</Link>
            <Link href="/contact/#sales">Sales</Link>
          </div>
          <div className="space-y-2">
            {/* <Link href="/contact/#distributors">Distributors</Link> */}
            <Link href="/contact/#technical">Technical Support</Link>
            <Link href="/press">News</Link>
          </div>
        </div>
      </div>
      <p className="w-10/12 text-left sm:text-center">
        {" "}
        © {date.getFullYear()} HomeGrid. all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
