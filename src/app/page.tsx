import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="fixed top-4 right-4">
          <ThemeToggle />
        </div>

        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Next.js Theme Switcher</h1>
          <p className="text-muted-foreground">
            Click the button in the top-right corner to toggle between light and
            dark modes.
          </p>
          <div className="bg-card mt-8 rounded-lg border p-6">
            <h2 className="mb-2 text-2xl font-semibold">Features</h2>
            <ul className="space-y-2 text-left">
              <li>✅ Context API for theme management</li>
              <li>✅ LocalStorage persistence</li>
              <li>✅ System theme detection</li>
              <li>✅ Tailwind v4 CSS configuration</li>
              <li>✅ TypeScript support</li>
              <li>✅ Shadcn/ui components</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
