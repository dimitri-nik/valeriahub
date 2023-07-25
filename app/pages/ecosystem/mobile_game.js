"use client"
import React from "react"

import YoutubePlayer from "@/app/components/youtube_player"

import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch, faMusic } from "@fortawesome/free-solid-svg-icons"
import { faYoutube, faDiscord, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function MobileGame() {
  return (
     <div className="bg-mobile-game-container mt-10">
      <div className="flex flex-col items-center text-black pt-20 px-10 bg-white bg-opacity-10">
        <div className="flex flex-col text-center bg-white bg-opacity-50 rounded-lg px-10 py-4">
        <p className="font-black text-2xl"> LAND BEFORE THE WAR </p>
        <p className="font-semibold text-lg">📱 mobile game 📱</p>
        </div>
      <div className="flex flex-col items-center justify-center mt-10">
      <p className="text-sm font-black italic mb-2">COMING SOON</p>
      <div className="flex items-center justify-center">
        {/* Column 1 */}
        <div className="sm:w-1/2 pr-10  mb-4">
          <Image
            src="https://supercell.com/_next/static/media/googleplay.4ced544f.webp"
            alt="Google Play Store"
            className="rounded-lg"
            width={200}
            height={100}
          />
        </div>
        {/* Column 2 */}
        <div className="sm:w-1/2 pl-10 mb-4">
          <Image
            src="https://supercell.com/_next/static/media/appstore.c44572b2.webp"
            alt="App Store"
            className="rounded-lg"
            width={200}
            height={100}
          />
        </div>
      </div>
    </div>
        <div className="flex text-sm flex-row bg-white border-4 border-black rounded-lg p-6 mt-8">
          <div className="w-1/2 flex flex-col text-xs font-medium">
            <p className="mb-2 font-bold text-lg">
              Info
            </p>
            <p className="my-2">
              Real Time Strategy & Energy Based 
            </p>
            <p className="my-2">
              Free To Play
            </p>
            <p className="my-2">
              Pokemon x Clash Royale
            </p>
            <p className="my-2">
              Play to OWN - buy, sell, share and trade in game assets
            </p>
          </div>
          <div className="w-1/2 flex flex-col text-xs font-medium ">
            <p className="mb-2 font-bold text-lg" >
              Game Modes
            </p>
            <p className="my-2">
             PvE - Story Mode, Dungeons, Survival
            </p>
            <p className="my-2">
              PvP - Ranked, Tournaments, Faction Battles
            </p>
            <p className="my-2">
              Story mode will be interactive - you will be presented with chapters of the manga as your progress through levels!
            </p>
          </div>
        </div>
        <div className="my-10 mx-4" style={{width: "100vw", maxWidth: "640px"}}>
          <p className="text-center mb-4 font-semibold"> Great in-depth video of some early gameplay </p>
          <YoutubePlayer videoId="NNNQqoixaSM" containerClassName="youtube-player-container"/>
        </div>
      </div>
    </div>
  )
}