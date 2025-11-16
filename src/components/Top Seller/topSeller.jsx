import '../Top Seller/topSeller.css'
import TsCard from '../TopSellingCard/TsCard';

function TopSeller(){
  return (
    <div className="top-seller-section">
      <div className="ts-heading">
        <h1>Top Sellers</h1>
      </div>
      <div className="ts-card">
        <TsCard
          number="1"
          image="/profile1.png"
          name="Mia Ayana"
          amount="5.250ETH"
        />

        <TsCard
          number="2"
          image="/profile2.png"
          name="Rian Leon"
          amount="4.932ETH"
        />

        <TsCard
          number="3"
          image="/profile3.png"
          name="Lady Young"
          amount="4.620ETH"
        />

        <TsCard
          number="4"
          image="/profile4.png"
          name="Black Glass"
          amount="4.125ETH"
        />

        <TsCard
          number="5"
          image="/profile5.png"
          name="Budhiman"
          amount="3.921ETH"
        />
      </div>
    </div>
  );
}
export default TopSeller