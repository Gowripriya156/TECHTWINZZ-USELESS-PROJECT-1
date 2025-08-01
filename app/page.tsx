import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CoverPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4 text-center">
      <div className="max-w-4xl mx-auto">
        <Image
          src="/images/game-controller.png" // Updated image source
          alt="Black game controller floating against a blue and purple gradient background" // Updated alt text
          width={300}
          height={300}
          className="mx-auto mb-8 rounded-full shadow-lg"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">BeAUseLess</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Dive into a world of delightful distractions and embrace the art of doing absolutely nothing productive.
        </p>
        <Link href="/redirects" passHref>
          <Button className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Explore the Links
          </Button>
        </Link>
      </div>
    </div>
  )
}
