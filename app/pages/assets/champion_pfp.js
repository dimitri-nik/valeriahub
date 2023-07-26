import Image from "next/image"
import Link from "next/link"

export default function ChampionPFP() {
  const champions=["/assets/champs/2.png", "/assets/champs/16.png", "/assets/champs/fire_male.png", "/assets/champs/light.png", "/assets/champs/metal.jpg", "/assets/champs/grass.png", "/assets/champs/dark.png", "/assets/champs/air.png", "/assets/champs/rock.png", "/assets/champs/15.png", "/assets/champs/14.png", "/assets/champs/6.png", "/assets/champs/8.png", "/assets/champs/9.png", "/assets/champs/13.png", "/assets/champs/10.png", "/assets/champs/17.png"]
  return (
      <div className="flex flex-col items-center text-gray-800 pt-16 pb-4"  style={{
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundImage: 'url("/assets/manga/team.jpg")',
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}>
        <div className="flex flex-col items-center bg-white bg-opacity-90 rounded-lg px-6 py-4">
        <h1 className="font-black text-2xl"> PFP CHAMPIONS </h1>
        <Link className="font-bold text-blue-600 text-xl underline" href="https://opensea.io/collection/valeria-champions" target="_blank"> OpenSea </Link>
        </div>
        <div className="flex flex-row bg-white text-gray-800 bg-opacity-90 rounded-lg p-6 mt-8 mx-2 sm:mx-4 md:mx-10 lg:mx-20 xl:m-20">
          <div className="w-1/2 flex flex-col text-sm font-medium mt-4">
            <p className="mb-2 font-bold text-lg">
              INFO
            </p>
            <p className="my-2">
              Free mint for genesis land holders.
            </p>
            <p className="my-2">
              1,200 supply minted in October 2022.
            </p>
            <p className="my-2">
              *Not to be confused with in game champions.
            </p>
          </div>
          <div className="w-1/2 flex flex-col text-sm font-medium mt-4 ml-2">
            <p className="mb-2 font-bold text-lg" >
              UTILITY
            </p>
            <p className="my-2">
             Exclusive access to high reward in game dungeons and tournaments.
            </p>
            <p className="my-2">
              Provide a rarity boost to land earned booster packs.
            </p>
            <p className="my-2">
              Low supply makes it a super flex as in game nft pfp.
            </p>
          </div>
        </div>
        <div className="champsContainer flex flex-row mt-20 pt-5 scrolling-container-x">
          {champions.map((url, index) => (
          <Image
          className="px-4 rounded-full"
            key={index}
            src={url}
            alt={`ch ${index}`}
            width={220}
            height={220}
            objectFit="cover"
          />
          ))}
        </div>
      </div>
  )
}