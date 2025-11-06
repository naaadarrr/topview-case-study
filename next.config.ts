import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  transpilePackages: ["geist"],
  // Force Next.js to use project root (not /src) for the App Router
  // because our `app/` directory is at the root while we also have a
  // separate `src/` folder for non-route code. This prevents the type
  // checker from looking for routes under `src/app/...`.
  srcDir: false,
};

export default withMDX(nextConfig);
