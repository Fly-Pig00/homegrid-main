import React from "react";
import Maps from "../components/Maps";
import ContactForm from "../components/ContactForm";
import { Distributors, SalesMaps } from "@/sanity/types";
import { getDistributors, getSalesMaps } from "@/sanity/lib/client";

const Contact = ({
  distributors,
  salesMaps,
}: {
  distributors: Distributors[];
  salesMaps: SalesMaps[];
}) => {
  return (
    <div className="contact page">
      <div className="contact__techSupport" id="technical">
        <h3 className="text-center mb-3">Technical Support</h3>
        <div className="sm:grid grid-cols-3 grid-rows-1">
          <p>support@lithionbattery.com</p>
          <p>1.855.753.3505</p>
          <p>Mon-Fri 6AM-4PM PST</p>
        </div>
      </div>
      <Maps distributors={distributors} salesMaps={salesMaps} />
      <h1 id="general" className="text-center">
        General Inquiries
      </h1>
      <ContactForm />
    </div>
  );
};

export const getStaticProps = async () => {
  const salesMaps = await getSalesMaps();
  const distributors = await getDistributors();
  return {
    props: {
      distributors,
      salesMaps,
    },
  };
};

export default Contact;
