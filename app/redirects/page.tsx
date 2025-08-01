import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RedirectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-background">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Explore the Useless Tools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Gibberish Translator */}
        <Link
          href="https://v0-gibberish-translator-ui.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="flex flex-col items-center p-6 text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <CardHeader className="p-0 pb-4">
              <Image
                src="/images/gibberish-translator-monster.png"
                alt="Colorful monster holding a glowing lollipop, representing gibberish translation"
                width={200}
                height={200}
                className="rounded-lg object-cover mb-4"
              />
              <CardTitle className="text-2xl font-semibold">Gibberish Translator</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-muted-foreground">
              Translate your gibberish sentences into something... well, different nonsense!
            </CardContent>
          </Card>
        </Link>

        {/* Meme Generator */}
        <Link
          href="https://v0-meme-generator-project-indol.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="flex flex-col items-center p-6 text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <CardHeader className="p-0 pb-4">
              <Image
                src="/images/meme-generator-cat.png"
                alt="Close-up of a cat's face with 'Meow MeMes' text and heart emojis, representing a meme generator"
                width={200}
                height={200}
                className="rounded-lg object-cover mb-4"
              />
              <CardTitle className="text-2xl font-semibold">Meme Generator</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-muted-foreground">
              Create hilarious memes by providing a description or image.
            </CardContent>
          </Card>
        </Link>

        {/* Do Nothing */}
        <Link
          href="https://v0-do-nothing-app-design.vercel.app/"
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="flex flex-col items-center p-6 text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <CardHeader className="p-0 pb-4">
              <Image
                src="/images/do-nothing-sloth.png"
                alt="Cartoon sloth hanging from a tree branch with 'Do Nothing' text, representing laziness"
                width={200}
                height={200}
                className="rounded-lg object-cover mb-4"
              />
              <CardTitle className="text-2xl font-semibold">Do Nothing</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-muted-foreground">
              The perfect destination for lazy people who want to do absolutely nothing.
            </CardContent>
          </Card>
        </Link>

        {/* Overthinker AI */}
        <Link href="https://overthinker-ai.lovable.app/" target="_blank" rel="noopener noreferrer" className="group">
          <Card className="flex flex-col items-center p-6 text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <CardHeader className="p-0 pb-4">
              <Image
                src="/images/overthinker-ai-brain.png"
                alt="Cartoon brain lifting weights with 'SHHH... LET ME OVERTHINK' text"
                width={200}
                height={200}
                className="rounded-lg object-cover mb-4"
              />
              <CardTitle className="text-2xl font-semibold">Overthinker AI</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-muted-foreground">
              Enter any thought and watch it spiral into magnificent overthinking with AI assistance.
            </CardContent>
          </Card>
        </Link>

        {/* Heartbreak Whisperer */}
        <Link
          href="https://heartbreak-whisperer.lovable.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Card className="flex flex-col items-center p-6 text-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <CardHeader className="p-0 pb-4">
              <Image
                src="/images/heartbreak-whisperer-hearts.png"
                alt="Pile of pink and red heart-shaped candies, representing heartbreak"
                width={200}
                height={200}
                className="rounded-lg object-cover mb-4"
              />
              <CardTitle className="text-2xl font-semibold">Heartbreak Whisperer</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-muted-foreground">
              Get the brutal truth about your conversations with AI-powered drama detection.
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
