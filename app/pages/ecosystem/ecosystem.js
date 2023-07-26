import MobileGame from './mobile_game'
import TCG from './tcg'
import Manga from './manga'

export default function Ecosystem() {
  return (
      <div style={{width:"100%"}}>
          <MobileGame />
          <TCG />
          <Manga />
      </div>
  )
}