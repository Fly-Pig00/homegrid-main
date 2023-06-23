import React, { useState, useEffect } from "react";
import SearchFaq from "@/components/SearchFaq";
import { Faq } from "@/sanity/types";
import { CustomPortableText } from "@/components/CustomPortableText";
import { getFaqs } from "@/sanity/lib/client";

const FAQ = ({ FAQs }: { FAQs: Faq[] }) => {
  const [filteredFAQs, setFilteredFAQs] = useState([...FAQs]);

  return (
    <div className="faq page">
      <h1 className="text-center">FAQs</h1>
      <SearchFaq original={FAQs} setFiltered={setFilteredFAQs} />
      {filteredFAQs?.map(({ section, questionAnswer }) => {
        return (
          <div key={section}>
            <h2 className="py-5">{section}</h2>
            <Accordion data={questionAnswer} />
          </div>
        );
      })}
    </div>
  );
};

const Accordion = ({ data }: { data: Faq["questionAnswer"] }) => {
  return (
    <div>
      {data?.map(({ question, answer }) => {
        return (
          <div
            tabIndex={0}
            className="collapse collapse-arrow border-b border-neutral-400"
            key={question}
          >
            <h4 className="collapse-title">{question}</h4>
            <div className="collapse-content">
              <CustomPortableText value={answer} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const FAQs = await getFaqs();
  return {
    props: {
      FAQs,
    },
  };
};

export default FAQ;
