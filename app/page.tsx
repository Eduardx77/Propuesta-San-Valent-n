import { FallingHearts } from "@/components/falling-hearts"
import { ValentineProposal } from "@/components/valentine-proposal"
import { PhotoGallery } from "@/components/photo-gallery"
import { LoveMessage } from "@/components/love-message"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FallingHearts />

      <div className="relative z-10 flex flex-col items-center gap-16 py-12 md:py-20">
        {/* Header */}
        <header className="text-center px-4 animate-fade-in-up">
          <p className="text-muted-foreground text-lg mb-2 tracking-widest uppercase">
            14 de Febrero
          </p>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary drop-shadow-sm text-balance">
            Feliz San Valentin
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="block w-16 h-[2px] bg-primary/40" />
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-accent animate-pulse-heart"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="block w-16 h-[2px] bg-primary/40" />
          </div>
        </header>

        {/* Love Message Carousel */}
        <LoveMessage />

        {/* Photo Gallery */}
        <PhotoGallery />

        {/* The Big Question */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-2xl">
            <ValentineProposal />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 px-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <p className="font-serif text-2xl text-primary/70">
            {"Hecho con todo mi amor para ti"}
          </p>
          <div className="mt-2 flex items-center justify-center gap-1 text-accent" aria-hidden="true">
            {[1, 2, 3].map((i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="animate-pulse-heart"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            ))}
          </div>
        </footer>
      </div>
    </main>
  )
}
