import React from "react";
import data from "../../data/data.json";

import SearchBar from "./SearchBar";

//create formatted data structure
let formattedData = [];
for (const [key] of Object.entries(data)) {
  let listObject = {
    avatar: data[key].avatar,
    name: data[key].name,
    summary: data[key].description,
  };

  formattedData.push(listObject);
}

const listings = formattedData.map((listing, i) => {
  return (
    <div key={i} className="entry-item">
      <img src={listing.avatar} alt={listing.name} className="entry-avatar" />
      <div className="entry-content">
        <h4 className="entry-name">{listing.name}</h4>
        <p className="entry-description">{listing.summary}</p>
      </div>
    </div>
  );
});

const PeopleList = () => (

  <div className="people-list">
    <SearchBar />
    {listings}
  </div>
);

export default PeopleList;
