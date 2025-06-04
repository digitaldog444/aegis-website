"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const DocPage = ({ params }: any) => {
  const [contents, setContents] = useState("");
  const getArticle = async () => {
    const { slug } = await params;
    const response = await fetch("/api/get-article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    const json = await response.json();
    if (json.success) {
      setContents(json.article);
    } else {
      setContents("# 404 Page not found!");
    }
  };

  useEffect(() => {
    getArticle();
  }, []);
  if (!contents) {
    return (
      <section className="max-w-128 m-auto">
        <div>
          <h1>404 - Page not found</h1>
          <Link href="/docs">Docs</Link>
        </div>
      </section>
    );
  }
  return (
    <section className="max-w-128 m-auto">
      <ReactMarkdown>{contents}</ReactMarkdown>
    </section>
  );
};
export default DocPage;
