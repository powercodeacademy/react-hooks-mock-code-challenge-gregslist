import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

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

  return (
    <div className="app">
      <Header />
      <ListingsContainer
          onDeleteListing={deleteListing}
          listings={listings}
      />
    </div>
  );
}

export default App;
