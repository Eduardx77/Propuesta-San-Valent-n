"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"

export function ValentineProposal() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [accepted, setAccepted] = useState(false)
  const [noMoves, setNoMoves] = useState(0)
  const [yesScale, setYesScale] = useState(1)

  const moveNoButton = useCallback(() => {
    const x = Math.random() * 200 - 100
    const y = Math.random() * 200 - 100
    setNoPosition({ x, y })
    setNoMoves((prev) => prev + 1)
    setYesScale((prev) => Math.min(prev + 0.15, 2.5))
  }, [])

  const noMessages = [
    "No",
    "Segura?",
    "Piensalo bien...",
    "No me hagas esto!",
    "Vamos, di que si!",
    "Te vas a arrepentir!",
    "Por favor!",
    "No seas malita!",
    "Me vas a hacer llorar",
    "Ultima oportunidad...",
  ]

  if (accepted) {
    return <CelebrationScreen />
  }

  return (
    <section className="flex flex-col items-center gap-8 py-12 px-4">
      <div className="animate-pulse-heart">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-accent drop-shadow-lg"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      <h2 className="font-serif text-5xl md:text-7xl text-primary text-center text-balance leading-tight">
        {"Quieres ser mi San Valentin?"}
      </h2>

      <p className="text-muted-foreground text-lg text-center max-w-md text-balance">
        Cada momento contigo es un regalo. Hoy quiero preguntarte algo muy especial...
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 relative min-h-[120px]">
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xl px-10 py-6 rounded-full shadow-xl transition-all duration-300 animate-bounce-soft"
          style={{ transform: `scale(${yesScale})` }}
          onClick={() => setAccepted(true)}
        >
          {"Si, quiero!"}
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="border-2 border-primary text-primary hover:bg-secondary font-bold text-lg px-8 py-5 rounded-full transition-all duration-200"
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          onClick={moveNoButton}
        >
          {noMessages[Math.min(noMoves, noMessages.length - 1)]}
        </Button>
      </div>

      {noMoves > 0 && (
        <p className="text-muted-foreground text-sm animate-fade-in-up italic">
          {noMoves < 3
            ? "Jejeje, no te escapas tan facil..."
            : noMoves < 6
              ? "El boton de 'Si' cada vez se ve mejor, no crees?"
              : "Ya rindete y di que si!"}
        </p>
      )}
    </section>
  )
}

function CelebrationScreen() {
  return (
    <section className="flex flex-col items-center gap-8 py-12 px-4 animate-fade-in-up">
      <Confetti />

      <div className="relative">
        <svg
          width="160"
          height="160"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-accent animate-pulse-heart drop-shadow-2xl"
          aria-hidden="true"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary-foreground font-serif text-3xl font-bold drop-shadow">{"Si!"}</span>
        </div>
      </div>

      <h2 className="font-serif text-5xl md:text-7xl text-primary text-center text-balance">
        {"Sabia que dirias que si!"}
      </h2>

      <p className="text-foreground text-xl text-center max-w-lg text-balance leading-relaxed">
        {"Eres lo mas bonito que me ha pasado. Feliz San Valentin, mi amor. Te quiero con todo mi corazon."}
      </p>

      <div className="flex gap-4 text-5xl animate-bounce-soft" aria-hidden="true">
        {["heart-1", "heart-2", "heart-3", "heart-4", "heart-5"].map((key, i) => (
          <span
            key={key}
            className="animate-float"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            {"\u2665"}
          </span>
        ))}
      </div>

      <div className="mt-6 p-8 rounded-3xl bg-card border border-border shadow-xl max-w-md text-center">
        <p className="font-serif text-3xl text-primary mb-3">{"Para siempre juntos"}</p>
        <p className="text-muted-foreground text-lg">
          {"Este San Valentin es el primero de muchos mas. Gracias por decir que si."}
        </p>
      </div>
    </section>
  )
}

function Confetti() {
  const confettiPieces = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
    color: [
      "bg-primary",
      "bg-accent",
      "bg-pink-300",
      "bg-rose-400",
      "bg-red-300",
    ][Math.floor(Math.random() * 5)],
    shape: Math.random() > 0.5 ? "rounded-full" : "rounded-sm",
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50" aria-hidden="true">
      {confettiPieces.map((piece) => (
        <span
          key={piece.id}
          className={`absolute animate-confetti-fall ${piece.color} ${piece.shape}`}
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
