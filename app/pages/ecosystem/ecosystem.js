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