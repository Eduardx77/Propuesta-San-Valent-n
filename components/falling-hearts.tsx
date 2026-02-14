"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
  color: string
}

export function FallingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const colors = [
      "text-primary",
      "text-accent",
      "text-pink-300",
      "text-rose-400",
      "text-red-300",
    ]
    const generated: Heart[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 12,
      duration: Math.random() * 5 + 6,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={`absolute animate-fall ${heart.color}`}
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          {"<3".replace("<3", "\u2665")}
        </span>
      ))}
    </div>
  )
}
