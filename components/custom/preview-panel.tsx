
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

interface PreviewPanelProps {
  code: string
}

export function PreviewPanel({ code }: PreviewPanelProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getSnackUrl = () => {
    const encodedCode = encodeURIComponent(code)
    return `https://snack.expo.dev/?platform=web&code=${encodedCode}`
  }

  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>React Native Code</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            <Copy className="h-4 w-4 mr-2" />
            {copied ? 'Copied!' : 'Copy Code'}
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={getSnackUrl()} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in Expo Snack
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4">
          <AlertDescription>
            React Native components can't be previewed directly in the browser. Click "Open in Expo Snack" to test the component in a live React Native environment.
          </AlertDescription>
        </Alert>
        <pre className="p-4 rounded-lg bg-muted overflow-auto max-h-[600px]">
          <code className="text-sm">{code}</code>
        </pre>
      </CardContent>
    </Card>
  )
}

