'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MDXRenderer } from './mdx-renderer'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatPreviewProps {
  messages: Message[]
}

export function ChatPreview({ messages }: any) {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Chat Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {messages.map((message:any, index:any) => (
            <div key={index} className="mb-4">
              <div className="font-bold">{message.role === 'user' ? 'User' : 'Assistant'}:</div>
              <MDXRenderer content={message.content} />
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

