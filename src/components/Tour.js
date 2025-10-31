import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour" id={`tour-item-${id}`}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        <p id={`tour-item-para-${id}`}>
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button
            className="toggle-btn"
            id={`see-more-${id}`} // ✅ matches test ID
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "See more"}
          </button>
        </p>

        <button
          className="delete-btn"
          id={`delete-btn-${id}`} 
          onClick={() => removeTour(id)}
        >
          Remove
        </button>
      </footer>
    </article>
  );
};

export default Tour;