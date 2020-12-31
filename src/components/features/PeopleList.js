import React, { useState } from "react";
import data from "../../data/data.json";

function PeopleList() {
  //create formatted data structure from json, set as baseline state object
  let formattedData = [];
  for (const [key] of Object.entries(data)) {
    let listObject = {
      avatar: data[key].avatar,
      name: data[key].name,
      summary: data[key].description,
    };

    formattedData.push(listObject);
  }

  // hook setup for search bar
  const [searchTerm, setSearchTerm] = useState("");

  // data for display object, filters by search hook value
  const filteredData = formattedData.filter((entry) => {
    const name = entry.name.toUpperCase();
    const search = searchTerm.toUpperCase();

    return name.includes(search) === true;
  });

  // display object
  const listings = filteredData.map((listing, i) => {
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

  return (
    <div className="people-list">
      <form>
        <input
          className="filter-bar"
          type="text"
          name="filter"
          placeholder="Type a name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>

      {listings}
    </div>
  );
}

export default PeopleList;
