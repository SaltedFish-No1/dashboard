import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ✅ 忽略 ESLint 报错，不让其中断构建
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
