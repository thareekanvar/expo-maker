import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./header";

export default function Hero() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center gap-10 max-w-[80rem] p-6 text-center md:p-8 min-h-[100vh]"
      >
        <Header />
        <h1 className="bg-gradient-to-br md:mt-32 from-white to-stone-700 bg-clip-text text-5xl font-semibold tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          Build Mobile Apps with
          <br className="hidden md:block" /> AI and Expo.
        </h1>
        <p className="text-lg tracking-tight text-gray-400 md:text-xl">
          Revolutionize Your Mobile Development Create stunning cross-platform
          <br className="hidden md:block" />
          mobile applications in minutes using the power of AI and Expo.
        </p>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-100 w-fit"
        >
          Get Started for free
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </Button>

        <div className="before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,'#ffffff',transparent_70%)] w-full p-1 [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border-2 border-transparent animate-border">
          <Image
            alt="hero"
            src={"/hero/ai.png"}
            className="w-full rounded-xl overflow-hidden border-2 border-gray-600"
            width={3000}
            height={3000}
          />
        </div>

        <p className="text-gray-500 md:mb-32">Developed by thareekanvar</p>
      </section>
    </div>
  );
}
