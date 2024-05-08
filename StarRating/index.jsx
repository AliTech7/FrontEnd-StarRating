import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, sethover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseLeave() {
    sethover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            on
            MouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
