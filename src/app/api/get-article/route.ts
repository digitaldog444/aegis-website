import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export const POST = async (req: NextRequest) => {
  const { slug } = await req.json();
  const filePath = path.join(process.cwd(), "src/docs/", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return NextResponse.json({ success: true, article: fileContents });
};
