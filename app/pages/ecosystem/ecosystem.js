import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeBranch, faMusic } from "@fortawesome/free-solid-svg-icons"
import { faYoutube, faDiscord, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import MobileGame from './mobile_game'
import TCG from './tcg'
import Manga from './manga'

export default function Ecosystem() {
  return (
      <div>
          <MobileGame />
          <TCG />
          <Manga />
      </div>
  )
}