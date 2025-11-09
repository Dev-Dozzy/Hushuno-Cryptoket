import '../TopSellingCard/TsCard.css'

function TsCard({ image, name, amount }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3>{name}</h3>
      <p>{amount}</p>
    </div>
  );
}
export default TsCard