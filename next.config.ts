import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* 静态导出配置 - 必须 */
  output: 'export',

  /* GitHub Pages 部署基础路径：必须设为仓库名 */
  basePath: '/MyRebarViz02',
  assetPrefix: '/MyRebarViz02/',

  /* 图片优化（静态导出时需要禁用优化） */
  images: {
    unoptimized: true,
  },

  /* 其他优化配置（可选，根据原项目保留） */
  reactStrictMode: true,
  swcMinify: true,

  /* 如果原项目使用了环境变量，可能需要以下配置（但一般不需要） */
  // env: {
  //   customKey: 'my-value',
  // },

  /* 禁用 x-powered-by 头部 */
  poweredByHeader: false,

  /* 编译选项（一般保持默认） */
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
