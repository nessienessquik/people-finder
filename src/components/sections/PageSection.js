import React from 'react';

import PeopleList from '../features/PeopleList';

const PageSection = () =>
  <div className="header-bar">
    <h1>The Person Finder</h1>
    <div>If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!</div>

    <PeopleList />
  </div>

export default PageSection;