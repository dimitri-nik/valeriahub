import Image from "next/image"

export default function Footer() {
  return (
      <div style={{ 
        position: "relative", 
        width: "100%", 
        height: "195vh",
        backgroundImage: 'url("/assets/manga/Campfire.jpg")',
        backgroundSize: "contain", 
        backgroundPosition: "bottom", 
        backgroundRepeat: "no-repeat"
        }}>
        <div className="flex flex-row absolute bottom-16 bg-opacity-90 ml-4 bg-black pr-10 items-center rounded-full">
          <Image className="rounded-full"
            src="/assets/champs/althaki.jpg" 
            objectFit="contain"
            width={50}
            height={50}
            />
           <p className="text-md ml-4 text-orange-100"> Althaki Tribute ❤️</p>
          </div>
       </div>
  )
}