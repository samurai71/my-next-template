import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <ModeToggle />
      <main className="container mx-auto px-3 py-3 sm:w-3xs lg:w-5xl">
        <h1>Home Page</h1>
      </main>
    </div>
  )
}
