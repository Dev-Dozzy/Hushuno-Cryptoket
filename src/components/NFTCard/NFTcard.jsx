import '../NFTCard/NFTCard.css'



function NFTCard({ image, title, details, likes }) {
  return (
    <div className="nftcard">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div>
        <p>{details}</p>
        <img src={likes} alt="" />
      </div>
    </div>
  );
}

export default NFTCard;
