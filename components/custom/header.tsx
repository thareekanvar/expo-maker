import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-lg font-semibold text-white hover:text-gray-300 transition-colors"
        >
          AI Expo Builder
        </Link>
        <div className="ml-auto flex h-full items-center">
          {/* <Link
            href="#features"
            className="mr-6 text-sm text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="mr-6 text-sm text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </Link> */}
          <Button
            asChild
            variant="outline"
            className="text-white bg-transparent border-white hover:bg-white hover:text-black transition-colors"
          >
            <Link href="/dashboard">Log in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
