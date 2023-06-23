import home, { _partners, _hero, _featureProduct } from "./schemas/home";
import about, { _descriptionSet } from "./schemas/about";
import products, { _featureSet } from "./schemas/products";
import faq, { questionAnswer } from "./schemas/faq";
import downloads, { _fileSet } from "./schemas/downloads";
import contacts from "./schemas/contacts";
import careers from "./schemas/careers";
import distributors from "./schemas/distributors";
import socials from "./schemas/socials";
import salesMaps, { salesReps } from "./schemas/salesMaps";
import press from "./schemas/press";
import caseStudies from "./schemas/caseStudies";
import videos from "./schemas/videos";
import { button, carousel, columns, columnBlock } from "./schemas/customBlock";

export const schemaTypes = [
  home,
  _hero,
  _featureProduct,
  _partners,
  about,
  _descriptionSet,
  products,
  _featureSet,
  faq,
  questionAnswer,
  downloads,
  contacts,
  careers,
  _fileSet,
  distributors,
  socials,
  salesMaps,
  salesReps,
  press,
  caseStudies,
  videos,
  columns,
  columnBlock,
  button,
  carousel,
];
