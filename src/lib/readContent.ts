import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export function readMd<T>(relativePath: string): T {
  const fullPath = path.join(contentDir, relativePath);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);
  return data as T;
}

export function readMdWithBody<T>(relativePath: string): T & { body: string } {
  const fullPath = path.join(contentDir, relativePath);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { ...(data as T), body: content.trim() };
}
