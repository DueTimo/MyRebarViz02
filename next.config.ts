import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* 静态导出配置 - 必须 */
  output: 'export',

  /* GitHub Pages 部署基础路径：必须设为您的仓库名 */
  basePath: '/MyRebarViz02',
  assetPrefix: '/MyRebarViz02/',

  /* 图片优化（静态导出时需要禁用优化） */
  images: {
    unoptimized: true,
  },

  /* 其他优化配置（修正后） */
  reactStrictMode: true,   // 原为 reactStructMode，已修正

  /* 移除 swcMinify，因为当前版本不再需要或已默认启用 */

  /* 禁用 x-powered-by 头部 */
  poweredByHeader: false,

  /* 编译选项（移除 console 日志仅在生产环境） */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
