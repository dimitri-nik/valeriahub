import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch, faMusic, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons"
import { faYoutube, faDiscord, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

import Ecosystem from './pages/ecosystem/ecosystem'
import Assets from './pages/assets/assets'
import Footer from './pages/footer'

const leftComicStrip = ["/assets/manga/chapter1/10-20.png", "/assets/manga/chapter1/20-35.png"]
const rightComicStrip = ["/assets/manga/chapter4/29-32.png", "/assets/manga/chapter1/45-56.png"]

export default function Home() {
  return (
    <main>
       <header>
        <nav style= {{maxWidth: "1000px"}} className="flex justify-around py-4 px-4 bg-black text-white w-full fixed top-0 z-10 overflow-hidden">
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

      <div className="bg-white text-black" style={{
        backgroundImage: 'url("/assets/manga/webcomic.jpg")',
        backgroundSize: "cover", 
        backgroundPosition: "center",
        minHeight: "100vh",
      }}>
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
        <div className="flex-grow flex-col">
          <div className="center-image-container mx-2 p-4 rounded-xl md:mx-8 lg:mx-12 xl:mx-12">
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
            <div className="max-w-xl p-6 bg-black bg-opacity-100 mt-10 rounded-xl mx-2 sm:mx-4 md:mx-10 lg:mx-20 xl:m-20">
              <h1 className="text-2xl font-black text-center text-white">
                WELCOME TO VALERIA HUB!</h1>
                <p className="text-l font-medium text-center text-white mt-4">
                  Explore this community made fansite and unveil the secrets of Valeria's ecosystem & assets!
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
      <Footer className="overflow-hidden" style={{width: "100%"}}/>
        <div className="flex flex-col items-center fixed bottom-16 right-4">
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
