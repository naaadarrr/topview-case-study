// lib/blog-source.ts

import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

/**
 * 单个文档文件的结构定义
 * - info: 文档的元信息，至少包含 path
 * - data: 文档的原始内容或解析后的数据（类型由库内部决定，使用 unknown 承接再由消费方缩窄）
 */
type DocInfo = {
  path: string;
  // 其他可能的字段按需扩展（例如 title、slug 等）
  // title?: string;
  // slug?: string;
};

type DocFile = {
  info: DocInfo;
  // MDX/markdown 的原始内容或编译结果，由上游库定义；此处用 unknown 承接并在使用处做类型缩窄
  data: unknown;
  // 可选的冗余 path 字段（与 info.path 对齐），便于下游使用
  path?: string;
};

/**
 * Fumadocs MDX Source 的最小结构
 * - files 可能是 DocFile[] 或返回 DocFile[] 的函数
 */
type MDXSource =
  | {
      files: DocFile[] | (() => DocFile[]);
      // 可能还有其他字段；保留为 unknown 以避免 any
      [key: string]: unknown;
    }
  | {
      // 某些版本可能没有 files 字段，后续会用 docs 回填
      [key: string]: unknown;
    };

/**
 * 修复 source 对象，确保 files 归一化为 DocFile[] 数组
 */
function fixSourceFiles(source: MDXSource): MDXSource {
  // 读取 files
  const filesValue = (source as { files?: DocFile[] | (() => DocFile[]) }).files;

  // 如果 files 是函数，调用并校验
  if (typeof filesValue === "function") {
    try {
      const result = filesValue();
      if (Array.isArray(result)) {
        (source as { files: DocFile[] }).files = result.map(normalizeDocFile);
        return source;
      }
    } catch (e) {
      // 保持构建环境干净：不在构建时输出 console.error
      // 但仍旧尝试回退到 docs
    }
  }

  // 如果 files 是数组，规范化结构后直接返回
  if (Array.isArray(filesValue)) {
    (source as { files: DocFile[] }).files = filesValue.map(normalizeDocFile);
    return source;
  }

  // 如果没有有效的 files，尝试从顶层 docs 构建
  if (Array.isArray(docs)) {
    (source as { files: DocFile[] }).files = docs
      .map((doc) => normalizeUnknownDoc(doc))
      .filter((f): f is DocFile => f !== null);
  }

  return source;
}

/**
 * 规范化未知结构的 doc 到 DocFile；失败则返回 null
 */
function normalizeUnknownDoc(doc: unknown): DocFile | null {
  if (typeof doc === "object" && doc !== null) {
    const obj = doc as { info?: unknown; data?: unknown };
    if (typeof obj.info === "object" && obj.info !== null) {
      const infoObj = obj.info as { path?: unknown };
      if (typeof infoObj.path === "string") {
        return {
          info: { path: infoObj.path },
          data: obj.data,
          path: infoObj.path,
        };
      }
    }
  }
  return null;
}

/**
 * 确保 DocFile 字段满足类型约束
 */
function normalizeDocFile(file: DocFile): DocFile {
  const path = file.path ?? file.info.path;
  return {
    info: { path: file.info.path },
    data: file.data,
    path,
  };
}

/**
 * 创建并修复 blogSource
 */
export function getBlogSource() {
  const source = createMDXSource(docs, meta) as MDXSource;
  const fixedSource = fixSourceFiles(source);

  return loader({
    baseUrl: "/blog",
    source: fixedSource,
  });
}



