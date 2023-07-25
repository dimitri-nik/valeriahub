import Image from "next/image"
import Link from "next/link"

export default function ChampionPFP() {
  const champions=["/assets/champs/2.png", "/assets/champs/16.png", "/assets/champs/fire_male.png", "/assets/champs/light.png", "/assets/champs/metal.jpg", "/assets/champs/grass.png", "/assets/champs/dark.png", "/assets/champs/air.png", "/assets/champs/rock.png", "/assets/champs/15.png", "/assets/champs/14.png", "/assets/champs/6.png", "/assets/champs/13.png", "/assets/champs/10.png", "/assets/champs/17.png"]
  return (
      <div className="flex flex-col items-center text-gray-800 pt-20 px-10"  style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#AFE4DE"
      }}>
        <p className="font-black text-2xl"> PFP CHAMPIONS </p>
        <Link className="font-bold text-purple-400 text-xl underline" href="https://opensea.io/collection/valeria-champions" target="_blank"> OpenSea </Link>
        <div className="flex flex-row bg-white border-4 border-gray-800 text-gray-800 bg-opacity-70 rounded-lg p-6 mt-8">
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
          <div className="w-1/2 flex flex-col text-sm font-medium mt-4 ">
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