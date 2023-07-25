import Image from "next/image"

export default function Footer() {
  return (
      <div style={{ position: "relative", width: "100vw", height: "195vh" }}>
        <Image
          src="/assets/manga/campfire.jpg" 
          layout="fill"
          objectFit="contain"
          />
       </div>
  )
}