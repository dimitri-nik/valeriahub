import Link from 'next/link'

export default function GenesisLand() {
  return (
    <div>
      <div className="flex flex-col items-center bg-white text-black pt-16 pb-4" style={{
        backgroundImage: 'url("/assets/lands/Legendary_Land_Transparent.png")',
        backgroundSize: "cover", 
        backgroundPosition: "center",
        minHeight: "100vh",
      }}>
        <h1 className="font-black text-2xl"> GENESIS LAND </h1>
        <Link className="font-bold text-blue-500 text-xl underline" href="https://opensea.io/collection/valeriagames" target="_blank"> OpenSea  </Link>
        <div className="flex flex-row text-sm bg-white border-4 border-black bg-opacity-90 rounded-lg p-6 mt-8 mx-2 sm:mx-4 md:mx-10 lg:mx-20 xl:m-20">
          <div className="w-1/2 flex flex-col font-medium">
            <p className="mb-2 font-bold text-lg">
              MINT INFO
            </p>
            <p className="mb-1">
              10k Collection.
            </p>
            <p className="mb-1">
              0.1E minted out April 2022.
            </p>
            <p className="mb-1">
              Raised $3m+.
            </p>
          </div>
          <div className="w-1/2 flex flex-col font-medium ml-4">
            <p className="mb-2 font-bold text-lg" >
              STAKING REWARDS
            </p>
            <p className="mb-1">
             30% of total $VAL supply over 2 years.
            </p>
            <p className="mb-1">
              Weekly in game booster packs.
            </p>
            <p className="mb-1">
              Lifetime excess token distribution.
            </p>
          </div>
        </div>
        <div className="flex flex-row text-sm bg-white border-4 border-black bg-opacity-90 rounded-lg p-6 mt-8 mx-2 sm:mx-4 md:mx-10 lg:mx-20 xl:m-20">
          <div className="font-medium">
            <p className="font-bold text-center text-lg">
              RARITY 
            </p>
            <p className="mb-4 font-black text-center text-sm">
              COMMON - RARE - EPIC - LEGENDARY
            </p>
            <p className="mb-1">
             Rarity plays a role in booster pack pulls.
            </p>
            <p className="mb-1">
             Summoning stone trait on OpenSea.
            </p>
            <p className="mb-1">
             *All lands produce same amount of tokens regardless of rarity*
            </p>
          </div>
        </div>
            <div className="flex flex-row text-sm font-light text-black bg-white border-4 border-black rounded-lg px-6 py-4 mt-8 mx-2 sm:mx-4 md:mx-10 lg:mx-20 xl:m-20"> 
              <p>
                The $VAL token will be central to the Valeria ecosystem. Utility includes: <br/> Purchasing physical merch and cards, upgrading lands, buying the in game premium currency GEMS at a discount to fiat and more... Liquidity Pool coming soon. <br/>
                <Link className="font-bold text-blue-500 text-s underline" href="https://opensea.io/collection/valeriagames" target="_blank"> Read the whitepaper for full details & tokenomics </Link>
              </p>
            </div>
      </div>
    </div>
    )
    }