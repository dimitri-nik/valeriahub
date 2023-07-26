
import GenesisLand from './genesis_land'
import ChampionPFP from './champion_pfp'
import InGameAssets from './ingame_assets'

export default function Assets() {
  return (
    <div style={{width:"100%"}} >
      <GenesisLand />
      <ChampionPFP />
      <InGameAssets />
    </div>
  )
}