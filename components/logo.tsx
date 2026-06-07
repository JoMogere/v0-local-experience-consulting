import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-white no-underline">
      <div className="w-[50px] h-[50px] relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BookedUp%20Africa%20Logo-tPdkLknldcSEjEadrPMnjrh4qRp9zO.png"
          alt="BookedUp Africa"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-xl font-bold leading-none tracking-[1px] uppercase">
          BookedUp
        </div>
        <div className="text-[10px] font-bold text-orange-500 tracking-[2px] uppercase">
          Africa
        </div>
      </div>
    </Link>
  )
}
