"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { Bot, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PreviewPanel } from "./preview-panel";
import { MDXRenderer } from "./mdx-renderer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  const [currentCode, setCurrentCode] = useState("");
  const endOfMessagesRef = useRef(null); // Ref for the end of messages

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === "assistant") {
        const codeMatch = lastMessage.content.match(
          /```(?:jsx?|tsx?)\n([\s\S]*?)```/
        );
        if (codeMatch && codeMatch[1]) {
          setCurrentCode(codeMatch[1].trim());
        }
      }
    }
  }, [messages]);

  // Scroll to the bottom when messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ResizablePanelGroup direction="horizontal" className="rounded-lg border">
      <ResizablePanel defaultSize={40}>
        <Card className="w-full flex h-full flex-col rounded-none border-none">
          <CardHeader>
            <CardTitle>AI Assistant</CardTitle>
          </CardHeader>
          <CardContent className="overflow-y-auto h-[80vh] mb-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 mb-4 ${
                  message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10">
                  {message.role === "assistant" ? (
                    <Bot className="w-5 h-5 text-primary" />
                  ) : (
                    <User className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div
                  className={`flex-1 px-4 py-2 rounded-lg ${
                    message.role === "assistant" ? "bg-muted" : "bg-primary/10"
                  }`}
                >
                  <MDXRenderer content={message.content} />
                </div>
              </div>
            ))}
            {/* Empty div to help scroll to the bottom */}
            <div ref={endOfMessagesRef} />
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                placeholder="Describe the React Native component you want to create..."
                value={input}
                onChange={handleInputChange}
              />
              <Button type="submit">
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <PreviewPanel code={currentCode} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
