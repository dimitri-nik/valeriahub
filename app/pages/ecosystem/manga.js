import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch, faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { faYoutube, faDiscord, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Manga() {
  const cards = ["/assets/tcg/Grizwald_Epic_GrizzlyRoar.jpg", "/assets/tcg/Kuuko_Common_InfernoClaw.png",  "/assets/tcg/physicalcards.JPG", "/assets/tcg/Xenorin_Common_SolarFlare.png", "/assets/tcg/Jiri_Common_Electro Bolt.png","/assets/tcg/Voltra_Common_Dragon_Surge.png"]
  return (
    <div className="items-center flex flex-col">
     <div className="flex flex-col bg-manga-container text-white justify-between" style={{height: "100vh", width: "100vw"}}>
        <div className="flex flex-col text-center bg-gray-800 bg-opacity-90 rounded-lg px-10 py-4 mx-10 mt-16 mx-4 sm:mx-12 md:mx-20 lg:mx-40 xl:mx-80">
        <p className="font-black text-2xl"> WEB COMIC </p>
        <p className="font-semibold text-lg"> available to read now on 
        <Link className="text-blue-400 font-bold underline" target="_blank" href="https://www.voyce.me/series/land-of-valeria"> VOYCE.ME </Link>
        </p>
        </div>
        <div className="mb-20 flex text-orange-100 text-center bg-gray-800 bg-opacity-90 rounded-lg px-10 py-4 mx-4 sm:mx-12 md:mx-20 lg:mx-40 xl:mx-80">
          <p className="text-sm font-medium leading-loose">
          The Land of Valeria is home to fantastic elemental wildlife, ethereal lands brimming with natural resources, and a war for control of them. Favian, a naturalist who dedicated his life to the study and conservation of the Valerian creatures, finds himself in the middle of the rising conflict between Heroes and Conquerers. As Conquerers invade his town and years of research burns down in front of him, Favian, armed only with his knowledge of the Valerians, reluctantly joins the fray.
          </p>
        </div>
      </div>
    </div>
  )
}