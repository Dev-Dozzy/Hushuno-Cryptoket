import '../Top Seller/topSeller.css'
import TsCard from '../TopSellingCard/TsCard';

function TopSeller(){
  return (
    <div className="top-seller-section">
      <div className="ts-heading">
        <h1>Top Sellers</h1>
      </div>
      <div className="ts-card">
        <TsCard image="/profile1.png" name="Mia Ayana" amount="5.250ETH" />

        <TsCard image="/profile2.png" name="Rian Leon" amount="4.932ETH" />

        <TsCard image="/profile3.png" name= "Lady Young" amount="4.620ETH" />

        <TsCard image="/profile4.png" name="Black Glass" amount="4.125ETH" />

        <TsCard image="/profile5.png" name="Budhiman" amount="3.921ETH" />
      </div>
    </div>
  );
}
export default TopSeller