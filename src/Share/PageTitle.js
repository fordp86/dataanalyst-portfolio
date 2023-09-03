import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Data Analayst | Ford Henley</title>
    </Helmet>
  );
};

export default PageTitle;
