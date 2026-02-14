"use client"

import { useEffect, useState } from "react"

const messages = [
  "Mi alma es tuya",
  "Cada dia te amo mas",
  "Eres el amor de mi vida",
  "Cada momento contigo es un tesoro",
  "Eres mi persona favorita en el mundo",
  "Contigo todo es mas bonito",
]

export function LoveMessage() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length)
        setIsVisible(true)
      }, 500)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-12 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <SparkleIcon className="text-primary animate-sparkle" />
          <SparkleIcon
            className="text-accent animate-sparkle"
            style={{ animationDelay: "0.5s" }}
          />
          <SparkleIcon
            className="text-primary animate-sparkle"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <p
          className={`font-serif text-3xl md:text-4xl text-primary transition-all duration-500 text-balance ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {messages[currentMessage]}
        </p>
      </div>
    </section>
  )
}

function SparkleIcon({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
  )
}
