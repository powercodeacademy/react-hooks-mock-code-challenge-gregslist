import React, { useState } from "react"

function ListingCard({ onDeleteListing, listing }) {
  const { id, description, image, location } = listing

  const [ favorited, setFavorited ] = useState(false)

  const handleClickFavorite = () => {
    setFavorited(!favorited)
  }

  const handleClickTrash = () => {
    onDeleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button onClick={handleClickFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClickFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleClickTrash} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

/*
   - We will not need a fetch
   - The star icon lives inside of the ListingCard Component within button elements
   - We will use a boolean to determine if a card is favorited (on/off)
   - A card's favorite-ness is independent of other cards favorite-ness
   - A user will have to click on the star icon; we'll need an onClick event
*/