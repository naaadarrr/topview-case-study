/** @type {import('next').NextConfig} */
const { createMDX } = require('fumadocs-mdx/next');

const withMDX = createMDX();

const nextConfig = {
  // Keep TypeScript errors blocking builds so issues surface early
  typescript: { ignoreBuildErrors: false },
  // 如需临时关闭 ESLint 构建阻断可打开下一行（可选）
  // eslint: { ignoreDuringBuilds: true },
};

module.exports = withMDX(nextConfig);


