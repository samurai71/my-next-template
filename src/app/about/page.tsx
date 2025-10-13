import { ModeToggle } from '@/components/mode-toogle'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <ModeToggle />
      <main className="container mx-auto w-5xl px-3 py-3">
        <h1>About Us Page</h1>
      </main>
    </div>
  )
}
