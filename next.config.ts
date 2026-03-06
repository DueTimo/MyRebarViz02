import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/MyRebarViz02' : '';

const nextConfig = {
  output: 'export',  // 确保是静态导出
  basePath: '/MyRebarViz02',   // 原来是 '/RebarViz'，改成您的仓库名
  assetPrefix: '/MyRebarViz02/', // 同上
  // ...其他配置
}
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
