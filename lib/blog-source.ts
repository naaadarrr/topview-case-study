// lib/blog-source.ts

import { docs, meta } from "@/.source";
import {
  loader,
  type Source,
  type SourceConfig,
  type VirtualFile,
} from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

let cachedBlogSource: ReturnType<typeof loader> | null = null;

function resolveFiles(files: VirtualFile[] | (() => VirtualFile[])): VirtualFile[] {
  const resolved = typeof files === "function" ? files() : files;

  if (!Array.isArray(resolved)) {
    throw new Error("Failed to resolve MDX source files to an array.");
  }

  return resolved.map((file) => ({
    ...file,
    type: file.type ?? "page",
  }));
}

function normalizeSource(source: Source<SourceConfig>): Source<SourceConfig> {
  const files = resolveFiles(source.files);
  (source as { files: VirtualFile[] }).files = files;
  return source;
}

export function getBlogSource() {
  if (cachedBlogSource) {
    return cachedBlogSource;
  }

  const source = createMDXSource(docs, meta);
  const fixedSource = normalizeSource(source);

  cachedBlogSource = loader({
    baseUrl: "/blog",
    source: fixedSource,
  });

  return cachedBlogSource;
}



