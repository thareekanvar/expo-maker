"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MDXRenderer } from "./mdx-renderer";

export function ChatPreview({ messages }) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Chat Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {messages.map((message, index) => (
            <div key={index} className="mb-4">
              <div className="font-bold">
                {message.role === "user" ? "User" : "Assistant"}:
              </div>
              <MDXRenderer content={message.content} />
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
