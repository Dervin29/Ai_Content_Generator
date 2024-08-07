"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const Editor = dynamic(() => import("@toast-ui/react-editor").then(mod => mod.Editor), { ssr: false });

interface PROPS {
  output: string;
}

function OutputSection({ output }: PROPS) {
  const editorRef = useRef<any>(null);
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(output || "");
    }
  }, [output]);

  useEffect(() => {
    console.log("Output prop:", output);

    const timer = setTimeout(() => {
      setKey(prevKey => prevKey + 1); // Update key to force re-render
    }, 3000); // 3000ms = 3 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [output]);

  return (
    <div className="bg-white shadow-lg border rounded-xl">
      <div className="p-5 flex justify-between items-center">
        <h2 className="font-medium text-lg">Your Output</h2>
        <Button onClick={() => navigator.clipboard.writeText(output)}>
          <Copy className="h-4 w-4" /> Copy
        </Button>
      </div>
      <Editor
        key={key} // Use key to force re-render
        ref={editorRef}
        initialValue={output}
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
