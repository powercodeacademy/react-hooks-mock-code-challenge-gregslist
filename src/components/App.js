import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(data => setListings(data))
  }, [])

  /*
    We have to know which listing was deleted (the ID)
    We need a fetch (method: "DELETE")
    We need to update the DOM by using setListing to remove the deleted item
  */
  const deleteListing = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" })
      .then(() => {
        const newDelete = listings.filter((listing) => listing.id !== id)
        setListings(newDelete)
      })
  }

  // Filter to see if the description of any of our listings matches the search term
  const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header
          search={search}
          setSearch={setSearch}
      />
      <ListingsContainer
          onDeleteListing={deleteListing}
          listings={filteredListings}
      />
    </div>
  );
}

export default App;
