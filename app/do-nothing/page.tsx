import Link from "next/link"
export default function DoNothingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-background">
      <h1 className="text-4xl md:text-5xl font-bold">This page does nothing.</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        You have successfully redirected to a page that performs no action.
      </p>
      <Link href="/" className="mt-8 text-primary hover:underline">
        Go back to the main page
      </Link>
    </div>
  )
}
