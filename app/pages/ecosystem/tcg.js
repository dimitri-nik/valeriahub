import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch, faMusic } from "@fortawesome/free-solid-svg-icons"
import { faYoutube, faDiscord, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import React, { useState } from 'react';

export default function TCG() {
  const cards = ["/assets/tcg/Grizwald_Epic_GrizzlyRoar.jpg", "/assets/tcg/Kuuko_Common_InfernoClaw.png", "/assets/tcg/Voltra_Common_ElectricReflex.jpg",  "/assets/tcg/Krakatoa_Common_Fiery Redirection.jpg", "/assets/tcg/Jiri_Legendary_ThunderSmash.png", "/assets/tcg/Xenorin_Common_SolarFlare.png", "/assets/tcg/Jiri_Common_Rediscovery.png", "/assets/tcg/Krakatoa_Epic_FirestormEruption.jpg", "/assets/tcg/Grizwald_Epic_GrimShadow.jpg", "/assets/tcg/Jiri_Common_Electro Bolt.png","/assets/tcg/Voltra_Common_Dragon_Surge.png", "/assets/tcg/Krakatoa_Legendary_SeaofFlames.jpg", "/assets/tcg/Voltra_Epic_Right_Head_Blast.jpg", "/assets/tcg/Kuuko_Epic_EmberShield.png", "/assets/tcg/Xenorin_Epic_HaloSmash.png"]
  return (
     <div>
      <div className="flex flex-col items-center text-white pt-20" style={{
        backgroundImage: 'url("/assets/manga/torch.jpg")',
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}>
        <div className="flex flex-col text-orange-100 text-center bg-black bg-opacity-70 rounded-lg px-10 py-4">
        <h1 className="font-black text-2xl"> VALERIA TCG </h1>
        <p className="font-semibold text-lg">🃏 trading card game 🃏</p>
        </div>
        <div className="flex text-sm flex-row text-orange-100 bg-black border-2 bg-opacity-90 border-orange-100 rounded-lg p-6 mt-8 mx-2 sm:mx-10 md:mx-14, lg:mx-20, xl:mx-20">
          <div className="w-1/2 flex flex-col font-medium">
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
          <div className="w-1/2 flex flex-col font-medium ">
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

          // State variable to track hovering status
          const [isHovering, setIsHovering] = useState(false);

          // Event handler for mouse enter
          const handleMouseEnter = () => {
            setIsHovering(true);
          };

          // Event handler for mouse leave
          const handleMouseLeave = () => {
            setIsHovering(false);
          };

          // ... (existing code)

          // Helper function to show the card popup
          const showCardPopup = (url) => {
            // Implement the logic to show the card popup here
            // You can use a modal or a custom popup component to show the card at a larger scale (e.g., scale 500)
            console.log('Show popup for card:', url);
          };

            return (
            <div>
              <div className="flex flex-col items-center text-white pt-20" style={{ backgroundImage: 'url("/assets/manga/torch.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}>
                {/* ... (existing code) */}
                <div className="champsContainer flex flex-row pt-5 scrolling-container-x mb-20" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  {cards.map((url, index) => (
                    <div key={index} className={`mx-4 transition-transform transform-gpu ${isHovering ? "" : "hover:scale-150"}`}>
                      <Image
                        src={url}
                        alt={`tcg ${index}`}
                        width={130}
                        height={130}
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL='/assets/tcg/back.png'
                        onClick={() => showCardPopup(url)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );

          <p className="text-orange-100 text-center bg-black bg-opacity-70 rounded-lg px-4 py-1 font-black mt-10"> More TCG ARTWORK </p>
          <div className="champsContainer flex flex-row pt-5 scrolling-container-x mb-20">
          {cards.map((url, index) => (
          <Image
          className="mx-4 transition-transform transform-gpu hover:scale-150"
            key={index}
            src={url}
            alt={`tcg ${index}`}
            width={130}
            height={130}
            objectFit="cover"
            placeholder="blur"
            blurDataURL='/assets/tcg/back.png'
          />
          ))}
        </div>
          </div>
      </div>
    </div>
  )
}