import '../NFTCard/NFTCard.css';
import { use, useState } from "react";



function NFTCard({ image, title, details,}) {
  const [likes, setLikes] = useState(0);
  return (
    <div className="nftcard">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="likes">
        <p>{details}</p>
        <button className="likeBtn" onClick={() => setLikes(likes + 1)}>
          🩶 <span>{likes}</span>
        </button>
      </div>
    </div>
  );
}

export default NFTCard;
