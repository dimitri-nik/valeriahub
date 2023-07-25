import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch, faMusic } from "@fortawesome/free-solid-svg-icons"
import { faYoutube, faDiscord, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function TCG() {
  const cards = ["/assets/tcg/Grizwald_Epic_GrizzlyRoar.jpg", "/assets/tcg/Kuuko_Common_InfernoClaw.png",  "/assets/tcg/physicalcards.JPG", "/assets/tcg/Xenorin_Common_SolarFlare.png", "/assets/tcg/Jiri_Common_Electro Bolt.png","/assets/tcg/Voltra_Common_Dragon_Surge.png"]
  return (
     <div className="bg-tcg-container">
      <div className="flex flex-col items-center text-black pt-20 pb-20">
        <div className="flex flex-col text-orange-100 text-center bg-black bg-opacity-70 rounded-lg px-10 py-4">
        <p className="font-black text-2xl"> VALERIA TCG </p>
        <p className="font-semibold text-lg">🃏 trading card game 🃏</p>
        </div>
        <div className="flex text-sm flex-row text-orange-100 bg-black border-2 bg-opacity-90 border-orange-100 rounded-lg p-6 mt-8 mx-10">
          <div className="w-1/2 flex flex-col text-xs font-medium">
            <p className="mb-2 font-bold text-lg">
              Info
            </p>
            <p className="my-2">
              Plays similar to 
              <Link className="text-blue-500 font-bold" target="_blank" href="https://youtu.be/f8wyWtcj9rU?si=e7hHUm0P_NVRCAp4"> monster rancher </Link>
            </p>
            <p className="my-2">
              Starter decks will be available to purchase on Valeria Amazon Webstore and with $VAL token on official website
            </p>
            <p className="my-2">
              Packs will contain QR codes to mint your pulls as NFT's to play on digital version
            </p>
          </div>
          <div className="w-1/2 flex flex-col text-xs font-medium ">
            <p className="mb-2 font-bold text-lg" >
              Deck
            </p>
            <p className="my-2">
              Valerian base cards - bring 3 into battle
            </p>
            <p className="my-2">
              Valerian attack cards 
            </p>
            <p className="my-2">
              Champions - like trainers in pokemon TCG
            </p>
            <p className="my-2">
              Special items
            </p>
          </div>
        </div>
         <div className="flex flex-col items-center w-full overflow-hidden mt-10">
          <p className="text-orange-100 text-center bg-black bg-opacity-70 rounded-lg px-4 py-1 font-black mb-2"> BASE </p>
          <Image
          className="px-2"
            src="/assets/tcg/voltra.png"
            alt={`voltra base`}
            width={240}
            height={240}
            objectFit="cover"
          />

          <p className="text-orange-100 text-center bg-black bg-opacity-70 rounded-lg px-4 py-1 font-black mt-4 mb-2"> ATTACK CARDS </p>
          <div className="flex flex-row">
          <Image
          className="px-2"
            src="/assets/tcg/Voltra_Legendary_Critical_Overcharge.jpg"
            alt={`voltra surge`}
            width={180}
            height={180}
            objectFit="cover"
          />
          <Image
          className="px-2"
            src="/assets/tcg/Voltra_Common_Lightning_Roar.jpg"
            alt={`voltra roar`}
            width={180}
            height={180}
            objectFit="cover"
          />
          <Image
          className="px-2 rounded-lg"
            src="/assets/tcg/Voltra_Common_ThreefoldLightning.jpg"
            alt={`voltra threefold`}
            width={180}
            height={180}
            objectFit="cover"
          />
          </div>

          <p className="text-orange-100 text-center bg-black bg-opacity-70 rounded-lg px-4 py-1 font-black mt-10"> More TCG ARTWORK </p>
          <div className="champsContainer flex flex-row pt-5 scrolling-container-x">
          {cards.map((url, index) => (
          <Image
          className="px-4"
            key={index}
            src={url}
            alt={`ch ${index}`}
            width={150}
            height={150}
            objectFit="cover"
          />
          ))}
        </div>
          </div>
      </div>
    </div>
  )
}