"use client";

import { useState } from "react";

export const CopyButton = ({ url }: { url: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-transparent hover:text-white text-sm"
    >
      {copied ? "Copied!" : "Copy Link"}
    </button>
  );
};
