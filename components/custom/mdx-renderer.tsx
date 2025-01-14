"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";

interface MDXRendererProps {
  content: string;
}

export function MDXRenderer({ content }: MDXRendererProps) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const serializeMDX = async () => {
      try {
        const result = await serialize(content);
        setMdxSource(result);
        setError(null);
      } catch (err) {
        console.error("Error serializing MDX:", err);
        setError("Failed to serialize MDX content");
        setMdxSource(null);
      }
    };

    serializeMDX();
  }, [content]);

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>MDX Rendering Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!mdxSource) {
    return <div>Loading...</div>;
  }

  return (
    <div className="prose max-w-md">
      <MDXRemote {...mdxSource} />
    </div>
  );
}
