import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch, faMusic, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import { faYoutube, faDiscord, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

import Ecosystem from './pages/ecosystem/ecosystem'
import Assets from './pages/assets/assets'

const leftComicStrip = ["/assets/manga/chapter1/10-20.png", "/assets/manga/chapter1/20-35.png"]
const rightComicStrip = ["/assets/manga/chapter4/29-32.png", "/assets/manga/chapter1/45-56.png"]

export default function Home() {
  return (
    <main> 
       <header className="bg-black text-white fixed top-0 z-10 w-full">
        <nav className="container mx-auto flex justify-around py-4 px-4">
          <Link href="#home">
            <p> Home </p>
          </Link>
          <Link href="#ecosystem">
            <p> Ecosystem </p>
          </Link>
          <Link href="#assets">
            <p> Assets </p>
          </Link>
          <Link href="#links">
            <p> Socials </p>
          </Link>
        </nav>
      </header>
     <div className="bg-image-container">
        <div id="home" className="flex justify-center py-10" style={{
          height: "100vh",
          overflow: "hidden"
        }}>
        <div className="w-1/6 flex-col scrolling-container">
          {leftComicStrip.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`ch1 ${index}`}
            width={100}
            height={500}
            objectFit="contain"
            layout="responsive"
          />
          ))}
        </div>
        <div className="flex-grow flex-col p-10">
          <div className="center-image-container mx-20">
          <Image
            src="/assets/logos_banners_icons/Logo_White_PinkGlow.png"
            alt="Valeria Title"
            width={500}
            height={500}
            objectFit="contain"
            layout="responsive"
          />
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-xl mx-auto mt-20 p-10 bg-black bg-opacity-100 rounded-xl">
              <p className="text-2xl font-black text-center text-white">
                WELCOME TO THE VALERIA GAMES HUB!</p>
                <p className="text-l font-medium text-center text-white mt-4">
                  Explore this community made website and unveil the secrets of Valeria's ecosystem & assets!
              </p>
            </div>
          <Link className="mt-8" href="#ecosystem">
            <FontAwesomeIcon color={"#ffffff"} height={36} icon={faArrowCircleDown}/>
          </Link>
            <div>
          </div>
          </div>
        </div>
        <div className="w-1/6 image-container scrolling-container">
          {rightComicStrip.map((url, index) => (
          <Image
            key={index}
            src={url}
            alt={`ch1 ${index}`}
            width={100}
            height={500}
            objectFit="contain"
            layout="responsive"
          />
          ))}
        </div>
      </div>
      <div>
      </div>
      </div>
      <div>
      <div id="ecosystem">
        <Ecosystem/>
      </div>
      <div id="assets" className="pt-4"> 
        <Assets/>
      </div>
      </div>
      <div className="bg-footer-container" style={{ width: "100vw", height: "200vh"}}>
        
      </div>
        <div className="flex flex-col items-center fixed bottom-20 right-4">
          <div className="flex flex-row pb-1">
            <FontAwesomeIcon className="pr-2"color={"#ffffff"} height={18} icon={faMusic} />
           <p className="text-sm"> Land Before the War main theme </p>
          </div>
        <audio
        controls
        autoPlay
        loop
        style={{ display: ""}} // Hide the audio controls
      >
        <source src="/assets/music/main/main_menu_theme.wav" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </div>
      <footer id="links" className="bg-black bg-opacity-80 text-white py-8 px-8">
        <nav className="container mx-auto flex items-center justify-evenly">
          <Link href="https://twitter.com/ValeriaStudios">
            <FontAwesomeIcon color={"#ffffff"} height={24} icon={faTwitter} size={"xl"}/>
          </Link>
          <Link href="https://discord.com/invite/valeriagames">
            <FontAwesomeIcon color={"#ffffff"} height={24} icon={faDiscord} size={"xl"}/>
          </Link>
          <Link href="https://www.youtube.com/@ValeriaGames">
            <FontAwesomeIcon color={"#ffffff"} height={24} icon={faYoutube} size={"xl"}/>
          </Link>
          <Link href="https://www.tiktok.com/@landofvaleria">
            <FontAwesomeIcon color={"#ffffff"} height={24} icon={faTiktok} size={"xl"}/>
          </Link>
          <Link href="https://linktr.ee/valeriastudios">
            <FontAwesomeIcon color={"#ffffff"} height={24} icon={faCodeBranch} size={"xl"}/>
          </Link>
        </nav>
      </footer>
    </main>
  )
}
