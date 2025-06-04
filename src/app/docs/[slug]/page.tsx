import fs from "fs";
import Link from "next/link";
import path from "path";
import ReactMarkdown from "react-markdown";

const DocPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/docs/", `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return (
      <section className="max-w-128 m-auto">
        <div>
          <h1>404 - Page not found</h1>
          <Link href="/docs">Docs</Link>
        </div>
      </section>
    );
  }
  const fileContents = fs.readFileSync(filePath, "utf-8");
  if (!fileContents) {
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
      <ReactMarkdown>{fileContents}</ReactMarkdown>
    </section>
  );
};
export default DocPage;
