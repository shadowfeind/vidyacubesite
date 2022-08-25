import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ PageTitle, favicon }) => {
  return (
    <Fragment>
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />

        <title>{PageTitle}</title>
        <link rel="shortcut icon" href={favicon} />
      </Helmet>
    </Fragment>
  );
};

export default PageTitle;
