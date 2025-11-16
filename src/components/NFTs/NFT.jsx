import NFTcard from "../NFTCard/NFTcard";
import '../NFTs/NFT.css';


function NFT (){


  return (
    <>
    <h2 className="nft-heading">Hot Bids</h2>
      <div className="nft-list">
        <NFTcard
          image="/image1.png"
          title="Abstract Smoke Red Blue"
          details="1.25ETH"
          likes="/like1.png"
        />

        <NFTcard
          image="/image2.png"
          title="Mountain Landscape"
          details="0.20ETH"
          likes="/like1.png"
        />

        <NFTcard
          image="/image3.png"
          title="Paint Color on Wall"
          details="0.55ETH"
          likes="/like1.png"
        />

        <NFTcard
          image="/image4.png"
          title="Abstract Pattern"
          details="0.87ETH"
          likes="/like1.png"
        />

        <NFTcard
          image="/image5.png"
          title="White Line Grafiti"
          details="0.09ETH"
          likes="/like1.png"
        />

        <NFTcard
          image="/image6.png"
          title="Abstract Triangle"
          details="0.90ETH"
          likes="/like1.png"
        />

        <NFTcard
          image="/image7.png"
          title="Lake Landscape"
          details="0.52ETH"
          likes="/like1.png"
        />

        <NFTcard
          image="/image8.png"
          title="Blue Red Art"
          details="0.85ETH"
          likes="/like1.png"
        />
      </div>
    </>
  );
}

export default NFT