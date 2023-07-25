import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch, faArrowRight, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { faYoutube, faDiscord, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import GenesisLand from './genesis_land'
import ChampionPFP from './champion_pfp'
import InGameAssets from './ingame_assets'

export default function Assets() {
  return (
    <div>
      <GenesisLand />
      <ChampionPFP />
      <InGameAssets />
    </div>
  )
}