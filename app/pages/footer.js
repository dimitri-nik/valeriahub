import Image from "next/image"

export default function Footer() {
  return (
      <div style={{ position: "relative", width: "100%", height: "195vh" }}>
        <Image
          src="/assets/manga/Campfire.jpg" 
          layout="fill"
          objectFit="contain"
          />
       </div>
  )
}