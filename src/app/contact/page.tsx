import MyForm from '@/components/contactform'
import { ModeToggle } from '@/components/mode-toogle'

export default function Contact() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <ModeToggle />
      <main>
        <h1 className="font-serif text-5xl font-bold">Contact Us</h1>
        <MyForm />
      </main>
    </div>
  )
}
