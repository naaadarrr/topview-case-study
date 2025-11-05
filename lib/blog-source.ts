import { docs, meta } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

/**
 * 修复 source 对象，确保 files 是数组而不是函数
 */
function fixSourceFiles(source: any) {
  // 如果 source.files 是函数，调用它获取数组
  if (typeof source.files === 'function') {
    try {
      const filesResult = source.files();
      if (Array.isArray(filesResult)) {
        source.files = filesResult;
        return source;
      }
    } catch (e) {
      console.error('Error calling files():', e);
    }
  }
  
  // 如果 source.files 仍然不是数组，尝试修复
  if (!Array.isArray(source.files)) {
    // 尝试从 docs 创建 files 数组
    if (Array.isArray(docs)) {
      source.files = docs.map((doc: any) => {
        if (doc && doc.info) {
          return {
            info: doc.info,
            data: doc.data,
            path: doc.info.path,
          };
        }
        return doc;
      });
    }
  }
  
  return source;
}

/**
 * 创建并修复 blogSource
 */
export function getBlogSource() {
  const source = createMDXSource(docs, meta);
  const fixedSource = fixSourceFiles(source);
  
  return loader({
    baseUrl: "/blog",
    source: fixedSource,
  });
}


