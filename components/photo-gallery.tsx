"use client"

import Image from "next/image"

const photos = [
  {
    src: "/images/foto-beso-noche.jpg",
    alt: "Nosotros juntos",
    caption: "Mi alma es tuya",
  },
  {
    src: "/images/foto-abrazo-tierno.jpg",
    alt: "Nuestro abrazo",
    caption: "Cada dia te amo mas",
  },
  {
    src: "/images/foto-selfie-juntos.jpg",
    alt: "Selfie juntos",
    caption: "Eres el amor de mi vida",
  },
  {
    src: "/images/foto-cafecito.jpg",
    alt: "Nuestro cafecito juntos",
    caption: "Cada momento contigo es un tesoro",
  },
  {
    src: "/images/foto-beso-risa.jpg",
    alt: "Beso y risas",
    caption: "Eres la razon de mi sonrisa",
  },
  {
    src: "/images/foto-besito-corazon.jpg",
    alt: "Nuestro besito",
    caption: "Contigo todo es mas bonito",
  },
]

export function PhotoGallery() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <h2 className="font-serif text-4xl md:text-5xl text-center text-primary mb-10 animate-fade-in-up text-balance">
        Momentos que atesoro contigo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            className="group relative rounded-2xl overflow-hidden shadow-lg bg-card border border-border animate-fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-serif text-xl text-primary-foreground drop-shadow-lg text-center">
                {photo.caption}
              </p>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm text-muted-foreground font-medium">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
