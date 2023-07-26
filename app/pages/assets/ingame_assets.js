import Image from 'next/image'
import Link from 'next/link'

const valerians = ["/assets/tcg/voltra.png", "/assets/tcg/kuuko.png", "/assets/tcg/grizwald.png",  "/assets/tcg/xenorin.png"]
const champions = ["/assets/tcg/kazei.png", "/assets/tcg/kamu.png", "/assets/tcg/yojimbo.png", "/assets/tcg/chad.png"]
const items = ["/assets/mobile/items/cursed.png", "/assets/mobile/items/invincible.png", "/assets/mobile/weapons/attack.png", "/assets/mobile/weapons/defense.png"]
const packs = ["/assets/mobile/boosters/grass.jpg", "/assets/mobile/boosters/dark.jpg", "/assets/mobile/boosters/electric.jpg", "/assets/mobile/boosters/metal.jpg", "/assets/mobile/boosters/fire.jpg"]
export default function InGameAssets() {
  return (
    <div>
      <div className="flex flex-col items-center pt-16 text-red-100" style={{
        width: "100%",
        overflow: "hidden",
        backgroundImage: 'url("/assets/logos_banners_icons/moonLogo.png")',
        backgroundSize: "cover",
        backgroundPosition: "right"
      }}>
        <p className="font-black text-2xl"> In Game Assets </p>
        <Link className="font-bold text-red-400 text-xl underline" href="https://opensea.io/collection/valeria-creatures" target="_blank"> OpenSea  </Link>
        <div className="flex flex-row bg-black border-4 border-red-100 bg-opacity-50 rounded-lg p-6 mt-8 text-sm mx-2 sm:mx-4 md:mx-10 lg:mx-20 xl:m-20">
          <div className="w-1/2 flex flex-col text-sm">
            <p className="mb-2 font-bold text-lg">
              INFO
            </p>
            <p className="my-2">
              Live on Polygon chain
            </p>
            <p className="my-2">
              Available to earn in game and purchase on the in game store
            </p>
            <p className="my-2">
              Tradeable on secondary in game marketplace and OpenSea
            </p>
          </div>
          <div className="w-1/2 flex flex-col text-md font-medium ml-4">
            <p className="mb-2 font-bold text-lg" >
              TYPES
            </p>
            <p className="my-2">
             Valerians - creatures
            </p>
            <p className="my-2">
              Champions 
            </p>
            <p className="my-2">
              Items & Weapons
            </p>
            <p className="my-2">
              Booster Packs
            </p>
          </div>
        </div>
        <p className="mt-10 mb-3 font-black text-xl"> VALERIANS </p>
        <div className="flex flex-row justify-around">
          {valerians.map((url, index) => (
          <Image
          className="px-2"
            key={index}
            src={url}
            alt={`ch ${index}`}
            width={180}
            height={180}
            objectFit="cover"
          />
          ))}
        </div>

        <p className="mt-10 mb-3 font-black text-xl"> CHAMPIONS </p>
        <div className="flex flex-row justify-around">
          {champions.map((url, index) => (
          <Image
          className="px-2"
            key={index}
            src={url}
            alt={`ch ${index}`}
            width={180}
            height={180}
            objectFit="cover"
          />
          ))}
        </div>

        <p className="mt-10 mb-3 font-black text-xl"> ITEMS </p>
        <div className="flex flex-row justify-around">
          {items.map((url, index) => (
          <Image
          className="px-2"
            key={index}
            src={url}
            alt={`ch ${index}`}
            width={180}
            height={180}
            objectFit="cover"
          />
          ))}
        </div>
        <p className="mt-10 mb-3 font-black text-xl"> BOOSTER PACKS </p>
        <div className="flex flex-row justify-around">
          {packs.map((url, index) => (
          <Image
          className="px-2"
            key={index}
            src={url}
            alt={`ch ${index}`}
            width={180}
            height={180}
            objectFit="cover"
          />
          ))}
        </div>
        <div className="bg-gray-900 border-4 border-red-100 bg-opacity-80 rounded-lg p-5 my-6 text-sm mx-2 sm:mx-4 md:mx-10 lg:mx-20 xl:m-20" >
        <p className="font-medium text-md">
          🎲 These have a small chance to pull alternative and shiny card artworks 🎲
        </p>
        <p className="font-medium text-md mt-2">
          🤑 Valerian generation rates will change as seasons progress and as more valerians/champions are introduced which can make early generation unopened packs very valuable 🤑
        </p>
        </div>
      </div>
    </div>
    )
    }