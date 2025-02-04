"use client";

import Image from "next/image";
import Header from "./header";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center gap-10 max-w-[80rem] p-6 text-center md:p-8 min-h-[100vh]"
      >
        <Header />
        <h1 className="bg-gradient-to-br mt-16 md:mt-32 from-white to-stone-700 bg-clip-text text-5xl font-semibold tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          Build Mobile Apps with
          <br className="hidden md:block" /> AI and Expo.
        </h1>
        <p className="text-lg tracking-tight text-gray-400 md:text-xl">
          Revolutionize Your Mobile Development Create stunning cross-platform
          <br className="hidden md:block" />
          mobile applications in minutes using the power of AI and Expo.
        </p>

        <div className="before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,'#ffffff',transparent_70%)] w-full p-1 [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border-2 border-transparent animate-border">
          <Image
            alt="hero"
            src={"/hero/ai.png"}
            className="w-full rounded-xl overflow-hidden border-2 border-gray-600"
            width={3000}
            height={3000}
          />
        </div>
      </section>
      <p className="text-gray-500 text-center mb-12">
        Developed by{" "}
        <Link href="https://www.thareekanvar.com/">thareekanvar</Link>
      </p>
    </div>
  );
}
