import { ChatInterface } from "@/components/custom/chat-interface";


export default function Home() {
  return (
    <main className="container py-6">
      <div  className="w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Build React Native Apps with AI</h1>
        <ChatInterface />
      </div>
    </main>
  )
}

