import React, { useState } from "react";
import { Faq } from "@/sanity/types";

type SearchFaq = {
  original: Faq[];
  setFiltered: Function;
};

const SearchFaq = ({ original, setFiltered }: SearchFaq) => {
  const [query, setQuery] = useState("");
  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };
  const search = () => {
    // RESET FILTERED LIST
    if (query === "") {
      setFiltered(original);
      return;
    }

    const filteredFAQs = original.reduce((acc: Faq[], obj) => {
      const sectionMatched = obj.section.toLowerCase().includes(query);
      const filteredQuestionAnswer = obj.questionAnswer.filter((qa) =>
        qa.question.toLowerCase().includes(query)
      );

      if (sectionMatched || filteredQuestionAnswer.length > 0) {
        acc.push({
          section: obj.section,
          questionAnswer: sectionMatched
            ? obj.questionAnswer
            : filteredQuestionAnswer,
        });
      }
      return acc;
    }, []);

    setFiltered(filteredFAQs);
  };
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div className="search-container">
          <input
            type="search"
            className="search--input"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={handleChange}
          />
          <button
            className="search--button"
            type="button"
            id="button-addon2"
            onClick={search}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFaq;
