import React from 'react';
import data  from '../../data/data';

import SearchBar from './SearchBar';

//create formatted data structure
let formattedData = [];
for (const [key, value] of Object.entries(data)) {

    let listObject = {
        avatar: data[key].avatar,
        title: data[key].avatar,
        summary: data[key].avatar,
    }

    formattedData.push(listObject);
}

const listings = formattedData.map((listing) => {
    return (
        <div key={listing.id}>
            {listing.avatar}
        </div>
    )
});



const PeopleList = () =>
  <div className="people-list">
      <SearchBar />
      {listings}
  </div>

export default PeopleList;