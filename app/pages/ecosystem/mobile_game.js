"use client"
import React from "react"

import YoutubePlayer from "@/app/components/youtube_player"

import Image from 'next/image'

export default function MobileGame() {
  return (
     <div>
      <div className="flex flex-col items-center text-violet-100 pt-20 pb-10 text-violet-100" style={{
        backgroundImage: 'url("https://valeriagames.com/images/our-collectibles-bg.webp")',
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }}>
        <div className="flex flex-col text-center">
        <p className="font-black text-2xl bg-black bg-opacity-40 rounded-lg p-4 mb-4"> LAND BEFORE THE WAR </p>
        <h1 className="font-semibold text-lg">📱 mobile game 📱</h1>
        </div>
      <div className="flex flex-col items-center justify-center mt-10">
      <p className="text-sm font-black italic mb-2">COMING SOON</p>
      <div className="flex items-center justify-center mx-4">
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
        <div className="flex text-sm flex-row bg-black bg-opacity-40 border-4 border-violet-100 rounded-lg p-6 mt-8 mx-2 sm:mx-4 md:mx-10 lg:mx-20 xl:m-20">
          <div className="w-1/2 flex flex-col text-sm font-medium">
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
          <div className="w-1/2 flex flex-col text-sm font-medium ml-4">
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
          <p className="text-center mt-10 mb-2 font-semibold mx-2 py-2"> Great in-depth video of some early gameplay </p>
        <div className="mb-10 mx-4" style={{width: "100%", maxWidth: "640px"}}>
          <YoutubePlayer videoId="NNNQqoixaSM" containerClassName="youtube-player-container"/>
        </div>
      </div>
    </div>
  )
}