import '../TopSellingCard/TsCard.css'

function TsCard({ image, name, amount, number }) {
  return (
    <div className="card">
      <span className='number'>{number}</span>
      <img src={image} alt={name} className="card-image" />
      <h3>{name}</h3>
      <p>{amount}</p>
    </div>
  );
}
export default TsCard