"use client";

import { useState } from "react";
import { shortenUrl } from "./utils/api";
import "./styles/globals.css";

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [links, setLinks] = useState([]);
  const [copiedUrl, setCopiedUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const truncateUrl = (url, maxLength = 30) => 
    url.length > maxLength ? url.slice(0, maxLength) + "..." : url;

  const ensureHttps = (url) => 
    url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;

  const handleShortenUrl = async () => {
    if (!originalUrl.trim()) return alert("Enter a valid URL");
    setLoading(true);

    try {
      const secureUrl = ensureHttps(originalUrl);
      const data = await shortenUrl(secureUrl);
      setShortenedUrl(data.short_url);
      setOriginalUrl("");
      setLinks((prevLinks) => [{ original_url: secureUrl, short_url: data.short_url }, ...prevLinks]);
    } catch (error) {
      alert("Failed to shorten URL");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (error) {
      alert("Failed to copy URL");
    }
  };

  return (
    <div className="dark bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-blue-300">URL Shortener</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Enter URL..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white"
        />
        <button
          onClick={handleShortenUrl}
          disabled={loading}
          className="w-full mt-3 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Shortening..." : "Shorten"}
        </button>
      </div>
      {shortenedUrl && (
        <div className="mt-4 p-4 bg-gray-800 shadow-md rounded-md flex flex-col items-center">
          <p className="text-green-300">Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
            {shortenedUrl}
          </a>
          <button
            onClick={() => handleCopy(shortenedUrl)}
            className="mt-2 bg-gray-600 px-3 py-1 rounded hover:bg-gray-500"
          >
            {copiedUrl === shortenedUrl ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
      <h2 className="text-2xl mt-6 mb-2 text-gray-300">Previous Links</h2>
      <ul className="w-full max-w-md">
        {links.map((link, index) => (
          <li key={index} className="bg-gray-700 p-3 mb-2 rounded-md">
            <p className="text-sm text-gray-400">{truncateUrl(link.original_url)}</p>
            <div className="flex justify-between items-center">
              <a href={link.short_url} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                {link.short_url}
              </a>
              <button
                onClick={() => handleCopy(link.short_url)}
                className="bg-gray-600 px-3 py-1 rounded hover:bg-gray-500"
              >
                {copiedUrl === link.short_url ? "Copied!" : "Copy"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
