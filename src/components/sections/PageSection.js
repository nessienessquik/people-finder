import React from "react";

import PeopleList from "../features/PeopleList";

const PageSection = () => (
  <main className="page-section">
    <h1 className="title">The Person Finder</h1>
    <summary className="intro">
      If you just can’t find someone and need to know what they look like,
      you’ve come to the right place! Just type the name of the person you are
      looking for below into the search box!
    </summary>

    <PeopleList />
  </main>
);

export default PageSection;
